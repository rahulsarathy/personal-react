import React, { Component } from 'react';
import './components.css';

class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
        <input onMouseUp={this.props.handleUp} onMouseDown={this.props.handleDown} onChange={this.props.handleChange} type="range" min="0" max="900" value={this.props.value} className="slider" id="myRange" />
      </div>
    );
  }


}

export default Navbar;
