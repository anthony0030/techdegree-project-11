import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";


function MainNavigation(props) {
  // returns a navigation with links pragmatically from an array of strings
  const { HandleClick, links, setSafeSearch, safeSearch, setImagesPerPage, numberOfImagesPerPage} = props;
  return(
    <nav className="main-nav">
      <div className="settings_container">
        <div className="settings_item">
          Safe Search:&nbsp;
          <select onChange={setSafeSearch} defaultValue={safeSearch}>
            <option value="1">Safe</option>
            <option value="2">Moderate</option>
            <option value="3">Restricted</option>
          </select>
        </div>
        <div className="settings_item">
          Results per Page:&nbsp;
          <select onChange={setImagesPerPage} defaultValue={numberOfImagesPerPage}>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="80">80</option>
            <option value="120">120</option>
          </select>
        </div>
      </div>
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
  HandleClick: PropTypes.func.isRequired,
  setSafeSearch: PropTypes.func.isRequired,
  setImagesPerPage: PropTypes.func.isRequired
};

export default MainNavigation;
