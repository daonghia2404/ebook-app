import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15.4915" transform="rotate(0.0305741 16 16)" stroke={color} />
      <path
        d="M15.5347 11.8794L10.9657 16.3453L15.5347 21.0174"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.7275 16.4485H21.627" stroke={color} strokeLinecap="round" />
    </svg>
  );
};

export default Svg;
