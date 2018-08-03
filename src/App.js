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

  setLoginState = (bool) => {
    console.log(bool)
    this.setState({isLogin: bool})
  }


  render() {
    let button
    this.state.isLogin ?
      button = <LoginScene setLoginState={this.setLoginState} /> :
      button = <HomeScene setLoginState={this.setLoginState} />

    return (
      <div className="App">
        {button}
      </div>
    );
  }
}

export default App;
