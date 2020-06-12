import React from 'react';

export default function Iframe(props) {
  const { title, height, src, width } = props;

  return (
    <iframe
      title={title}
      src={src}
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
      loading="lazy"
    ></iframe>
  );
}
