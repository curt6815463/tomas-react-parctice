import React from 'react';

const HomeScene = ({logout, changePage}) =>
  <div>
    <button onClick={logout}>
      Go to Login
    </button>
    <button onClick={() => changePage('userManager')}>
      Go to UserManager
    </button>
    <h1>Home Scene</h1>
  </div>

export default HomeScene;
