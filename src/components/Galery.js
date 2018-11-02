import React from "react";
import PropTypes from "prop-types";
import ImageList from "./ImageList";

//returns a loading screen or a image list depending on the load prop
function Galery(props) {
   const {images, title, loading} = props;
  return(
    <div className="photo-container">
      { loading ?
        <p>loading...</p>
        :
        <ImageList data={images} title={title}/>
      }
    </div>
  );
}

Galery.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Galery;
