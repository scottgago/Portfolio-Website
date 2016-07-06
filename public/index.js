import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Background from './components/background'
import NavBar from './components/navbar'
import CenterSquare from './components/centerSquare'
import Contact from './components/contact'

class App extends Component {
	render () {
		return <div>
		<NavBar />
		<Background />
		<CenterSquare />
		<Contact />
		</div>
	}
}

ReactDOM.render(<App />, document.getElementById('app'))