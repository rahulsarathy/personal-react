import React, { Component } from 'react';
import './components.css';

class Element extends Component {

  constructor(props){
    super(props);

    if (this.props.active)
    {
      this.state = {active: "active"}
    }
    else {
      this.state = {active: "inactive"}
    }
  }

  render() {
    return (
      <div className="element">
       {this.props.value}
      </div>
    );
  }
}

export default Element;
