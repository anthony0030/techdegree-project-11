import React from 'react';
import {NavLink} from 'react-router-dom';

function MainNavigation(props) {
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink exact to="/cats">Cats</NavLink></li>
        <li><NavLink exact to="/dogs">Dogs</NavLink></li>
        <li><NavLink exact to="/computers">Computers</NavLink></li>
        <li><NavLink exact to="/coffee">Coffee</NavLink></li>
      </ul>
    </nav>
  )
};

export default MainNavigation;