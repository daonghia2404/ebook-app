import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.73455 7.20482C6.33863 7.63342 5.66137 7.63342 5.26545 7.20482L0.622375 2.17855C0.0307251 1.53807 0.484997 0.499999 1.35693 0.499999L10.6431 0.5C11.515 0.5 11.9693 1.53807 11.3776 2.17855L6.73455 7.20482Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
