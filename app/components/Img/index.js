import React, { PropTypes } from 'react';


const Img = ({ className, src, alt }) => (
  <img
    className={className}
    src={src}
    alt={alt}
  />
);

Img.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};


export default Img;
