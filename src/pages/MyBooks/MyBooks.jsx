import React, { useEffect } from 'react';
import BooksList from '@/containers/BooksList';

import './MyBooks.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getListMyBookAction } from '@/redux/actions';
import { ETypePage } from '@/utils/constants';

const MyBooks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getListMyBook();
  }, []);
  const data = useSelector((state) => state.profileState.myBookList) ?? {};
  const params = {
    page: ETypePage.DEFAULT_PAGE,
    pageSize: ETypePage.DEFAULT_PAGE_SIZE,
  };
  const getListMyBook = () => {
    dispatch(getListMyBookAction.request(params));
  };
  return (
    <div className="MyBooks">
      {data.length > 0 ? <BooksList owner title="Sách của tôi" data={data} /> : 'Không có sản phẩm nào'}
    </div>
  );
};

export default MyBooks;
