import React from "react";
import PropTypes from "prop-types";

// Returns a button to change the page
function PagesButton(props) {
  const { setPage, text, value, className, disabled, hide} = props;
  return (
    <li className={`change-page_button-container ${hide? "hide" : null}`}>
      <button className={`change-page_button-button ${className}`} onClick={setPage} value={value} disabled={disabled}>{text}</button>
    </li>
  );
}

PagesButton.propTypes = {
  setPage: PropTypes.func.isRequired,
  text: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  value: PropTypes.number.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hide: PropTypes.bool
};

export default PagesButton;