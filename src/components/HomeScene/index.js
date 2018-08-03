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
      </div>
    );
  }
}

export default HomeScene;
