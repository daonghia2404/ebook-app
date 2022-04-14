import React from 'react';
import { useSelector } from 'react-redux';

import BooksList from '@/containers/BooksList';
import { EProductAction } from '@/redux/actions/products/constants';
import Loading from '@/containers/Loading/Loading';

import './SearchResult.scss';

const SearchResult = () => {
  const productsSearch = useSelector((state) => state.productState?.books?.records) ?? [];
  const productsSearchTotal = useSelector((state) => state.productState?.books?.total) ?? 0;
  const getListProductSearchLoading = useSelector((state) => state.loading[EProductAction.GET_LIST_PRODUCT_SEARCH]);

  return (
    <div className="SearchResult">
      <div className="container">
        <div className="SearchResult-wrapper">
          <div className="SearchResult-text">Tìm thấy {productsSearchTotal} kết quả</div>
        </div>
      </div>

      {getListProductSearchLoading ? <Loading /> : <BooksList data={productsSearch} />}
    </div>
  );
};

export default SearchResult;
