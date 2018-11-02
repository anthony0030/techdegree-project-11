import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";
import NotFound from "./NotFound";

// Returns a list of images or a no results page depending on the data passed to it
function ImageList(props) {
  const {results, title} = props

  const images = results.map(image => (
    <Image
      url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
      title={image.title}
      key={image.id}
    />
  ));

  let gotResults = results.length > 0;

  return (
    gotResults ?
      <React.Fragment>
        <h2>{title}</h2>
        <ul>{images}</ul>
      </React.Fragment>
    :
    <NotFound title={title} /> 
  );
}

ImageList.propTypes = {
  results: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default ImageList;