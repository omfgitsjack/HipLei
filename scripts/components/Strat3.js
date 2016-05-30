import React from 'react';
import { reduxForm } from 'redux-form'

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import HLSelectField from './HLSelectField';
import RaisedButton from 'material-ui/RaisedButton';

import Subheader from './Subheader'
import * as labels from '../constants/labels'

class Strat3 extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Strat3';
	}

	renderHB(fields) {
		return (<div className="form">
			<Subheader title="Diameter, Height"></Subheader>
			<TextField
				className="text-field even"
				{...fields.diameter}
				floatingLabelText={labels.DIAMETER}
				/>
			<TextField
				className="text-field even"
				{...fields.height}
				floatingLabelText={labels.HEIGHT}
				/>
		</div>)
	}

	renderBodyVerticalFormula(fields) {
		return (<div className="form">
			<Subheader title="通道"></Subheader>
			<TextField
				className="text-field"
				{...fields.roll}
				floatingLabelText={labels.ROLL} />
			<HLSelectField floatingLabelText={labels.AMOUNT}
					value={fields.rollAmount.value}
					onChange={ (ev, index, value) => 
						{ fields.rollAmount.onChange(value) } }>
			<TextField
				className="text-field"
				{...fields.verticalTear}
				floatingLabelText={labels.TEAR}
				defaultValue="0.25"
				/>
			<TextField
				className="text-field"
				{...fields.clip}
				floatingLabelText={labels.CLIP}
				defaultValue="0.5"
				/>
			</HLSelectField>
		</div>)
	}

	renderBodyHorizontalFormula(fields) {
		return (<div className="form">
			<Subheader title="橫"></Subheader>
			<TextField
				className="text-field"
				{...fields.stick}
				floatingLabelText={labels.STICK}
				/>
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
		</div>)
	}

	renderBaseFormula(fields) {
		return (<div className="form">
			<Subheader title={labels.BASE}></Subheader>
			<TextField
				className="text-field"
				{...fields.baseOther}
				floatingLabelText={labels.OTHER}
				defaultValue="0"
				/>
			<TextField
				className="text-field"
				{...fields.baseOtherAmount}
				floatingLabelText="數量 (Other Amount)"
				defaultValue="1"
				/>
		</div>)
	}

	renderLidFormula(fields) {
		return (
			<div>
				<Subheader title={labels.LID}></Subheader>
				<div className="form">
					<TextField
						className="text-field even"
						{...fields.lidLength}
						floatingLabelText={labels.LIDLENGTH}
						defaultValue="1"
						/>
				</div>
				<div className="form">
					<TextField
						className="text-field"
						{...fields.lidOther}
						floatingLabelText={labels.OTHER}
						defaultValue="0"
						/>
					<TextField
						className="text-field"
						{...fields.lidOtherAmount}
						floatingLabelText="數量 (Other Amount)"
						defaultValue="1"
						/>
				</div>
			</div>)
	}


	render() {
		let { fields, handleSubmit } = this.props

		return (
			<Paper className="content-area">
				{this.renderHB(fields)}
				<Subheader title="筒身" style={{ fontSize: "20px", marginTop: '15px'}}></Subheader>
				{this.renderBodyHorizontalFormula(fields)}
				{this.renderBodyVerticalFormula(fields)}
				{this.renderBaseFormula(fields)}
				{this.renderLidFormula(fields)}
				<RaisedButton
					className="submission-button"
					style={{marginTop: '20px'}}
					label="Calculate"
					primary={true}
					fullWidth={true}
					onClick={handleSubmit}>
				</RaisedButton>
			</Paper>
			);
	}
}

export const fields = {
	diameter: undefined,
	height: undefined,
	stick: 0.5,
	clip: 0.75,
	horizontalTear: 0.375,
	horizontalTearAmount: 2,
	verticalTear: 0.25,
	roll: 0.5,
	rollAmount: 1,
	baseOther: 0,
	baseOtherAmount: 1,
	lidOther: 0,
	lidOtherAmount: 1,
	lidLength: undefined
};

export default reduxForm({
	form: 'strat3',
	fields: Object.keys(fields)
},
state => ({
	initialValues: fields
}))(Strat3)