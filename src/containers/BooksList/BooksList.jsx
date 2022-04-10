import React from 'react';

import BookBlock from '@/components/BookBlock';
import Button from '@/components/Button';
import Icon, { EIconName } from '@/components/Icon';

import './BooksList.scss';

const BooksList = ({ owner, title, data, layout = 4, onClickFilter }) => {
  return (
    <div className="BooksList">
      <div className="container">
        <div className="BooksList-wrapper">
          {title && (
            <div className="BooksList-header flex items-center justify-between">
              <div className="BooksList-header-col">
                <div className="BooksList-title">{title}</div>
              </div>
              {!owner && (
                <div className="BooksList-header-col flex items-center">
                  {onClickFilter ? (
                    <Icon name={EIconName.Filter} onClick={onClickFilter} />
                  ) : (
                    <Button title="Xem Thêm" className="BooksList-see-more primary-transparent" radius />
                  )}
                </div>
              )}
            </div>
          )}

          <div className="BooksList-list flex flex-wrap">
            {data?.map((item, index) => (
              <div
                key={index}
                className="BooksList-list-item"
                style={{ flex: `0 0 ${100 / layout}%`, maxWidth: `${100 / layout}%` }}
              >
                <BookBlock {...item} owner={owner} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksList;
