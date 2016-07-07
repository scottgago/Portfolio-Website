import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '80%',
    height: 600,
    overflowY: 'auto',
    marginBottom: 24,
    marginTop: '7%'
  },
};

const tilesData = [
  {
    img: './assets/imgs/water2.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://www.thelandinghall.com/design/red-table-cloth.png',
    title: 'Breakfst',
    author: 'jill111',
  },
  {
    img: 'http://wiki.arcknight.net/images/Armor-Cloth-HeadScarf.png',
    title: 'Brekfast',
    author: 'jill111',
  },
  {
    img: 'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/thumb/5/54/Red_Cloth-Classic.png/120px-Red_Cloth-Classic.png?version=a0397bf1cdb0baf1bed73455aa3c3274',
    title: 'Breakft',
    author: 'jill111',
  }
];

export default class CenterSquare extends Component {

	componentDidMount(){
    	window.addEventListener("scroll", function(event) {
      		var top = this.scrollY
      		console.log(top)
      		document.getElementById('GridList').style.opacity = 0 + top / 872
    	})
  	}
  
  	render () {
  		return  <div id="GridList" style={styles.root}>
    				<GridList
      					cellHeight={200}
      					style={styles.gridList}>
      					<Subheader></Subheader>
      						{tilesData.map((tile) => (
        						<GridTile
          							key={tile.img}
          							title={tile.title}
          							subtitle={<span>by <b>{tile.author}</b></span>}
          							actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
          								<img src={tile.img} />
        						</GridTile>
      						))}
    				</GridList>
  				</div>
	}

}
