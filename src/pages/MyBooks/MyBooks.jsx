import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BooksList from '@/containers/BooksList';
import { getListMyBookAction } from '@/redux/actions';
import { ETypePage } from '@/utils/constants';
import { EProfileAction } from '@/redux/actions/profile/constants';
import Loading from '@/containers/Loading/Loading';

import './MyBooks.scss';

const MyBooks = () => {
  const dispatch = useDispatch();

  const [getMyBooksParamsRequest, setGetMyBooksParamsRequest] = useState({
    page: ETypePage.DEFAULT_PAGE,
    pageSize: ETypePage.DEFAULT_PAGE_SIZE,
  });

  const getMyBooksLoading = useSelector((state) => state.loading[EProfileAction.MY_BOOK]);

  const myBooksData = useSelector((state) => state.profileState.myBookList?.records) ?? [];
  const isEmpty = myBooksData.length === 0;

  const getListMyBook = useCallback(() => {
    dispatch(getListMyBookAction.request(getMyBooksParamsRequest));
  }, [dispatch, getMyBooksParamsRequest]);

  useEffect(() => {
    getListMyBook();
  }, [getListMyBook]);

  return (
    <div className="MyBooks">
      {getMyBooksLoading ? <Loading /> : <BooksList owner title="Sách của tôi" data={myBooksData} />}
    </div>
  );
};

export default MyBooks;
