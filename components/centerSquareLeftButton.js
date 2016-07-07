import React, { Component } from 'react';

const style = {
	background: {
		float: 'left',
		position: 'absolute',
		display: 'block',
		width: "45%",
		borderStyle: 'solid',
		borderWidth: 3,
		bottom: 0,
		height: '10%',
		fontFamily: "'Economica', sans-serif",
		color: 'black',
		display: 'flex',
    	alignItems: 'center',
    	justifyContent: 'center',
    	fontSize: 40
	}
}

export default class CenterSquareLeftButton extends Component {
	render () {
		return <div style={style.background}>View Work</div>
	}
}