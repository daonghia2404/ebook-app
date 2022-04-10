import React from 'react';

import { dataBookCarousel } from '@/common/data';
import BooksList from '@/containers/BooksList';

import './MyBooks.scss';

const MyBooks = () => {
  return (
    <div className="MyBooks">
      <BooksList owner title="Sách của tôi" data={dataBookCarousel} />
    </div>
  );
};

export default MyBooks;
