import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_333_7868)">
        <path
          d="M9.12832 5.57168L3.73198 0.17713C3.49519 -0.0590611 3.11156 -0.0590611 2.87417 0.17713C2.63738 0.41332 2.63738 0.796954 2.87417 1.03314L7.84248 5.99966L2.87477 10.9662C2.63798 11.2024 2.63798 11.586 2.87477 11.8228C3.11156 12.059 3.49579 12.059 3.73258 11.8228L9.12892 6.42829C9.36207 6.19455 9.36207 5.80488 9.12832 5.57168Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_333_7868">
          <rect width="12" height="12" fill="white" transform="translate(12 12) rotate(-180)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Svg;
