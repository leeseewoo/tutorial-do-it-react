import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import TodaysPlan from './03/TodaysPlan';
import PropComponent from './03/PropsComponent';

import ChildComponent2 from './03/ChildComponent2';



class App extends Component {
  render() {
    return (
      <ChildComponent2
        objValue={{ age: 20}}
        requiredStringValue="문자"
      />
    )
  }
}



export default App;
