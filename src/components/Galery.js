import React from "react";
import PropTypes from "prop-types";
import ImageList from "./ImageList";

//returns a loading screen or a image list depending on the load prop
function Galery(props) {
   const {images, title, amount, loading, HandleImageClick, BuildFlikerUrl} = props;
  return(
    <div className="photo-container">
      { loading ?
        <p>loading...</p>
        :
        <ImageList results={images} title={title} amount={amount} HandleImageClick={HandleImageClick} BuildFlikerUrl={BuildFlikerUrl}/>
      }
    </div>
  );
}

Galery.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  BuildFlikerUrl: PropTypes.func.isRequired,
  HandleImageClick: PropTypes.func.isRequired
};

export default Galery;
