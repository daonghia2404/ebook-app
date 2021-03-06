import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.61541 17.5126C2.06564 18.4015 0.809189 17.6733 0.809189 15.8873V2.70725C0.809189 0.919453 2.06564 0.192141 3.61541 1.08027L15.1354 7.68691C16.6857 8.5762 16.6857 10.017 15.1354 10.906L3.61541 17.5126Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
