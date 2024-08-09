import React from 'react';

function CenteredImage({ src, alt, overlay = false, className }) {
  const baseClassName = overlay
    ? 'object-cover absolute inset-0 size-full'
    : 'object-contain self-stretch my-auto aspect-square w-[126px]';

  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`${baseClassName} ${className}`}
    />
  );
}

export default CenteredImage;