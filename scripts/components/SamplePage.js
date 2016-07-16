import React from 'react';
import { reduxForm } from 'redux-form'

import TextField from 'material-ui/TextField';
import Subheader from './Subheader'
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton'

import thickness from '../constants/thickness'
import thicknessToSurfaceArea from '../services/thicknessToSurfaceArea'

function convertToFloat(fields) {
	let obj = {}
	for (var prop in fields) {
		if (fields.hasOwnProperty(prop)) {
			obj[prop] = parseFloat(fields[prop].value)
		}
	}
	return obj
}

class SamplePage extends React.Component {
    constructor(props) {
        super(props);
    }

    hideThicknessField(material) {
		return !material.value || material.value === "PP1" || material.value === "PP1"
	}

	calculateSA(fields) {
		let l = fields.length/2.54,
			w = fields.width/2.54,
			h = fields.height/2.54

		let totalL = (l + w) * 2 + 1.25,
			totalH = (w * 2) + h + 2,
			totalSA = totalL * totalH

		return totalSA
	}

	calculatePrice(fields) {
		let f = convertToFloat(fields),
			sa = this.calculateSA(f),
			thicknessPerSquareFt = thicknessToSurfaceArea(f.thickness),
			pricePerLb = 5.8,
			numberOfBoxesPerLbOfMaterial = thicknessPerSquareFt / sa,
			costPerBox = pricePerLb / numberOfBoxesPerLbOfMaterial
		
		let 啤粘 = f['啤粘'] ? f['啤粘'] : 0
		let 印刷 = f['印刷'] ? f['印刷'] : 0
		let 专色 = f['专色'] ? f['专色'] : 0
		let 丝印 = f['丝印'] ? f['丝印'] : 0
		let 烫金 = f['烫金'] ? f['烫金'] : 0

		let totalCostPerBox = costPerBox + 啤粘 + 印刷 + 专色 + 丝印 + 烫金

		return totalCostPerBox
	}

	roundToCurrency(val) {
		return Math.round(val * 100) / 100
	}

    render() {
    	let { fields, handleSubmit } = this.props

        return (
        	<div className="app sample">
        		<div className="form">
					<SelectField
						className="text-field"
						style={{ flex: '1 1 0%', marginLeft: '10px'}}
						autoWidth={false}
						value={fields.material.value}
						onChange={ (ev, index, value) => { fields.material.onChange(value) }}
						floatingLabelText="質料 + 盒类">
						<MenuItem value="PVC - 普通摺盒" primaryText="PVC - 普通摺盒"></MenuItem>
						<MenuItem disabled value="PVC - 自動扣底 / 一字行摺盒 / 扣底" primaryText="PVC - 自動扣底 / 一字行摺盒 / 扣底"></MenuItem>
						<MenuItem disabled value="PVC - 扣背摺盒" primaryText="PVC - 扣背摺盒"></MenuItem>
						<MenuItem disabled value="APET - 普通摺盒" primaryText="APET - 普通摺盒"></MenuItem>
						<MenuItem disabled value="APET - 自動扣底 / 一字行摺盒/ 扣底" primaryText="APET - 自動扣底 / 一字行摺盒/ 扣底"></MenuItem>
						<MenuItem disabled value="PP - 普通摺盒" primaryText="PP - 普通摺盒"></MenuItem>
						<MenuItem disabled value="PP 一字行 / 扣底摺盒" primaryText="PP 一字行 / 扣底摺盒"></MenuItem>
						<MenuItem disabled value="PVC - 圆筒摺盒" primaryText="PVC - 圆筒摺盒"></MenuItem>
						<MenuItem disabled value="PVC - 苹果批" primaryText="PVC - 苹果批"></MenuItem>
					</SelectField>
					{	
						this.hideThicknessField(fields.material) ? undefined : (
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
				</div>
        		<div className="form">
					<TextField
						className="text-field even"
						{...fields.length}
						floatingLabelText="長"
						/>
					<TextField
						className="text-field even"
						{...fields.width}
						floatingLabelText="闊"
						/>
					<TextField
						className="text-field even"
						{...fields.height}
						floatingLabelText="高"
						/>
				</div>
				<div className="form">
					<TextField
						className="text-field even"
						floatingLabelText="啤粘" 
						{...fields['啤粘']} />
					<TextField
						className="text-field even"
						floatingLabelText="印刷"
						{...fields['印刷']} />
					<TextField
						className="text-field even"
						floatingLabelText="专色"
						{...fields['专色']} />
					<TextField
						className="text-field even"
						floatingLabelText="丝印"
						{...fields['丝印']} />
					<TextField
						className="text-field even"
						floatingLabelText="烫金"
						{...fields['烫金']} />
				</div>
				<div className="form">
					<Subheader title="订单资料"></Subheader>
					<TextField
						className="text-field even"
						{...fields.description}
						floatingLabelText="Description"
						/>
					<TextField
						className="text-field even"
						{...fields.type}
						floatingLabelText="Type"
						/>
				</div>
				<div className="form">
					<TextField
						className="text-field even"
						floatingLabelText="Quantity" 
						{...fields.quantity} />
					<TextField
						className="text-field even"
						floatingLabelText="Currency"
						{...fields.currency} />
				</div>
				<div className="form">
					<TextField
						className="text-field even"
						floatingLabelText="Handler" 
						{...fields.quantity} />
					<TextField
						className="text-field even"
						floatingLabelText="Area"
						{...fields.area} />
				</div>
				<div className="form">
					<TextField
						className="text-field even"
						floatingLabelText="Price (Before shipping)" 
						disabled={true}
						value={ this.roundToCurrency(parseFloat(fields.quantity.value) * this.calculatePrice(fields)) || undefined }
						 />
					<TextField
						className="text-field even"
						floatingLabelText="Price per Pieces"
						value={ this.roundToCurrency(this.calculatePrice(fields)) || undefined } />
					<TextField
						className="text-field even"
						floatingLabelText="Cost of shipping method"
						{...fields.costOfShippingMethod} />
					<TextField
						className="text-field even"
						floatingLabelText="Shipment Method"
						{...fields.shippingMethod} />
				</div>
        	</div>);
    }
}

const style = {
	checkbox: {
		maxWidth: '100px'
	}
}

const fields = {
	'length': undefined, 
	'width': undefined, 
	'height': undefined,
	'thickness': 1,
	'description': undefined,
	'material': undefined,
	'type': 'normal',
	'啤粘': undefined,
	'印刷': undefined,
	'专色': undefined,
	'丝印': undefined,
	'烫金': undefined,
	quantity: 1,
	currency: 'USD',
	handler: undefined,
	area: undefined,
	priceBeforeShipping: undefined,
	pricePerPieces: undefined,
	costOfShippingMethod: undefined,
	shippingMethod: undefined
}

export default reduxForm({
	form: 'strat1',
	fields: Object.keys(fields)
},
state => ({
	initialValues: fields
}))(SamplePage)