import React from 'react';

import BooksList from '@/containers/BooksList';
import { dataBookCarousel } from '@/common/data';

import './BookDetail.scss';

const BookDetail = () => {
  return (
    <div className="BookDetail">
      <BooksList title="Sách tương tự" layout={5} data={dataBookCarousel.slice(0, 5)} />
    </div>
  );
};

export default BookDetail;
