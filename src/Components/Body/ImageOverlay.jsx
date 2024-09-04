import React from 'react';

function ImageOverlay({ src, alt, className }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-cover absolute inset-0 size-full ${className}`}
    />
  );
}

export default ImageOverlay;