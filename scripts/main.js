import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import { Provider } from 'react-redux'
import { syncReduxAndRouter } from 'redux-simple-router'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Components
import AppPage from './components/AppPage';
import SamplePage from './components/SamplePage';

// Theming
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RockstarTheme from './utilities/RockstarMaterialTheme';
const muiTheme = getMuiTheme(RockstarTheme)

import configureStore from './store/configureStore'

const store = configureStore()
const history = createHistory();

syncReduxAndRouter(history, store)

/* 
	Needed for on touch tap
*/
injectTapEventPlugin();
/*  
  Routes
*/
var routes = (
	<MuiThemeProvider muiTheme={muiTheme}>
		<Provider store={store}>
			<Router history={history}>
				<Route path="/" component={AppPage}>
				</Route>
				<Route path="/sample" component={SamplePage}>
				</Route>
				<Route path="/staff" component={SamplePage}>
				</Route>
				<Route path="/manager" component={SamplePage}>
				</Route>

			</Router>
	  	</Provider>
	  </MuiThemeProvider>
)

ReactDOM.render(routes, document.querySelector('#main'));