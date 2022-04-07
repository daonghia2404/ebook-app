import React from 'react';

import BookBlock from '@/components/BookBlock';
import Button from '@/components/Button';

import './BooksList.scss';

const BooksList = ({ title, data, layout = 4 }) => {
  return (
    <div className="BooksList">
      <div className="container">
        <div className="BooksList-wrapper">
          {title && (
            <div className="BooksList-header flex items-center justify-between">
              <div className="BooksList-header-col">
                <div className="BooksList-title">{title}</div>
              </div>
              <div className="BooksList-header-col flex items-center">
                <Button title="Xem Thêm" className="BooksList-see-more primary-transparent" radius />
              </div>
            </div>
          )}

          <div className="BooksList-list flex flex-wrap">
            {data?.map((item, index) => (
              <div
                key={index}
                className="BooksList-list-item"
                style={{ flex: `0 0 ${100 / layout}%`, maxWidth: `${100 / layout}%` }}
              >
                <BookBlock {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksList;
