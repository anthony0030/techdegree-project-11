import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";


function MainNavigation(props) {
  // returns a navigation with links pragmatically from an array of strings
  const { HandleClick, links, setSafeSearch} = props;
  return(
    <nav className="main-nav">

      Safe Search:&nbsp;
      <select onChange={setSafeSearch}>
        <option value="1">Safe</option>
        <option value="2">Moderate</option>
        <option value="3">Restricted</option>
      </select>
      <ul>
        {
          links.map( (link, index) =>
            <li key={index} onClick={HandleClick} >
              <NavLink exact to={`/${link.toLowerCase()}`}>{link}</NavLink>
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