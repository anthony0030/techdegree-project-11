import React from 'react';
import {NavLink} from 'react-router-dom';

const MainNavigation = props => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/cats">Cats</NavLink></li>
      <li><NavLink to="/dogs">Dogs</NavLink></li>
      <li><NavLink to="/computers">Computers</NavLink></li>
      <li><NavLink to="/coffee">Coffee</NavLink></li>
    </ul>
  </nav>
);

export default MainNavigation;