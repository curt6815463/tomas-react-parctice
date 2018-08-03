import React, { Component } from 'react';

class LoginScene extends Component {
  // constructor(props){
  //   super(props);
  // }

  goToHome = () => {
    this.props.setLoginState(false);
  }

  render() {
    return (
      <div>
        <button onClick={this.goToHome}>
          Go to Home
        </button>
      </div>
    );
  }
}

export default LoginScene;
