import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';

import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './Carousels.scss';

export const Carousels = ({
  dots = true,
  arrows = true,
  infinite = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  slidesPerRow = 1,
  responsive = [],
  autoplay,
  children,
}) => {
  const renderPrevArrow = () => {
    return (
      <Button
        className="Carousels-arrow prev"
        icon={<Icon name={EIconName.ArrowCircleLeft} color={EIconColor.FUN_GREEN} />}
      />
    );
  };

  const renderNextArrow = () => {
    return (
      <Button
        className="Carousels-arrow next"
        icon={<Icon name={EIconName.ArrowCircleRight} color={EIconColor.FUN_GREEN} />}
      />
    );
  };
  const settings = {
    speed: 500,
    dots,
    arrows,
    infinite,
    autoplay,
    slidesPerRow,
    autoplaySpeed: 5000,
    slidesToShow,
    slidesToScroll,
    nextArrow: renderNextArrow(),
    prevArrow: renderPrevArrow(),
    responsive,
  };
  return (
    <div className={classNames('Carousels')}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousels;
