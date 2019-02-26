import React, { Component } from 'react';
import './components.css';
import Element from './Element'

class Carousel extends Component {

   constructor(props){
    super(props);
    var items = this.props.content;

    var listItems = items.map((number) => 
    <li key={number}>{number}</li>
    );


    this.state = {
      listItems: listItems,
      active: 0
    };

    listItems = this.highlightCorrect(listItems);
   }

   highlightCorrect(content) {
    var arrayLength = content.length;

    for (var i =0; i< arrayLength; i++)
    {
      var value = content[i].key;
      var tofill;
      var active = 0;
      if (i === active)
      {
        tofill = <Element key={value} value={value} active={true} />
      }
      else {
        tofill = <Element key={value} value={value} active={false} />
      }
      content[i] = tofill;
    }

    return content
   }

  render() {
    return (
      <div className="carousel">
        <div className="left">
        Left
        </div>
        <div className="vertical">
          <ul>{this.state.listItems}</ul>
        </div>
        <div className="right">
        Right
        </div>
      </div>
    );
  }


}

export default Carousel;
