import React, { Component } from 'react';
import CenterSquareRightButton from './CenterSquareRightButton'
import CenterSquareLeftButton from './CenterSquareLeftButton'

const style = {
	background: {
		position: 'fixed',
  		top: '52%',
  		left: '50%',
  		transform: 'translate(-50%, -50%)',
  		width: '45%',
  		height: '70%',
		fontFamily: "'Economica', sans-serif",
		color: 'black',
	},
	titleStyle: {
		textAlign: 'center',
		width: '100%'
	},
	topText: {
		fontSize: 22,
		borderBottom: '1px solid black',
		width: '40%',
		margin: '0 auto'

	},
	bottomText: {
		fontSize: 44,
		marginTop: 0
	}
}

export default class CenterSquare extends Component {

	componentDidMount(){
    	window.addEventListener("scroll", function(event) {
      		var top = this.scrollY
      		document.getElementById("NameTitle").style.height = 70 + top / 30 + "%"
    	})
  	}

	render () {
		return( 
		<div id="NameTitle" style={style.background}>
			<div style={style.titleStyle}>
			<p style={style.topText}>Full Stack Web Developer</p>
			<p style={style.bottomText}>Scott Gago</p>
			</div>
			{
			// <CenterSquareRightButton />
			// <CenterSquareLeftButton />
			}
		</div>)
	}
}