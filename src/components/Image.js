import React from 'react';

const Image = props => (
  <li>
    <a href={props.url} data-lightbox="search" data-title={props.title}>
      <img src={props.url} title={props.title} alt="" />
    </a>
  </li>
);

export default Image;