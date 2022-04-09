import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.37927 5.82758V20C1.37927 20.5523 1.82699 21 2.37927 21H14.1724C14.7247 21 15.1724 20.5523 15.1724 20V5.82758"
        stroke={color}
      />
      <rect x="0.5" y="3.56897" width="15.5517" height="2.44828" rx="1.22414" stroke={color} />
      <path
        d="M4.82764 3.41379V2C4.82764 1.44772 5.27535 1 5.82764 1H11.069C11.6213 1 12.069 1.44772 12.069 2V3.41379"
        stroke={color}
      />
      <path d="M5.51721 8.24139V17.8966" stroke={color} strokeLinecap="round" />
      <path d="M8.62061 8.24139V17.8966" stroke={color} strokeLinecap="round" />
      <path d="M11.3794 8.24139V17.8966" stroke={color} strokeLinecap="round" />
    </svg>
  );
};

export default Svg;
