import React, { Component } from 'react';
import './components/App.scss';
import Carousel from './components/Carousel.js';

var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

class App extends Component {


  render() {
    return (
      <div>
        <div>
        </div>
        <div>
          <ul>
            <li>Projects</li>
            <li>Experience</li>
            <li>Rahul Sarathy</li>
          </ul>
        </div>
        <Carousel items={items} active={0}/>
      </div>
    );
  }
}

export default App;
