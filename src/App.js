import React, { Component } from 'react';
import Carousel from './components/Carousel'

class App extends Component {

  content = [3, 4, 5 , 6];

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
        <Carousel content={this.content}/>
      </div>
    );
  }
}

export default App;
