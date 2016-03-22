// node_modules
import React from 'react';
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { pushPath } from 'redux-simple-router'

// Services
import { calculateStrat1, calculateStrat2, calculateStrat3} from '../services/SACalculator'

// Ui Components
import Snackbar from 'material-ui/lib/snackbar';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

// Custom Components
import Strat1 from './Strat1'
import Strat2 from './Strat2'
import Strat3 from './Strat3'
import ResultsArea from './ResultsArea'

// Theme
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
					<Tab label="圆筒" style={style.tab} onClick={this.resetCalculation}>
						<Strat3 {...Strat3.fields} onSubmit={this.handleStratSubmit.bind(this, calculateStrat3)}/>
					</Tab>					
				</Tabs>
				<ResultsArea {...this.state.calculation} showWork={true}/>
			</div>)
	}
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