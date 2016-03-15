import React from 'react';
import { reduxForm } from 'redux-form'

import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
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
				</div>
				<div className="form">
					<TextField
						className="text-field"
						{...fields.stick}
						floatingLabelText="黏邊位 (Stick)"
						/>
					<div className="text-field">
						<SelectField floatingLabelText="黏邊位數量 (Amount of Stick)" 
							value={fields.stickAmount.value}
							onChange={ (ev, index, value) => 
								{ fields.stickAmount.onChange(value) } }>
							<MenuItem value={0} primaryText="0"></MenuItem>
							<MenuItem value={1} primaryText="1"></MenuItem>
							<MenuItem value={2} primaryText="2"></MenuItem>
						</SelectField>
					</div>
					<TextField
						className="text-field"
						{...fields.verticalTear}
						floatingLabelText="右邊撕邊位 (Vertical Tear)"
						defaultValue="0.25"
						/>
					<div className="text-field">
						<SelectField floatingLabelText="右邊撕邊位數量 (Amt of Vert Tear)" 
							value={fields.verticalTearAmount.value}
							onChange={ (ev, index, value) => 
								{ fields.verticalTearAmount.onChange(value) } }>
							<MenuItem value={0} primaryText="0"></MenuItem>
							<MenuItem value={1} primaryText="1"></MenuItem>
							<MenuItem value={2} primaryText="2"></MenuItem>
						</SelectField>
					</div>
					<TextField
						className="text-field"
						{...fields.horizontalTear}
						floatingLabelText="左邊撕邊位 (Horizontal Tear)"
						defaultValue="0.375"
						/>
					<div className="text-field">
						<SelectField floatingLabelText="左邊撕邊位數量 (Amt of Horiz Tear)"
							value={fields.horizontalTearAmount.value}
							onChange={ (ev, index, value) => 
								{ fields.horizontalTearAmount.onChange(value) } }>
							<MenuItem value={0} primaryText="0"></MenuItem>
							<MenuItem value={1} primaryText="1"></MenuItem>
							<MenuItem value={2} primaryText="2"></MenuItem>
						</SelectField>
					</div>
					<TextField
						className="text-field"
						{...fields.clip}
						floatingLabelText="夾位 (Clip)"
						defaultValue="0.5"
						/>
					<div className="text-field">
						<SelectField floatingLabelText="夾位數量 (Amount of Clip)" 
							value={fields.clipAmount.value}
							onChange={ (ev, index, value) => 
								{ fields.clipAmount.onChange(value) } }>
							<MenuItem value={0} primaryText="0"></MenuItem>
							<MenuItem value={1} primaryText="1"></MenuItem>
							<MenuItem value={2} primaryText="2"></MenuItem>
						</SelectField>
					</div>
					<TextField
						className="text-field"
						{...fields.toungue}
						floatingLabelText="脷仔 (Toungue)"
						defaultValue="0.5"
						/>
					<div className="text-field">
						<SelectField floatingLabelText="脷仔數量 (Amount of Toungue)" 
							value={fields.toungueAmount.value}
							onChange={ (ev, index, value) => 
								{ fields.toungueAmount.onChange(value) } }>
							<MenuItem value={0} primaryText="0"></MenuItem>
							<MenuItem value={1} primaryText="1"></MenuItem>
							<MenuItem value={2} primaryText="2"></MenuItem>
						</SelectField>
					</div>
					<TextField
						className="text-field"
						{...fields.back}
						floatingLabelText="扣背 (Back)"
						/>
					<div className="text-field">
						<SelectField floatingLabelText="扣背數量 (Amount of Back)" 
							value={fields.backAmount.value}
							onChange={ (ev, index, value) => 
								{ fields.backAmount.onChange(value) } }>
							<MenuItem value={0} primaryText="0"></MenuItem>
							<MenuItem value={1} primaryText="1"></MenuItem>
							<MenuItem value={2} primaryText="2"></MenuItem>
						</SelectField>
					</div>
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
	'verticalTearAmount',
	'verticalTear',
	'horizontalTearAmount',
	'horizontalTear',
	'toungue',
	'toungueAmount',
	'back',
	'backAmount'
];

const initialValues = {
	'A': undefined, 
	'B': undefined, 
	'C': undefined,
	'stickAmount': 1, 
	'stick': 0.5, 
	'clipAmount': 1, 
	'clip': 0.5, 
	'verticalTearAmount': 1,
	'verticalTear': 0.25,
	'horizontalTearAmount': 1,
	'horizontalTear': 0.375,
	'toungue': 0.5,
	'toungueAmount': 1,
	'back': undefined,
	'backAmount': 0
}

export default reduxForm({
	form: 'strat1',
	fields
},
state => ({
	initialValues: initialValues
}))(Strat1)