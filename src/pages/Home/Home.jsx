import React, { useEffect } from 'react';

import HomeBanner from '@/containers/HomeBanner/HomeBanner';
import BooksCarousel from '@/containers/BooksCarousel';
import { dataBookCarousel, dataNewsList } from '@/common/data';
import NewsTab from '@/containers/NewsTab';
import { EProductAction } from '@/redux/actions/products/constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  getListProductPaperBookAction,
  getListProductAudioBookAction,
  getListNewAction,
  getListNewLatestAction,
} from '@/redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getListProductByPaper();
    getListProductByAudio();
    getListNewsLatest();
  }, []);
  const getListProductLoading = useSelector((state) => state.loading[EProductAction.GET_LIST_PRODUCT_PAPER]);
  const paperBooks = useSelector((state) => state.productState.paperBooks) ?? [];
  const audioBooks = useSelector((state) => state.productState.audioBooks) ?? [];
  const newLatests = useSelector((state) => state.newState.newLatests) ?? [];
  const paramGetProductRequest = {
    type: 'PAPER_BOOK',
    page: 1,
    pageSize: 10,
  };
  const paperTypeAudioBook = { type: 'AUDIO_BOOK', pageSize: 10, page: 1 };
  const newType = { page: 1, pageSize: 10, featured: false };
  const getListProductByPaper = () => {
    dispatch(getListProductPaperBookAction.request(paramGetProductRequest));
  };
  const getListProductByAudio = () => {
    dispatch(getListProductAudioBookAction.request(paperTypeAudioBook));
  };
  const getListNewsLatest = () => {
    dispatch(getListNewLatestAction.request(newType));
  };
  return (
    <div className="Home">
      <HomeBanner />
      <BooksCarousel title="Sách Giấy" data={paperBooks} />
      <BooksCarousel title="Sách Nói" darkBackground data={audioBooks} />
      <NewsTab data={newLatests} />
    </div>
  );
};

export default Home;
