import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

function MainNavigation(props) {
  return(
    <nav className="main-nav">
      <ul>
        {
          props.links.map(
            (link, index) => <li key={index} onClick={props.setLoading} ><NavLink exact to={link}>{link}</NavLink></li>
          )
        }
      </ul>
    </nav>
  )
}

MainNavigation.propTypes = {
  links: PropTypes.array.isRequired,
  setLoading: PropTypes.func.isRequired,
}

export default MainNavigation;