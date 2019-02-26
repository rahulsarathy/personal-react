import React, { Component } from 'react';
import './components.css';

class Carousel extends Component {

   constructor(props){
    super(props);
    var items = this.props.content;

    var listItems = items.map((number) => 
    <li key={number}>{number}</li>
    );

    listItems = this.highlightCorrect(listItems)

    this.state = {
      listItems: listItems
    };

   }

   highlightCorrect(content){
    var arrayLength = content.length;
    var toRet = [];
    for (var i = 0; i< arrayLength; i++)
    {
      var key = content[i].key
      content[i] = <li className="highlighted" key={key}>{key}</li>
    }
    return content
   }

  render() {
    return (
      <div>
        <ul>{this.state.listItems}</ul>
      </div>
    );
  }
}

export default Carousel;
