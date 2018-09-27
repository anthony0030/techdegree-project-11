import React from "react";
import PropTypes from "prop-types";

function Image(props){
  return(
    <li>
      <a href={props.url} data-lightbox="search" data-title={props.title}>
        <img src={props.url} title={props.title} alt={props.title} />
      </a>
    </li>
  );
}

Image.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Image;