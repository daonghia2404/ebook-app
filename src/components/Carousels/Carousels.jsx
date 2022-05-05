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
  onDragging,
  children,
}) => {
  function RenderPrevArrow({ className, onClick }) {
    return (
      <Button
        className={classNames('Carousels-arrow prev', className)}
        icon={<Icon name={EIconName.ArrowCircleLeft} color={EIconColor.FUN_GREEN} />}
        onClick={onClick}
      />
    );
  }

  function RenderNextArrow({ className, onClick }) {
    return (
      <Button
        className={classNames('Carousels-arrow next', className)}
        icon={<Icon name={EIconName.ArrowCircleRight} color={EIconColor.FUN_GREEN} />}
        onClick={onClick}
      />
    );
  }
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
    nextArrow: <RenderNextArrow />,
    prevArrow: <RenderPrevArrow />,
    responsive,
    beforeChange: () => onDragging?.(true),
    afterChange: () => onDragging?.(false),
  };
  return (
    <div className={classNames('Carousels')}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousels;
