import React, { Component } from 'react';
import './components.css';


class Project extends Component {

  render() {
    var style;
    if (this.props.selected) {
      style = "selected";
    }
    else {
      style = "unselected";
    }

    return (
        <div onClick={this.props.onClick} className={style} index={this.props.index} style={{transform: "scale(" + this.props.zoom + ")"}}>
          <p className="description">{this.props.description}</p>
          <img className="projectImage" src={this.props.image} />
        </div>
    );
  }


}

export default Project;


