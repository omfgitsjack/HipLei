import React from 'react';
import { reduxForm } from 'redux-form'

import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import SelectField from './HLSelectField';
import RaisedButton from 'material-ui/lib/raised-button';

import Subheader from './Subheader'
import * as labels from '../constants/labels'

class Strat2 extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Strat2';
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
				<SelectField floatingLabelText={labels.AMOUNT} 
					value={fields.stickAmount.value}
					onChange={ (ev, index, value) => 
						{ fields.stickAmount.onChange(value) } }>
				</SelectField>
				<TextField
					className="text-field"
					{...fields.horizontalTear}
					floatingLabelText={labels.TEAR}
					defaultValue="0.375"
					/>
				<SelectField floatingLabelText={labels.AMOUNT}
					value={fields.horizontalTearAmount.value}
					onChange={ (ev, index, value) => 
						{ fields.horizontalTearAmount.onChange(value) } }>
				</SelectField>
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
					{...fields.clip}
					floatingLabelText={labels.CLIP}
					defaultValue="0.5"
					/>
				<SelectField floatingLabelText={labels.AMOUNT} 
					value={fields.clipAmount.value}
					onChange={ (ev, index, value) => 
						{ fields.clipAmount.onChange(value) } }>
				</SelectField>
				<TextField
					className="text-field"
					{...fields.verticalTear}
					floatingLabelText={labels.TEAR}
					defaultValue="0.375"
					/>
				<SelectField floatingLabelText={labels.AMOUNT}
					value={fields.verticalTearAmount.value}
					onChange={ (ev, index, value) => 
						{ fields.verticalTearAmount.onChange(value) } }>
				</SelectField>
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

	render() {
		let { fields, handleSubmit } = this.props

		return (
			<Paper className="content-area">
				{this.renderABC(fields)}
				{this.renderHorizontalFormula(fields)}
				{this.renderVerticalFormula(fields)}
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
	'verticalOther': 0,
	'verticalOtherAmount': 1,
	'horizontalOther': 0,
	'horizontalOtherAmount': 1
}

export default reduxForm({
	form: 'strat2',
	fields: Object.keys(fields)
},
state => ({
	initialValues: fields
}))(Strat2)