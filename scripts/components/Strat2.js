import React from 'react';
import { reduxForm } from 'redux-form'

import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import SelectField from './HLSelectField';
import RaisedButton from 'material-ui/lib/raised-button';

import Subheader from './Subheader'

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
						className="text-field even"
						{...fields.A}
						floatingLabelText="A"
						/>
					<TextField
						className="text-field even"
						{...fields.B}
						floatingLabelText="B"
						/>
					<TextField
						className="text-field even"
						{...fields.C}
						floatingLabelText="C"
						/>
				</div>
				<div className="form">
					<TextField
						className="text-field"
						{...fields.stick}
						floatingLabelText="黏邊位 (Stick)"
						/>
					<SelectField floatingLabelText="黏邊位數量" 
						value={fields.stickAmount.value}
						onChange={ (ev, index, value) => 
							{ fields.stickAmount.onChange(value) } }>
					</SelectField>

					<TextField
						className="text-field"
						{...fields.clip}
						floatingLabelText="夾位 (Clip)"
						defaultValue="0.5"
						/>
					<SelectField floatingLabelText="夾位數量" 
						value={fields.clipAmount.value}
						onChange={ (ev, index, value) => 
							{ fields.clipAmount.onChange(value) } }>
					</SelectField>

					<Subheader title="右邊 (Vertical)"/>
					<TextField
						className="text-field"
						{...fields.verticalTear}
						floatingLabelText="撕邊位"
						defaultValue="0.25"
						/>
					<SelectField floatingLabelText="撕邊位數量" 
						value={fields.verticalTearAmount.value}
						onChange={ (ev, index, value) => 
							{ fields.verticalTearAmount.onChange(value) } }>
					</SelectField>

					<Subheader title="左邊 (Horizontal)"/>
					<TextField
						className="text-field"
						{...fields.horizontalTear}
						floatingLabelText="撕邊位"
						defaultValue="0.375"
						/>
					<SelectField floatingLabelText="撕邊位數量"
						value={fields.horizontalTearAmount.value}
						onChange={ (ev, index, value) => 
							{ fields.horizontalTearAmount.onChange(value) } }>
					</SelectField>

				</div>
				<div className="form">
					<TextField
						className="text-field"
						{...fields.other}
						floatingLabelText="其他 (Other)"
						defaultValue="0"
						/>
					<TextField
						className="text-field"
						{...fields.otherAmount}
						floatingLabelText="其他數量"
						defaultValue="1"
						/>
				</div>
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
	'other': 0,
	'otherAmount': 1
}

export default reduxForm({
	form: 'strat2',
	fields: Object.keys(fields)
},
state => ({
	initialValues: fields
}))(Strat2)