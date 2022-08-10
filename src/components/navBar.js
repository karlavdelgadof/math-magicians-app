import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav id="navbar">
      <h1>Math Magicians</h1>
      <div id="nav-links">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/calculator" className="link">Calculator</NavLink>
        <NavLink to="/quote" className="link">Quote</NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
