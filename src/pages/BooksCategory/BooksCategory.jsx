import React, { useEffect, useState } from 'react';

import BooksList from '@/containers/BooksList';
import { dataBookCarousel } from '@/common/data';
import FilterBooksModal from '@/containers/FilterBooksModal';
import { scrollToTop } from '@/utils/functions';

import './BooksCategory.scss';

const BooksCategory = () => {
  const [filterBooksModalState, setFilterBooksModalState] = useState({
    visible: false,
  });

  const handleOpenFilterModal = () => {
    setFilterBooksModalState({ visible: true });
  };
  const handleCloseFilterModal = () => {
    setFilterBooksModalState({ visible: false });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="BooksCategory">
      <BooksList title="Sách nói" layout={5} onClickFilter={handleOpenFilterModal} data={dataBookCarousel} />

      <FilterBooksModal {...filterBooksModalState} onClose={handleCloseFilterModal} />
    </div>
  );
};

export default BooksCategory;
