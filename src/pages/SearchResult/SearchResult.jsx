import React from 'react';

import BooksList from '@/containers/BooksList';
import { dataBookCarousel } from '@/common/data';

import './SearchResult.scss';

const SearchResult = () => {
  return (
    <div className="SearchResult">
      <div className="container">
        <div className="SearchResult-wrapper">
          <div className="SearchResult-text">Tìm thấy 1344 kết quả cho "Sách kỹ năng"</div>
        </div>
      </div>

      <BooksList data={dataBookCarousel} />
    </div>
  );
};

export default SearchResult;
