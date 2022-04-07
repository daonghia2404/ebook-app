import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.5705 0H1.99062C1.13134 0 0.432617 0.69763 0.432617 1.55557V12.4445C0.432617 13.3024 1.13134 14 1.99062 14H17.5706C18.4298 14 19.1285 13.3024 19.1285 12.4444V1.55557C19.1285 0.69763 18.4298 0 17.5705 0ZM1.99062 0.777766H17.5706C17.628 0.777766 17.6786 0.798656 17.7324 0.810469C16.3836 2.04302 11.911 6.12824 10.3458 7.53623C10.2234 7.64637 10.026 7.77777 9.78062 7.77777C9.53527 7.77777 9.33787 7.64637 9.21499 7.53586C7.64998 6.1281 3.17716 2.04265 1.82853 0.810542C1.8825 0.798729 1.93318 0.777766 1.99062 0.777766ZM1.2116 12.4444V1.55557C1.2116 1.47937 1.23461 1.41024 1.2552 1.34061C2.28757 2.28401 5.40833 5.13446 7.43187 6.97171C5.4149 8.70155 2.29334 11.6564 1.25275 12.6471C1.23439 12.581 1.2116 12.5163 1.2116 12.4444ZM17.5705 13.2222H1.99062C1.9284 13.2222 1.87308 13.2006 1.81498 13.1867C2.89026 12.1633 6.03168 9.1914 8.01319 7.4989C8.27151 7.73285 8.50747 7.94617 8.69348 8.11351C9.01452 8.40292 9.3903 8.55557 9.78058 8.55557C10.1709 8.55557 10.5466 8.40288 10.8673 8.11387C11.0534 7.94646 11.2895 7.73296 11.548 7.4989C13.5296 9.19122 16.6706 12.1629 17.7462 13.1867C17.6881 13.2006 17.6328 13.2222 17.5705 13.2222ZM18.3496 12.4444C18.3496 12.5163 18.3268 12.581 18.3084 12.6471C17.2675 11.6559 14.1463 8.70136 12.1293 6.97175C14.1529 5.1345 17.2732 2.2843 18.306 1.34054C18.3266 1.41017 18.3496 1.47933 18.3496 1.55553V12.4444Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
