import React from "react";
import PropTypes from "prop-types";
import ImageList from "./ImageList";
import Pages from "./Pages";

//returns a loading screen or a image list depending on the load prop
function Galery(props) {
   const {images, title, amount, curentPage, numberOfPages, loading, HandleImageClick, BuildFlikerUrl, setPage} = props;
  return(
    <div className="photo-container">
      { loading ?
        <p>loading...</p>
        :
        <React.Fragment>
        <ImageList results={images} title={title} amount={amount} HandleImageClick={HandleImageClick} BuildFlikerUrl={BuildFlikerUrl}/>
        <Pages numberOfPages={numberOfPages} curentPage={curentPage} setPage={setPage}/>
        </React.Fragment>
      }
    </div>
  );
}

Galery.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  curentPage: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  BuildFlikerUrl: PropTypes.func.isRequired,
  HandleImageClick: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired
};

export default Galery;
