import React, { Component } from 'react';

class HomeScene extends Component {

  goToLogin = () => {
    this.props.setLoginState(true);
  }
  render() {
    return (
      <div>
        <button onClick={this.goToLogin}>
          Go to Login
        </button>
        <h1>Home Scene</h1>
      </div>
    );
  }
}

export default HomeScene;
