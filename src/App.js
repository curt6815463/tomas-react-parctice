import React, { Component } from 'react';
import LoginScene from './components/LoginScene';
import MainScene from './MainScene';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: {
        isLogin: true,
      },
      routes: {
        currentPage: 'Home'
      }
    };
  }

  setLoginState = (isLogin) => {
    this.setState({auth: {isLogin}});
  }

  render() {
    return this.state.auth.isLogin
      ? <MainScene />
      : <LoginScene login={this.setLoginState}/>
  }
}

export default App;
