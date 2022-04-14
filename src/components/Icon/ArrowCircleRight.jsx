import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      style={{ enableBackground: 'new 0 0 32 32' }}
      xmlSpace="preserve"
    >
      <circle
        className="st0"
        cx="16"
        cy="16"
        r="15.5"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeMiterlimit="4"
      />
      <path
        className="st1"
        d="M17.1,21l4.6-4.5l-4.6-4.7"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path className="st2" d="M20.9,16.4H11" fill="none" stroke={color} strokeLinecap="round" />
    </svg>
  );
};

export default Svg;
