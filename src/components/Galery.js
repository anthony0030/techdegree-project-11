import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";
import NotFound from "./NotFound";
import Pages from "./Pages";


function Galery(props) {

  const {
    amountOfResults,
    buildFlikerUrl,
    curentPage,
    HandleImageClick,
    images,
    loading,
    numberOfPages,
    searchQuery,
    setPage,
    title
  } = props;

  // if the application is loading it will return a loading screen
  if(loading){
    return( <p>loading...</p> );
  }

  // is there are no results it will return no results warning
  let gotResults = images.length > 0;
  if(!gotResults){
    return( <NotFound title={title} /> );
  }

  const allImages = images.map((image, index) => (
    <Image
      url={buildFlikerUrl(image)}
      title={image.title}
      key={image.id}
      index={index}
      HandleImageClick={HandleImageClick}
    />
  ));

  return (
    <div className="photo-container">
      <h2>{title}</h2>
      <small>Total Results: {amountOfResults}</small>
      <ul className="photo-results">{allImages}</ul>
      <Pages numberOfPages={numberOfPages} curentPage={curentPage} setPage={setPage} searchQuery={searchQuery}/>
    </div>
  );

}

Galery.propTypes = {
  amountOfResults: PropTypes.string.isRequired,
  buildFlikerUrl: PropTypes.func.isRequired,
  curentPage: PropTypes.number.isRequired,
  HandleImageClick: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Galery;
