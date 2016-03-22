import React from 'react';
import { reduxForm } from 'redux-form'

import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import SelectField from './HLSelectField';
import RaisedButton from 'material-ui/lib/raised-button';

import Subheader from './Subheader'

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
						className="text-field even"
						{...fields.diameter}
						floatingLabelText="直徑 (Diameter)"
						/>
					<TextField
						className="text-field even"
						{...fields.height}
						floatingLabelText="高 (Height)"
						/>
					<TextField
						className="text-field even"
						{...fields.lidLength}
						floatingLabelText="蓋長度"
						defaultValue="1"
						/>
				</div>
				<div className="form">
					<TextField
						className="text-field"
						{...fields.stick}
						floatingLabelText="黏邊位 (Stick)"
						/>
					<TextField
						className="text-field"
						{...fields.clip}
						floatingLabelText="夾位 (Clip)"
						defaultValue="0.5"
						/>
				</div>
				<div className="form">
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
					<Subheader title="右邊 (Vertical)"/>
					<TextField
						className="text-field"
						{...fields.verticalTear}
						floatingLabelText="撕邊位"
						defaultValue="0.25"
						/>
				</div>
				<div className="form">
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
						floatingLabelText="其他數量 (Other Amount)"
						defaultValue="1"
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
	other: 0,
	otherAmount: 1,
	lidLength: undefined
};

export default reduxForm({
	form: 'strat3',
	fields: Object.keys(fields)
},
state => ({
	initialValues: fields
}))(Strat3)