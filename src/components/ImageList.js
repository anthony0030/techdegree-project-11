import React from 'react';
import Image from './Image';
import NotFound from './NotFound';

const ImageList = props => { 
  const results = props.data;
  let images;
  if (results.length > 0){
    images = results.map(image => 
      <Image url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id}/>
    );
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
