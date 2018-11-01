import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";


function MainNavigation(props) {
  // returns a navigation with links pragmatically from an array of strings
  return(
    <nav className="main-nav">
      <ul>
        {
          props.links.map( (link, index) =>
            <li key={index} onClick={props.HandleClick} >
              <NavLink exact to={`/${link}`}>{link}</NavLink>
            </li>
          )
        }
      </ul>
    </nav>
  );
}

MainNavigation.propTypes = {
  links: PropTypes.array.isRequired,
  HandleClick: PropTypes.func.isRequired
};

export default MainNavigation;