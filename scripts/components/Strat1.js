import React from 'react';
import { reduxForm } from 'redux-form'

import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

import * as Utilities from '../utilities/Utilities'

class Strat1 extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Strat1';
	}

	render() {
		let { fields, handleSubmit } = this.props

		return (
			<Paper className="content-area">
				<div className="form">
					<TextField
						className="text-field"
						{...fields.A}
						floatingLabelText="A"
						/>
					<TextField
						className="text-field"
						{...fields.B}
						floatingLabelText="B"
						/>
					<TextField
						className="text-field"
						{...fields.C}
						floatingLabelText="C"
						/>
					<TextField
						className="text-field"
						{...fields.stick}
						floatingLabelText="Stick"
						/>
					<TextField
						className="text-field"
						{...fields.stickAmount}
						floatingLabelText="Amount of Stick"
						/>
					<TextField
						className="text-field"
						{...fields.tear}
						floatingLabelText="Tear"
						/>
					<TextField
						className="text-field"
						{...fields.tearAmount}
						floatingLabelText="Amount of Tear"
						/>
					<TextField
						className="text-field"
						{...fields.clip}
						floatingLabelText="Clip"
						/>
					<TextField
						className="text-field"
						{...fields.clipAmount}
						floatingLabelText="Amount of Clip"
						/>
					<TextField
						className="text-field"
						{...fields.toungue}
						floatingLabelText="Toungue"
						/>
					<TextField
						className="text-field"
						{...fields.toungueAmount}
						floatingLabelText="Amount of Toungue"
						/>
					<TextField
						className="text-field"
						{...fields.back}
						floatingLabelText="Back"
						/>
					<TextField
						className="text-field"
						{...fields.backAmount}
						floatingLabelText="Amount of Back"
						/>
				</div>
				<RaisedButton
					label="Calculate"
					className="submission-button"
					style={{marginTop: '20px'}}
					primary={true}
					fullWidth={true}
					disabled={!Utilities.validate({
						A: 'A',
						B: 'B', 
						C: 'C',
						stickAmount: 'stickAmount', 
						stick: 'stick', 
						clipAmount: 'clipAmount', 
						clip: 'clip', 
						tearAmount: 'tearAmount',
						tear: 'tear',
						toungue: 'toungue',
						toungueAmount: 'toungueAmount',
						back: 'back',
						backAmount: 'backAmount'
					})}
					onClick={handleSubmit}>
				</RaisedButton>
			</Paper>
			);
	}
}

export const fields = [
	'A', 
	'B', 
	'C',
	'stickAmount', 
	'stick', 
	'clipAmount', 
	'clip', 
	'tearAmount',
	'tear',
	'toungue',
	'toungueAmount',
	'back',
	'backAmount'
];

export default reduxForm({
	form: 'strat1',
	fields
})(Strat1)