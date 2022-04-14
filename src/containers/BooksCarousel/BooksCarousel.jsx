import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import Button from '@/components/Button';
import Carousels from '@/components/Carousels';
import BookBlock from '@/components/BookBlock';

import './BooksCarousel.scss';
import { Skeleton } from 'antd';
import { Paths } from '@/pages/routers';
import { navigate } from '@reach/router';

const BooksCarousel = ({ title, data, darkBackground, loading }) => {
  const windowType = useSelector((state) => state.uiState.device);

  const renderSlidesToShow = () => {
    switch (true) {
      case windowType.width <= 575:
        return 2;
      case windowType.width <= 991:
        return 3;

      default:
        return 4;
    }
  };

  return (
    <div className={classNames('BooksCarousel', { 'dark-background': darkBackground })}>
      <div className="container">
        <div className="BooksCarousel-wrapper">
          <div className="BooksCarousel-header flex items-center justify-between">
            <div className="BooksCarousel-header-col">
              <div className="BooksCarousel-title">{title}</div>
            </div>
            <div className="BooksCarousel-header-col flex items-center">
              <Button
                title="Xem Thêm"
                className="BooksCarousel-see-more primary-transparent"
                radius
                onClick={() => navigate(Paths.BooksCategory)}
              />
              <div className="BooksCarousel-header-arrow"></div>
            </div>
          </div>

          <div className="BooksCarousel-list">
            <Carousels arrows dots={false} slidesToShow={renderSlidesToShow()}>
              {data?.map((item) => (
                <Skeleton avatar loading={loading}>
                  <div className="BooksCarousel-list-item">
                    <BookBlock key={item._id} {...item} />
                  </div>
                </Skeleton>
              ))}
            </Carousels>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCarousel;
