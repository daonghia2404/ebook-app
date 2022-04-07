import React from 'react';

import ImageBanner from '@/assets/images/image-banner.png';
import Carousels from '@/components/Carousels';

import './HomeBanner.scss';

const HomeBanner = () => {
  return (
    <div className="HomeBanner">
      <div className="container">
        <div className="HomeBanner-wrapper">
          <Carousels dots={false} arrows={false} autoplay>
            {[1, 2, 3].map((item) => (
              <div key={item} className="HomeBanner-item">
                <img src={ImageBanner} alt="" />
              </div>
            ))}
          </Carousels>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
