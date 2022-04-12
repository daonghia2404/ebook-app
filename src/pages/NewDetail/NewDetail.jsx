import React, { useEffect } from 'react';

import ImageNewDetail from '@/assets/images/image-new-detail.png';
import { scrollToTop } from '@/utils/functions';

import './NewDetail.scss';

const NewDetail = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="NewDetail">
      <div className="container">
        <div className="NewDetail-wrapper">
          <div className="NewDetail-image">
            <img src={ImageNewDetail} alt="" />
          </div>
          <div className="NewDetail-title">Lorem ipsum dolor sit amet </div>
          <div className="NewDetail-time">15:30 06/09/2021</div>

          <div className="NewDetail-main">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend ante at vestibulum aliquam. Maecenas
              porta nec sem nec congue. Aenean dapibus non velit non faucibus. Donec eleifend felis a mi aliquet, at
              volutpat quam feugiat. Suspendisse ut pharetra justo, et pellentesque sapien. Curabitur dictum tincidunt
              ante, interdum vestibulum enim egestas sit amet. Praesent in porta felis, non ultricies dui.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              ac enim nunc. Nulla luctus blandit erat, vel pharetra elit tempor vel. Etiam eget elit a justo maximus
              bibendum ac eget justo. Suspendisse mollis blandit nunc, at tempor quam commodo quis. Duis non dignissim
              mi. Nullam sodales viverra elit, sed vulputate purus.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              ac enim nunc. Nulla luctus blandit erat, vel pharetra elit tempor vel. Etiam eget elit a justo maximus
              bibendum ac eget justo. Suspendisse mollis blandit nunc, at tempor quam commodo quis.{' '}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend ante at vestibulum aliquam. Maecenas
              porta nec sem nec congue. Aenean dapibus non velit non faucibus. Donec eleifend felis a mi aliquet, at
              volutpat quam feugiat. Suspendisse ut pharetra justo, et pellentesque sapien. Curabitur dictum tincidunt
              ante, interdum vestibulum enim egestas sit amet. Praesent in porta felis, non ultricies dui.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              ac enim nunc. Nulla luctus blandit erat, vel pharetra elit tempor vel. Etiam eget elit a justo maximus
              bibendum ac eget justo. Suspendisse mollis blandit nunc, at tempor quam commodo quis. Duis non dignissim
              mi. Nullam sodales viverra elit, sed vulputate purus.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              ac enim nunc. Nulla luctus blandit erat, vel pharetra elit tempor vel. Etiam eget elit a justo maximus
              bibendum ac eget justo. Suspendisse mollis blandit nunc, at tempor quam commodo quis.{' '}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend ante at vestibulum aliquam. Maecenas
              porta nec sem nec congue. Aenean dapibus non velit non faucibus. Donec eleifend felis a mi aliquet, at
              volutpat quam feugiat. Suspendisse ut pharetra justo, et pellentesque sapien. Curabitur dictum tincidunt
              ante, interdum vestibulum enim egestas sit amet. Praesent in porta felis, non ultricies dui.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              ac enim nunc. Nulla luctus blandit erat, vel pharetra elit tempor vel. Etiam eget elit a justo maximus
              bibendum ac eget justo. Suspendisse mollis blandit nunc, at tempor quam commodo quis. Duis non dignissim
              mi. Nullam sodales viverra elit, sed vulputate purus.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              ac enim nunc. Nulla luctus blandit erat, vel pharetra elit tempor vel. Etiam eget elit a justo maximus
              bibendum ac eget justo. Suspendisse mollis blandit nunc, at tempor quam commodo quis.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDetail;
