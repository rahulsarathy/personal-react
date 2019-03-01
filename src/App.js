import React, { Component } from 'react';
import {Carousel, Menu, Navbar} from './components/Components'


class App extends Component {
  constructor(props) {
    super(props);
    this.handleDown = this.handleDown.bind(this);
    this.handleUp = this.handleUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);


    this.state = {
      zoom: 1.0,
      currentProject: 0,
      value: 0
    }
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

   handleChange(event) {
    var currentProject;
    var sliderValue = Number.parseInt(event.target.value);
    if (sliderValue < 300)
    {
      currentProject = 0
    }
    if (sliderValue < 600 && sliderValue > 300)
    {
      currentProject = 1
    }
    if (sliderValue > 600)
    {
      currentProject = 2
    }
    this.setState(
      {
        currentProject: currentProject,
        value: sliderValue,
      });
   }

   handleClick(event) {
    var currentProject = Number.parseInt(event.target.getAttribute('index'));
    var sliderValue;
    if (currentProject == 0)
    {
      sliderValue = 0;
    }
    if (currentProject == 1)
    {
      sliderValue = 600;
    }
    if (currentProject == 2)
    {
      sliderValue = 900;
    }
    this.setState(
      {
        currentProject: currentProject,
        value: sliderValue
      });
   }


  render() {
    return (
      <div>
        <Menu />
        <Carousel zoom={this.state.zoom} onClick={this.handleClick} currentProject={this.state.currentProject}/>
        <Navbar value={this.state.value} handleChange={this.handleChange} handleDown={this.handleDown} handleUp={this.handleUp}/>
      </div>
    );
  }
}

export default App;
