import React, { Component } from 'react';

const style = {
	navBarStyle : {
		
		width: '100%',
		height: 70,
		position: 'absolute',
		top: 0,
		left: 0
	},
	floatRight: {
		float: 'right',
		height: '100%',
		width: '10%',
		fontFamily: "'Economica', sans-serif",
		color: 'black',
		display: 'flex',
    	alignItems: 'center',
    	justifyContent: 'center',
    	fontSize: 30
	}
}

export default class NavBar extends Component {
	render () {
		return (
			<div style={style.navBarStyle}>
				<div style={style.floatRight}>Other Stuff</div>
				<div style={style.floatRight}>Technical Blog</div>
				<div style={style.floatRight}>About Me</div>
			</div>
		)
	}
}