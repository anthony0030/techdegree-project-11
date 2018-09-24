import React from 'react';
import ImageList from './ImageList'

const Galery = props => { 
  return(
    <div className="photo-container">
      { (props.loading) ? <p>loading...</p> : <ImageList data={props.images} title={props.title}/> }
    </div>
  )
}

export default Galery;
