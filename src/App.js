import React, { Component } from 'react';

import HomeScene from './components/HomeScene';
import LoginScene from './components/LoginScene';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false
    };
  }
  render() {
    let button
    this.isLogin ?
      button = <HomeScene /> :
      button = <LoginScene />

    return (
      <div className="App">
        {button}
      </div>
    );
  }
}

export default App;
