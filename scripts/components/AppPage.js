// node_modules
import React from 'react';
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { pushPath } from 'redux-simple-router'


// Ui Components
import Snackbar from 'material-ui/lib/snackbar';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

import Strat1 from './Strat1'
import Strat2 from './Strat2'
import Strat3 from './Strat3'

import MyRawTheme from '../utilities/RockstarMaterialTheme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
class AppPage extends React.Component {
	constructor(props) {
	    	super(props);
	    	this.state = {
	    		formulaSelected: 1,
	    		calculation: undefined
	    	}
	}

	handleChange = (event, index, value) => this.setState(Object.assign({}, this.state, { 
		formulaSelected: value,
		calculation: undefined
	}))

	resetCalculation = () => this.setState(Object.assign({}, this.state, { calculation: undefined }))

	handleStratSubmit(calculator, dimensions) {
		this.setState(Object.assign({}, this.state, {
			calculation: calculator(dimensions)
		}))
	}

	render() {
		return (
			<div className="app">
				<h4 style={style.header}>Calculator</h4>
				<Tabs style={style.tabs} inkBarStyle={style.inkBar}>
					<Tab label="光身摺盒" style={style.tab} onClick={this.resetCalculation}>
						<Strat1 {...Strat1.fields} onSubmit={this.handleStratSubmit.bind(this, calculateStrat1)}/>
					</Tab>
					<Tab label="蘋果批" style={style.tab} onClick={this.resetCalculation}>
						<Strat2 {...Strat2.fields} onSubmit={this.handleStratSubmit.bind(this, calculateStrat2)}/>
					</Tab>
					<Tab label="圓柱" style={style.tab} onClick={this.resetCalculation}>
						<Strat3 {...Strat3.fields} onSubmit={this.handleStratSubmit.bind(this, calculateStrat3)}/>
					</Tab>					
				</Tabs>
				{this.state.calculation ? <h4 style={style.header}>Result: {this.state.calculation}</h4> : undefined}
			</div>)
	}
}

function convertToInt(fields) {
	let obj = {}
	for (var prop in fields) {
		if (fields.hasOwnProperty(prop)) {
			obj[prop] = parseInt((fields[prop]))
		}
	}
	return obj
}

function calculateStrat1(fields) {
	let f = convertToInt(fields)
	let calc1 = 2*f.A + 2*f.B + f.stickAmount * f.stick + f.clipAmount * f.clip + f.tearAmount * f.tear
	let calc2 = 2*f.B + f.C + f.toungueAmount * f.toungue + f.clipAmount * f.clip + f.tearAmount * f.tear + f.backAmount * f.back

	let surfaceArea = calc1 * calc2
	
	return surfaceArea
}

function calculateStrat2(fields) {
	let f = convertToInt(fields)

	let surfaceArea = (2*f.A + f.stick + f.tear) * f.B
	
	return surfaceArea
}

function calculateStrat3(fields) {
	let f = convertToInt(fields)
	let calc1 = ((f.diameter * Math.PI) + f.stickAmount * f.stick + f.tearAmount * f.tear) * (f.height + f.tearAmount * f.tearAmount + f.roll),
	calc2 = ((f.diameter * Math.PI) + f.stickAmount * f.stick) * (f.height + f.rollAmount * f.roll)

	let surfaceArea = calc1 + calc2
	
	return surfaceArea
}

const style = {
	header: {
		textAlign: 'center'
	},
	tabs: {
		maxWidth: '593px',
		margin: '0 auto'
	},
	tab: {
		fontWeight: '700',
	    	fontSize: '18px'
	},
	inkBar: {
		color: 'white',
		backgroundColor:'white'
	}
}

export default connect()(AppPage)