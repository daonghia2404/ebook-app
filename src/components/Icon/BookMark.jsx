import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.375 10.5H12.25V0H7.875V5.25L6.125 3.5L4.375 5.25V0H3.5C2.5375 0 1.75 0.7875 1.75 1.75V12.25C1.75 13.2125 2.5375 14 3.5 14H12.25V12.25H4.375C3.85 12.25 3.5 11.9 3.5 11.375C3.5 10.85 3.85 10.5 4.375 10.5Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
