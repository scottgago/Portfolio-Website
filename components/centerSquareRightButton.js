import React, { Component } from 'react';

const style = {
	background: {
		float: 'right',
		position: 'absolute',
		display: 'block',
		width: "100%",
		bottom: '50%',
		right: 0,
		height: '10%',
		fontFamily: "'Economica', sans-serif",
		color: 'black',
		display: 'flex',
    	alignItems: 'center',
    	justifyContent: 'center',
    	fontSize: 40
	},
	topQuote: {
		height: '50%',
		fontSize: 32
	},
	topQuoteRight: {
		height: '50%',
		fontSize: 32,
		marginLeft: 40
	},
	bottomQuote : {
		fontSize: 70,
		fontFamily: "'Allura', cursive",
		opacity: 1,
   		transition: 'opacity .25s ease-in-out'
	}

}

export default class CenterSquareRightButton extends Component {
	
	componentDidMount(){
    	window.addEventListener("scroll", function(event) {
      		var top = this.scrollY
      		document.getElementById('Quote').style.opacity = 1 - top / 700
    	})
  	}



	render () {

		return <div id="Quote" style={style.background} className="fade-out">
		<div><span className="fade-in one">Others have seen what is and asked</span> <span className="fade-in two">'why?'</span>
		<br />
		<span className="fade-in three">I have seen what could be and asked</span> <span className="fade-in four">'why not?' </span>
		<br />
		<span className="fade-in five">Pablo Picasso</span>
		</div> 
		</div>

	}
}