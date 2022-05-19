import React, { useEffect } from 'react';

import { scrollToTop } from '@/utils/functions';
import ImageAbout from '@/assets/images/image-new-detail.png';

import './About.scss';

const About = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="About">
      <div className="container">
        <div className="About-wrapper">
          <div className="About-title">Giới thiệu</div>

          <div className="About-image">
            <img src={ImageAbout} alt="" />
          </div>

          <div className="About-main">
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

export default About;
