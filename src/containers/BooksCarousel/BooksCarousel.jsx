import React from 'react';
import classNames from 'classnames';

import Button from '@/components/Button';
import Carousels from '@/components/Carousels';
import BookBlock from '@/components/BookBlock';

import './BooksCarousel.scss';

const BooksCarousel = ({ title, data, darkBackground }) => {
  return (
    <div className={classNames('BooksCarousel', { 'dark-background': darkBackground })}>
      <div className="container">
        <div className="BooksCarousel-wrapper">
          <div className="BooksCarousel-header flex items-center justify-between">
            <div className="BooksCarousel-header-col">
              <div className="BooksCarousel-title">{title}</div>
            </div>
            <div className="BooksCarousel-header-col flex items-center">
              <Button title="Xem Thêm" className="BooksCarousel-see-more primary-transparent" radius />
              <div className="BooksCarousel-header-arrow"></div>
            </div>
          </div>

          <div className="BooksCarousel-list">
            <Carousels arrows dots={false} slidesToShow={4}>
              {data?.map((item) => (
                <div className="BooksCarousel-list-item">
                  <BookBlock {...item} />
                </div>
              ))}
            </Carousels>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCarousel;
