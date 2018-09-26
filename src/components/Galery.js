import React from 'react';
import PropTypes from 'prop-types';
import ImageList from './ImageList'

function Galery(props) { 
  return(
    <div className="photo-container">
      { (props.loading) ? <p>loading...</p> : <ImageList data={props.images} title={props.title}/> }
    </div>
  )
}

Galery.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Galery;
