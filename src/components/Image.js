import React from 'react';

const Image = props => (
  <li>
    <img src={props.url} title={props.title} alt="" />
  </li>
);

export default Image;