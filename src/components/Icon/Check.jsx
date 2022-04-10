import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-check"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke={color}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
};

export default Svg;
