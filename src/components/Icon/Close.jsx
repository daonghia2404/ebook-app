import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16.7998" cy="15.2012" r="12" fill="white" />
      <path
        d="M16 0C7.152 0 0 7.152 0 16C0 24.848 7.152 32 16 32C24.848 32 32 24.848 32 16C32 7.152 24.848 0 16 0ZM24 21.744L21.744 24L16 18.256L10.256 24L8 21.744L13.744 16L8 10.256L10.256 8L16 13.744L21.744 8L24 10.256L18.256 16L24 21.744Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
