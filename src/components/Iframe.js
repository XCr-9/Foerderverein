import React from 'react';

export default function Iframe(props) {
  const { title, height, src, width } = props;

  return (
    <iframe
      title={title}
      src={src}
      width={width}
      height={height}
      frameborder="0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  );
}
