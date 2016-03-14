import React from 'react';
import { reduxForm } from 'redux-form'

import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

class Strat2 extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Strat2';
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
						{...fields.stick}
						floatingLabelText="Stick"
						/>
					<TextField
						className="text-field"
						{...fields.tear}
						floatingLabelText="Tear"
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
	'A', 
	'B', 
	'stick', 
	'tear',
];

export default reduxForm({
	form: 'strat2',
	fields
})(Strat2)