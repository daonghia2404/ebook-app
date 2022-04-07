import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.44516 0C4.02695 0 0.432617 3.58871 0.432617 8C0.432617 9.45223 1.08493 11.0141 1.11227 11.08C1.32295 11.5793 1.73866 12.3548 2.03842 12.8094L7.5322 21.1205C7.75702 21.4612 8.08978 21.6565 8.44516 21.6565C8.80054 21.6565 9.13329 21.4612 9.35811 21.1209L14.8524 12.8094C15.1526 12.3548 15.5678 11.5793 15.7785 11.08C15.8059 11.0146 16.4577 9.45271 16.4577 8C16.4577 3.58871 12.8634 0 8.44516 0ZM14.9094 10.7148C14.7213 11.1624 14.3344 11.8838 14.0652 12.2913L8.571 20.6028C8.46259 20.7671 8.42819 20.7671 8.31978 20.6028L2.82554 12.2913C2.55641 11.8838 2.16945 11.1619 1.98139 10.7144C1.97338 10.6951 1.37527 9.25741 1.37527 8C1.37527 4.10776 4.54682 0.941176 8.44516 0.941176C12.3435 0.941176 15.515 4.10776 15.515 8C15.515 9.25929 14.9155 10.7007 14.9094 10.7148Z"
        fill={color}
      />
      <path
        d="M8.44506 3.76514C6.10587 3.76514 4.20312 5.66537 4.20312 8.00043C4.20312 10.3355 6.10587 12.2357 8.44506 12.2357C10.7842 12.2357 12.687 10.3355 12.687 8.00043C12.687 5.66537 10.7842 3.76514 8.44506 3.76514ZM8.44506 11.2945C6.62621 11.2945 5.14578 9.8169 5.14578 8.00043C5.14578 6.18396 6.62621 4.70631 8.44506 4.70631C10.2639 4.70631 11.7443 6.18396 11.7443 8.00043C11.7443 9.8169 10.2639 11.2945 8.44506 11.2945Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
