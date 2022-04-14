import React from 'react';

import BooksList from '@/containers/BooksList';
import { dataBookCarousel } from '@/common/data';

import './SearchResult.scss';
import { useSelector } from 'react-redux';

const SearchResult = () => {
  const books = useSelector((state) => state.productState.books) ?? [];
  return (
    <div className="SearchResult">
      <div className="container">
        <div className="SearchResult-wrapper">
          <div className="SearchResult-text">Tìm thấy {books.length} kết quả</div>
        </div>
      </div>

      <BooksList data={books} />
    </div>
  );
};

export default SearchResult;
