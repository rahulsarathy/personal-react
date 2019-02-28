import React, { Component } from 'react';
import './components.css';

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."



class Project extends Component {

   constructor(props){
    super(props);

    this.state = {
      hovering: false
    };
   }

  render() {
    console.log(this.props.zoom);

    return (
        <div className="project" style={{transform: "scale(" + this.props.zoom + ")"}}>
          <p className="description">{text}
          </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/v21jgy4HJAI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
  }


}

export default Project;


