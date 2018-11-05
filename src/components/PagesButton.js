import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// Returns a button to change the page
function PagesButton(props) {
  const { setPage, searchQuery, curentPage, text, value, className, disabled, hide} = props;
  return (
    <li className={`change-page_button-container ${hide? "hide" : null}`}>
      {disabled?
        <NavLink value={value} className={`change-page_button-button ${className}`} to={`/${searchQuery}/${curentPage}`}>{text}</NavLink>
        :
        <NavLink onClick={setPage} value={value} className={`change-page_button-button ${className}`} to={`/${searchQuery}/${value}`}>{text}</NavLink>
      }
    </li>
  );
}

PagesButton.propTypes = {
  setPage: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  value: PropTypes.number.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hide: PropTypes.bool
};

export default PagesButton;