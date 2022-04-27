import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import BooksList from '@/containers/BooksList';
import { EProductAction } from '@/redux/actions/products/constants';
import Loading from '@/containers/Loading/Loading';
import Empty from '@/components/Empty/Empty';
import { navigate, useLocation } from '@reach/router';
import { Paths } from '@/pages/routers';

import './SearchResult.scss';

const SearchResult = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const keyword = query.get('keyword');

  const productsSearch = useSelector((state) => state.productState?.books?.records) ?? [];
  const productsSearchTotal = useSelector((state) => state.productState?.books?.total) ?? 0;
  const getListProductSearchLoading = useSelector((state) => state.loading[EProductAction.GET_LIST_PRODUCT_SEARCH]);

  const isEmpty = productsSearch.length === 0;

  useEffect(() => {
    if (!keyword) navigate(Paths.Home);
  }, [keyword]);

  return (
    <div className="SearchResult">
      <div className="container">
        <div className="SearchResult-wrapper">
          <div className="SearchResult-text">Tìm thấy {productsSearchTotal} kết quả</div>
        </div>
      </div>

      {getListProductSearchLoading ? <Loading /> : <>{isEmpty ? <Empty /> : <BooksList data={productsSearch} />}</>}
    </div>
  );
};

export default SearchResult;
