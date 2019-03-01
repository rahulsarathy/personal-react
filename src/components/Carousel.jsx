import React, { Component } from 'react';
import './components.css';
import Project from './Project'

const images = ["https://www.gstatic.com/webp/gallery/4.webp", "https://www.gstatic.com/webp/gallery/3.jpg", "https://www.gstatic.com/webp/gallery/1.webp"];
const descriptions = ["this is project 1", "this is project 2", "this is project 3"];

var projects = [];

class Carousel extends Component {

   createProjects(){
    projects = [];
    var zoom;
    var selected;
    console.log("current Project is " + this.props.currentProject);
    for (var i =0; i < images.length; i++)
    {
      if ( i === Number.parseInt(this.props.currentProject))
      {
        selected = true;
        zoom = this.props.zoom; 
      }
      else {
         zoom = false;
        selected = false;
      }

      projects.push(<Project onClick={this.props.onClick} image={images[i]} key={i} index={i} description={descriptions[i]} selected={selected} zoom={zoom}/>);
    }
   }

  render() {
    var toShift = 30 + this.props.currentProject * -24.92
    var shift = {
      marginLeft: toShift + '%'
    };
    this.createProjects();
    return (
      <div>
        <div className="carousel" style={shift}>
          {projects}
        </div>

      </div>
    );
  }

}

export default Carousel;


