import React, { Component } from 'react';

const style = {
  background : {
  	position: 'fixed',
  	left: 0,
  	top: 0,
  	right: 0,
  	bottom: 0,
  	background: "url('./assets/imgs/water2.jpg')",
  	
    backgroundSize: '100% 100%',
  	backgroundPosition: 'bottom 140px'
	}
}

export default class Background extends Component {
	render () {
		return <div style={style.background}></div>
	}
}