import React, { Component } from 'react';
import CenterSquareRightButton from './CenterSquareRightButton'
import CenterSquareLeftButton from './CenterSquareLeftButton'

const style = {
	background: {
		position: 'absolute',
  		top: '52%',
  		left: '50%',
  		transform: 'translate(-50%, -50%)',
  		width: '45%',
  		height: '70%',
		fontFamily: "'Economica', sans-serif",
		color: 'white',
	},
	titleStyle: {
		textAlign: 'center',
		width: '100%'
	},
	topText: {
		fontSize: 22,
		borderBottom: '1px solid white',
		width: '40%',
		margin: '0 auto'

	},
	bottomText: {
		fontSize: 44,
		marginTop: 0
	}
}

export default class CenterSquare extends Component {
	render () {
		return( 
		<div style={style.background}>
			<div style={style.titleStyle}>
			<p style={style.topText}>Web Developer</p>
			<p style={style.bottomText}>Scott Gago</p>
			</div>
			{
			// <CenterSquareRightButton />
			// <CenterSquareLeftButton />
			}
		</div>)
	}
}