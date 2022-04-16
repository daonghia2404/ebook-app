import React from 'react';
import { useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import BookBlock from '@/components/BookBlock';
import Button from '@/components/Button';
import Icon, { EIconName } from '@/components/Icon';
import Loading from '@/containers/Loading/Loading';
import Empty from '@/components/Empty/Empty';

import './BooksList.scss';

const BooksList = ({ owner, title, data = [], link, layout = 4, loading, onClickFilter }) => {
  const windowType = useSelector((state) => state.uiState.device);

  const isEmpty = data.length === 0;

  const renderLayoutColumns = () => {
    switch (true) {
      case windowType.width <= 768:
        return 2;
      case windowType.width <= 991:
        return 3;
      case windowType.width <= 1200:
        return 4;

      default:
        return layout;
    }
  };

  const handleClickSeeMore = () => {
    if (link) navigate(link);
  };

  return (
    <div className="BooksList">
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <div className="BooksList-wrapper">
            {title && (
              <div className="BooksList-header flex items-center justify-between">
                <div className="BooksList-header-col">
                  <div className="BooksList-title">{title}</div>
                </div>
                {!owner && (
                  <div className="BooksList-header-col flex items-center">
                    {onClickFilter ? (
                      <Icon className="filter" name={EIconName.Filter} onClick={onClickFilter} />
                    ) : (
                      <>
                        {link && (
                          <Button
                            title="Xem Thêm"
                            className="BooksList-see-more primary-transparent"
                            radius
                            onClick={handleClickSeeMore}
                          />
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            {isEmpty ? (
              <Empty />
            ) : (
              <div className="BooksList-list flex flex-wrap">
                {data?.map((item, index) => (
                  <div
                    key={index}
                    className="BooksList-list-item"
                    style={{ flex: `0 0 ${100 / renderLayoutColumns()}%`, maxWidth: `${100 / renderLayoutColumns()}%` }}
                  >
                    <BookBlock {...item} owner={owner} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksList;
