import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";
import NotFound from "./NotFound";
import Pages from "./Pages";

// Returns a list of images or a no results page depending on the data passed to it
function ImageList(props) {
  const {results, title, amount, BuildFlikerUrl, HandleImageClick, setPage, curentPage, numberOfPages, loading} = props

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

  if(loading){
    return(<p>LOADDDDDDDINGGGGGG</p>)
  }

  return (
    gotResults ?
      <div className="photo-container">
        <h2>{title}</h2>
        <small>total results: {amount}</small>
        <ul className="photo-results">{images}</ul>
        <Pages numberOfPages={numberOfPages} curentPage={curentPage} setPage={setPage}/>
      </div>
    :
    <NotFound title={title} /> 
  );
}

ImageList.propTypes = {
  results: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  BuildFlikerUrl: PropTypes.func.isRequired,
  HandleImageClick: PropTypes.func.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  curentPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
};

export default ImageList;