import React from "react";
import PropTypes from "prop-types";

// returns one image
function Image(props) {
  const { url, title, index, HandleImageClick } = props;
  return(
    <li>
      <img src={url} title={title} index={index} alt={title} onClick={HandleImageClick}/>
    </li>
  );
}

Image.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  HandleImageClick: PropTypes.func.isRequired
};

export default Image;