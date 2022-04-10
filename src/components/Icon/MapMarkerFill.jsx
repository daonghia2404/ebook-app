import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.07506 23.5158C1.26422 13.6421 0 12.6287 0 9C0 4.02942 4.02942 0 9 0C13.9706 0 18 4.02942 18 9C18 12.6287 16.7358 13.6421 9.92494 23.5158C9.47798 24.1614 8.52197 24.1614 8.07506 23.5158ZM9 12.75C11.0711 12.75 12.75 11.0711 12.75 9C12.75 6.92892 11.0711 5.25 9 5.25C6.92892 5.25 5.25 6.92892 5.25 9C5.25 11.0711 6.92892 12.75 9 12.75Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
