import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.5 10.4998C3.5 9.21117 4.54467 8.1665 5.83333 8.1665H22.1667C23.4554 8.1665 24.5 9.21117 24.5 10.4998V23.3332C24.5 24.6219 23.4554 25.6665 22.1667 25.6665H5.83333C4.54467 25.6665 3.5 24.6219 3.5 23.3332V10.4998Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.3335 11.6666V6.99992C9.3335 4.42259 11.4228 2.33325 14.0002 2.33325C16.5774 2.33325 18.6668 4.42259 18.6668 6.99992V11.3035"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Svg;
