import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.037 6.4002V3.2002H21.4345V6.4002H18.2295V8.0002H21.4345V11.2002H23.037V8.0002H26.242V6.4002H23.037Z"
        fill={color}
      />
      <path
        d="M8.61459 6.4V9.6H13.1481C12.4862 11.4624 10.7043 12.8 8.61459 12.8C5.96404 12.8 3.80707 10.6464 3.80707 8C3.80707 5.3536 5.96404 3.2 8.61459 3.2C9.76359 3.2 10.8693 3.6112 11.7283 4.3584L13.834 1.9456C12.3917 0.6912 10.5392 0 8.61459 0C4.19648 0 0.602051 3.5888 0.602051 8C0.602051 12.4112 4.19648 16 8.61459 16C13.0327 16 16.6271 12.4112 16.6271 8V6.4H8.61459Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
