import React, { Component } from 'react';

const style = {
  background : {
  	position: 'relative',
  	background: "url('./assets/imgs/treebackground.jpg')",
    backgroundAttachment: 'relative',
    width: '100%',
    height: 900,
    minHeight: 'auto',
    margin: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'top center'
	}
}


export default class Background extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    window.addEventListener("scroll", function(event) {
      var top = this.scrollY
      document.getElementById('FirstPanel').style.opacity = 1 - top / 700
    })
  }
  
	render () {
		return (
      <div id="FirstPanel" style={style.background} ></div>
    )
	}
}