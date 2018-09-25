import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import NotFound from './NotFound';

const ImageList = props => { 
  const results = props.data;
  const title = props.title;
  let gotResults = false;
  let images;
  if (results.length > 0){
    images = results.map(image => 
      <Image url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} title={image.title} key={image.id}/>
    );
    gotResults = true;
  }

  if(gotResults){
      return(
        <div>
          <h2>{title}</h2>
          <ul>
            {images}
          </ul>
        </div>
      )
  }else{
    return(
      <ul>
        <NotFound/>
      </ul>
    )
  }

}

ImageList.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageList;
