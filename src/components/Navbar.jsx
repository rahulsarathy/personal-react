import React, { Component } from 'react';
import './components.css';

class Navbar extends Component {

   constructor(props){
    super(props);

   this.state = {value: "2"};

   this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
    this.setState({value: event.target.value});
   }

  render() {
    return (
      <div className="navbar">
        <input onMouseUp={this.props.handleUp} onMouseDown={this.props.handleDown} onChange={this.handleChange} type="range" min="1" max="3" value={this.state.value} className="slider" id="myRange" />
      </div>
    );
  }


}

export default Navbar;
