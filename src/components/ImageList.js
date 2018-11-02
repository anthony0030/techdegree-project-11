import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";
import NotFound from "./NotFound";

// Returns a list of images or a no results page depending on the data passed to it
function ImageList(props) {
  const {results, title, BuildFlikerUrl, HandleImageClick} = props

  const images = results.map((image, index) => (
    <Image
      url={BuildFlikerUrl(image)}
      title={image.title}
      key={image.id}
      index={index}
      HandleImageClick={HandleImageClick}
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
  title: PropTypes.string.isRequired,
  BuildFlikerUrl: PropTypes.func.isRequired,
  HandleImageClick: PropTypes.func.isRequired
};

export default ImageList;