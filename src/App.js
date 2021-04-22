import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import './sass/materialize.scss';



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
      <div>
        <nav>
          <div className="nav-wrapper">
            <div>Do it! Start React</div>
          </div>
        </nav>
        <h1>Material CSS</h1>
      </div>
    );
  }
}


export default App;
