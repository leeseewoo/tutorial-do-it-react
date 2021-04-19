import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import TodaysPlan from './03/TodaysPlan';
import PropComponent from './03/PropsComponent';



class App extends Component {
  render() {
    return (
      <PropComponent
        name="Do it React!"
      />
    )
  }
}



export default App;
