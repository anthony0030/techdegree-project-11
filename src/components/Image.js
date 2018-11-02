import React from "react";
import PropTypes from "prop-types";

// returns one image
function Image(props) {
  const { url, title } = props;
  return(
    <li>
      <a href={url} data-lightbox="search" data-title={title}>
        <img src={url} title={title} alt={title} />
      </a>
    </li>
  );
}

Image.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Image;