import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.5435 9.27174C17.5435 13.8401 13.8401 17.5435 9.27174 17.5435C4.70338 17.5435 1 13.8401 1 9.27174C1 4.70338 4.70338 1 9.27174 1C13.8401 1 17.5435 4.70338 17.5435 9.27174Z"
        fill="none"
        stroke="white"
        stroke-width="2"
      />
      <path d="M13.4863 17.0579L16.8579 22.1152" stroke={color} stroke-width="2" stroke-linecap="round" />
    </svg>
  );
};

export default Svg;
