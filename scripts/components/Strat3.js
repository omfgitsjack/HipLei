import React from 'react';
import { reduxForm } from 'redux-form'

import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

class Strat3 extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Strat3';
	}

	render() {
		let { fields, handleSubmit } = this.props

		return (
			<Paper className="content-area">
				<div className="form">
				<TextField
					className="text-field"
					{...fields.diameter}
					floatingLabelText="直徑 (Diameter)"
					/>
				<TextField
					className="text-field"
					{...fields.height}
					floatingLabelText="高 (Height)"
					/>
				<TextField
					className="text-field"
					{...fields.stick}
					floatingLabelText="黏邊位 (Stick)"
					/>
				<TextField
					className="text-field"
					{...fields.stickAmount}
					floatingLabelText="黏邊位數量 (Amount of Stick)"
					/>
				<TextField
					className="text-field"
					{...fields.tear}
					floatingLabelText="撕邊位 (Tear)"
					/>
				<TextField
					className="text-field"
					{...fields.tearAmount}
					floatingLabelText="撕邊位數量 (Amount of Tear)"
					/>
				<TextField
					className="text-field"
					{...fields.roll}
					floatingLabelText="卷邊 (roll)"
					/>
				<TextField
					className="text-field"
					{...fields.rollAmount}
					floatingLabelText="卷邊數量 (Amount of Roll)"
					/>
				</div>
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

export const fields = [
	'diameter', 
	'height', 
	'stickAmount', 
	'stick', 
	'tearAmount',
	'tear',
	'roll',
	'rollAmount'
];

export default reduxForm({
	form: 'strat3',
	fields
})(Strat3)