import React, { Component } from 'react';
import './components.css';
import Navbar from './Navbar'
import Project from './Project'

class Carousel extends Component {

   constructor(props){
    super(props);
    this.handleDown = this.handleDown.bind(this);
    this.handleUp = this.handleUp.bind(this);


    this.state = {
      selected: 0, 
      zoom: 1.0
    };
   
   }

   handleDown(event) {
    this.setState(
      {
        zoom: 0.5
      });
   }

   handleUp(event) {
    this.setState(
      {
        zoom: 1.0
      });
   }


  render() {
    return (
      <div className="carousel">
        <Project zoom={this.state.zoom}/>
        <Navbar handleDown={this.handleDown} handleUp={this.handleUp}/>
      </div>
    );
  }

}

export default Carousel;


