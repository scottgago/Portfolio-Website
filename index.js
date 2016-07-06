import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Background from './components/background'
import NavBar from './components/navbar'
import CenterSquare from './components/centerSquare'
import Contact from './components/contact'
import GridListExampleSimple from './components/gridList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


class App extends Component {
	render () {
		return (
		<MuiThemeProvider>
	  		<div style={{height: 1700, backgroundColor: "white"}}>
				<NavBar />
				<Background />
				<GridListExampleSimple />
				<CenterSquare />
				<Contact />
			</div>
		</MuiThemeProvider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))