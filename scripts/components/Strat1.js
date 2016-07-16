import React from 'react';
import { reduxForm } from 'redux-form'

import HLSelectField from './HLSelectField';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

import Subheader from './Subheader'

import * as labels from '../constants/labels'
import thickness from '../constants/thickness'


class Strat1 extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Strat1';
		this.state = {
			value: 1
		}
	}

	renderABC(fields) {
		return (<div className="form">
			<Subheader title="A, B, C"></Subheader>
			<TextField
				className="text-field even"
				{...fields.A}
				floatingLabelText={labels.A}
				/>
			<TextField
				className="text-field even"
				{...fields.B}
				floatingLabelText={labels.B}
				/>
			<TextField
				className="text-field even"
				{...fields.C}
				floatingLabelText={labels.C}
				/>
		</div>)
	}

	renderHorizontalFormula(fields) {
		return (
			<div className="form">
				<Subheader title={labels.HORIZONTAL}></Subheader>
				<TextField
					className="text-field"
					{...fields.stick}
					floatingLabelText={labels.STICK}
					/>
				<HLSelectField floatingLabelText={labels.AMOUNT} 
					value={fields.stickAmount.value}
					onChange={ (ev, index, value) => 
						{ fields.stickAmount.onChange(value) } }>
				</HLSelectField>
				<TextField
					className="text-field"
					{...fields.horizontalTear}
					floatingLabelText={labels.TEAR}
					defaultValue="0.375"
					/>
				<HLSelectField floatingLabelText={labels.AMOUNT}
					value={fields.horizontalTearAmount.value}
					onChange={ (ev, index, value) => 
						{ fields.horizontalTearAmount.onChange(value) } }>
				</HLSelectField>
				<TextField
					className="text-field"
					{...fields.horizontalOther}
					floatingLabelText={labels.OTHER}
					defaultValue="0"
					/>
				<TextField
					className="text-field"
					{...fields.horizontalOtherAmount}
					floatingLabelText={labels.AMOUNT}
					defaultValue="1"
					/>
			</div>)
	}

	renderVerticalFormula(fields) {
		return (
			<div className="form">
				<Subheader title={labels.VERTICAL}></Subheader>
				<TextField
					className="text-field"
					{...fields.toungue}
					floatingLabelText={labels.TOUNGUE}
					defaultValue="0.5"
					/>
				<HLSelectField floatingLabelText={labels.AMOUNT} 
					value={fields.toungueAmount.value}
					onChange={ (ev, index, value) => 
						{ fields.toungueAmount.onChange(value) } }>
				</HLSelectField>
				<TextField
					className="text-field"
					{...fields.clip}
					floatingLabelText={labels.CLIP}
					defaultValue="0.5"
					/>
				<HLSelectField floatingLabelText={labels.AMOUNT} 
					value={fields.clipAmount.value}
					onChange={ (ev, index, value) => 
						{ fields.clipAmount.onChange(value) } }>
				</HLSelectField>
				<TextField
						className="text-field"
						{...fields.back}
						floatingLabelText={labels.BACK}
						/>
					<HLSelectField floatingLabelText={labels.AMOUNT} 
						value={fields.backAmount.value}
						onChange={ (ev, index, value) => 
							{ fields.backAmount.onChange(value) } }>
					</HLSelectField>
				<TextField
					className="text-field"
					{...fields.verticalTear}
					floatingLabelText={labels.TEAR}
					defaultValue="0.375"
					/>
				<HLSelectField floatingLabelText={labels.AMOUNT}
					value={fields.verticalTearAmount.value}
					onChange={ (ev, index, value) => 
						{ fields.verticalTearAmount.onChange(value) } }>
				</HLSelectField>
				<TextField
					className="text-field"
					{...fields.verticalOther}
					floatingLabelText={labels.OTHER}
					defaultValue="0"
					/>
				<TextField
					className="text-field"
					{...fields.verticalOtherAmount}
					floatingLabelText={labels.AMOUNT}
					defaultValue="1"
					/>
			</div>)
	}

	hideThicknessField(fields) {
		return !fields.material.value || fields.material.value === "PP1" || fields.material.value === "PP1"
	}

	renderMaterialArea(fields) {

		let materials = this.props.materials

		let onChangeMaterial = (ev, index, value) => {
			fields.material.onChange(value)
			// change the default thickness
			fields.thickness.onChange(JSON.stringify(materials[index][1].thickness))
		}

		return (
			<div className="form">
				<Subheader title="材料"></Subheader>
				<div className="text-field">
					<SelectField floatingLabelText="材料"
						value={fields.material.value}
						onChange={onChangeMaterial}>
						{
							this.props.materials.map(([key, {category, price, thickness, description}]) => {
								return <MenuItem primaryText={description} value={key} key={key}/>
							})
						}
					</SelectField>
				</div>
				{	
					this.hideThicknessField(fields) ? undefined : (
					<div className="text-field">
						<SelectField floatingLabelText="料厚"
							value={fields.thickness.value}
							onChange={(ev, index, value) => { fields.thickness.onChange(value) }}>
							{
								_.pairs(thickness).map(([thickness, inches]) => {
									return <MenuItem primaryText={thickness} value={thickness} key={thickness}></MenuItem>
								})
							}
						</SelectField>
					</div>)
				}
			</div>)
	}

	handleChange = (event, index, value) => this.setState({value});

	render() {
		let { fields, handleSubmit } = this.props

		return (
			<Paper className="content-area">
				{this.renderABC(fields)}
				{this.renderMaterialArea(fields)}
				<Card>
					<CardHeader
						title="Show Details"
						subtitle="Caluclations & Defaults"
						actAsExpander={true}
						showExpandableButton={true}>
					</CardHeader>
					<CardText expandable={true}>
						{this.renderHorizontalFormula(fields)}
						{this.renderVerticalFormula(fields)}	
					</CardText>
				</Card>
				        
				<RaisedButton
					label="Calculate"
					className="submission-button"
					style={{marginTop: '20px'}}
					primary={true}
					fullWidth={true}
					onClick={handleSubmit}>
				</RaisedButton>
			</Paper>
			);
	}
}

const fields = {
	'A': undefined, 
	'B': undefined, 
	'C': undefined,
	'stickAmount': 1, 
	'stick': 0.5, 
	'clipAmount': 1, 
	'clip': 0.75, 
	'verticalTearAmount': 1,
	'verticalTear': 0.25,
	'horizontalTearAmount': 2,
	'horizontalTear': 0.375,
	'toungue': 0.5,
	'toungueAmount': 2,
	'back': 0,
	'backAmount': 0,
	'verticalOther': 0,
	'verticalOtherAmount': 1,
	'horizontalOther': 0,
	'horizontalOtherAmount': 1,
	'material': undefined,
	'thickness': undefined
}

export default reduxForm({
	form: 'strat1',
	fields: Object.keys(fields)
},
state => ({
	initialValues: fields
}))(Strat1)