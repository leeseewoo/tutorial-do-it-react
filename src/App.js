import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import  Counter  from "./03/Counter2";
import NewCounter  from "./03/NewCounter";
import ListExample from './03/ListExample'

import ScrollSpy from './03/ScrollSpy'

class App extends Component {

  
  constructor(props) {
    super(props);
    //this.state = { count: 1 };
  }

  /*
  increaseCount() {
    this.setState(( {count}) => ({ count: count + 1}));
  }
  */

  
  
  render() {

    return (
      <ScrollSpy />
    );
  }
}


export default App;
