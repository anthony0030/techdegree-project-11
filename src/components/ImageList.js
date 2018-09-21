import React from 'react';
import Image from './Image';
import NotFound from './NotFound';

const ImageList = props => { 
  
  const results = props.data;
  let images;
  if (results.length > 0){
    images = results.map(image =><Image url={image} key={image}/>);
  }
  else{
    images = <NotFound/>
  }

  return(
    <ul>
      {images}
    </ul> 
  );
}

export default ImageList;