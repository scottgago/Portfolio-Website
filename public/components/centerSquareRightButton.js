import React, { Component } from 'react';

const style = {
	background: {
		float: 'right',
		position: 'absolute',
		display: 'block',
		width: "45%",
		borderStyle: 'solid',
		borderWidth: 3,
		bottom: 0,
		right: 0,
		height: '10%',
		fontFamily: "'Economica', sans-serif",
		color: 'white',
		display: 'flex',
    	alignItems: 'center',
    	justifyContent: 'center',
    	fontSize: 40
	}
}

export default class CenterSquareRightButton extends Component {
	render () {
		return <div style={style.background}>Technical Blog</div>
	}
}