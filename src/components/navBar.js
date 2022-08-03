/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <nav id="navbar">
        <h1>Math Magicians</h1>
        <ul id="nav-links">
          <li><a href="https://github.com/" className="link">Home</a></li>
          <li><a href="https://github.com/" className="link">Calculator</a></li>
          <li><a href="https://github.com/" className="link">Quote</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
