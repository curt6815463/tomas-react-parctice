import React, { Component } from 'react';

const LoginScene = ({login}) =>
  <div>
    <button onClick={login}>
      Go to Home
    </button>
    <h1>Login Scene</h1>
  </div>

export default LoginScene;
