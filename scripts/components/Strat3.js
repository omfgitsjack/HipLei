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
					floatingLabelText="Diameter"
					/>
				<TextField
					className="text-field"
					{...fields.height}
					floatingLabelText="Height"
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
					{...fields.roll}
					floatingLabelText="roll"
					/>
				<TextField
					className="text-field"
					{...fields.rollAmount}
					floatingLabelText="Amount of Roll"
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