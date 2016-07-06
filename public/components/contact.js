import React, { Component } from 'react';

const style = {
	contactStyle : {
		borderStyle: 'solid',
		borderWidth: 5,
		borderColor: "white",
		width: '20%',
		height: 70,
		zIndex:2,
		position: 'absolute',
		bottom: 20,
		right: 20,
		fontFamily: "'Economica', sans-serif",
		color: 'white',
		display: 'flex',
    	alignItems: 'center',
    	justifyContent: 'center',
    	fontSize: 40
	}
}

export default class Contact extends Component {
	render () {
		return <div></div>
		{
		//return <div style={style.contactStyle}>GET IN CONTACT</div>
		}
	}
}