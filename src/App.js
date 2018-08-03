import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScene from './components/HomeScene'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeScene></HomeScene>
      </div>
    );
  }
}

export default App;
