import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import Button from '@/components/Button';
import Carousels from '@/components/Carousels';
import BookBlock from '@/components/BookBlock';
import { navigate } from '@reach/router';
import Loading from '@/containers/Loading/Loading';

import './BooksCarousel.scss';
import Empty from '@/components/Empty/Empty';

const BooksCarousel = ({ title, data = [], darkBackground, link, loading }) => {
  const windowType = useSelector((state) => state.uiState.device);

  const isEmpty = data.length === 0;

  const renderSlidesToShow = () => {
    switch (true) {
      case windowType.width <= 575:
        return 2;
      case windowType.width <= 768:
        return 3;
      case windowType.width <= 991:
        return 4;
      case windowType.width <= 1200:
        return 4;
      default:
        return 5;
    }
  };

  const isShowArrow = () => {
    switch (true) {
      case windowType.width <= 575:
        return data.length > 2;
      case windowType.width <= 991:
        return data.length > 3;
      default:
        return data.length > 4;
    }
  };

  const handleClickSeeMore = () => {
    if (link) navigate(link);
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
                className={classNames('BooksCarousel-see-more primary-transparent', { 'show-arrow': isShowArrow() })}
                radius
                onClick={handleClickSeeMore}
              />
              <div className="BooksCarousel-header-arrow"></div>
            </div>
          </div>

          {loading ? (
            <Loading />
          ) : (
            <>
              {isEmpty ? (
                <Empty />
              ) : (
                <div className="BooksCarousel-list">
                  <Carousels infinite={false} arrows dots={false} slidesToShow={renderSlidesToShow()}>
                    {data?.map((item, index) => (
                      <div key={index} className="BooksCarousel-list-item">
                        <BookBlock key={item._id} {...item} />
                      </div>
                    ))}
                  </Carousels>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksCarousel;
