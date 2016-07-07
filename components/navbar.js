import React, { Component } from 'react';

const style = {
	navBarStyle : {
		width: '100%',
		height: 70,
		position: 'fixed',
		top: 0,
		left: 0,
		zIndex: 2
	},
	floatRight: {
		float: 'right',
		height: '100%',
		width: "10.1vw",
		fontFamily: "'Economica', sans-serif",
		color: 'black',
		display: 'flex',
    	alignItems: 'center',
    	justifyContent: 'center',
    	fontSize: "2.1vw"
	}
}

export default class NavBar extends Component {
	render () {
		return (
			<div style={style.navBarStyle}>
				<div style={style.floatRight}>About Me</div>
				<div style={style.floatRight}>Technical Blog</div>
				<div style={style.floatRight}>Portfolio</div>
			</div>
		)
	}
}