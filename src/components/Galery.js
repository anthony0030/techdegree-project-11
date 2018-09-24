import React from 'react';
import ImageList from './ImageList'

const Galery = props => { 
  return(
    <div className="photo-container">
      <h2>{props.title}</h2>
      { (props.loading) ? <p>loading...</p> : <ImageList data={props.images}/> }
    </div>
  )
}

export default Galery;
