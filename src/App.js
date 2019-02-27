import React, { Component } from 'react';
import Carousel from './components/Carousel'


class App extends Component {

  render() {
    return (
      <div>
        <ul>
          <li>Projects</li>
          <li>Experience</li>
          <li>Rahul Sarathy</li>
        </ul>
        <Carousel />
      </div>
    );
  }
}

export default App;
