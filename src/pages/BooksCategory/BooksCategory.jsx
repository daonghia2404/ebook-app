import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import BooksList from '@/containers/BooksList';
import FilterBooksModal from '@/containers/FilterBooksModal';
import { scrollToTop } from '@/utils/functions';
import { getListProductSearchAction } from '@/redux/actions';
import { EProductAction } from '@/redux/actions/products/constants';
import { ETypeBook } from '@/common/static';
import { ETypePage } from '@/utils/constants';
import Loading from '@/containers/Loading/Loading';
import Empty from '@/components/Empty/Empty';

import './BooksCategory.scss';

const BooksCategory = () => {
  const dispatch = useDispatch();
  const [filterBooksModalState, setFilterBooksModalState] = useState({
    visible: false,
  });
  const [getBooksParamsRequest, setGetBooksParamsRequest] = useState({
    type: ETypeBook.PAPER_BOOK,
    page: ETypePage.DEFAULT_PAGE,
    pageSize: ETypePage.DEFAULT_PAGE_SIZE,
  });
  const getBooksLoading = useSelector((state) => state.loading[EProductAction.GET_LIST_PRODUCT_SEARCH]);
  const booksData = useSelector((state) => state.productState.books);

  const isEmpty = booksData.records?.length === 0;

  const getListProduct = useCallback(() => {
    dispatch(getListProductSearchAction.request(getBooksParamsRequest));
  }, [dispatch, getBooksParamsRequest]);

  const handleOpenFilterModal = () => {
    setFilterBooksModalState({ visible: true });
  };
  const handleCloseFilterModal = () => {
    setFilterBooksModalState({ visible: false });
  };

  const handleFilterBooks = (values) => {
    handleCloseFilterModal();
    setGetBooksParamsRequest({
      ...getBooksParamsRequest,
      ...values,
      publishingYear: values?.publishingYear ? moment(values.publishingYear).format('YYYY') : undefined,
      author: values?.author?.value,
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    getListProduct();
  }, [getListProduct]);

  return (
    <div className="BooksCategory">
      {getBooksLoading ? (
        <Loading />
      ) : (
        <>
          {isEmpty ? (
            <Empty />
          ) : (
            <BooksList title="Sách giấy" layout={5} onClickFilter={handleOpenFilterModal} data={booksData.records} />
          )}
        </>
      )}

      <FilterBooksModal {...filterBooksModalState} onClose={handleCloseFilterModal} onSubmit={handleFilterBooks} />
    </div>
  );
};

export default BooksCategory;
