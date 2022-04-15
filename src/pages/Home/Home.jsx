import React, { useCallback, useEffect, useState } from 'react';

import HomeBanner from '@/containers/HomeBanner/HomeBanner';
import BooksCarousel from '@/containers/BooksCarousel';
import { dataBookCarousel, dataNewsList } from '@/common/data';
import NewsTab from '@/containers/NewsTab';
import { EProductAction } from '@/redux/actions/products/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getListProductPaperBookAction, getListProductAudioBookAction, getListNewAction } from '@/redux/actions';
import { ETypePage } from '@/utils/constants';
import { ETypeBook } from '@/common/static';
import { ENewAction } from '@/redux/actions/news/constants';
import { EKeyNewsTab } from '@/containers/NewsTab/NewsTab.enums';
import { Paths } from '@/pages/routers';

const Home = () => {
  const dispatch = useDispatch();
  const getPaperBooksLoading = useSelector((state) => state.loading[EProductAction.GET_LIST_PRODUCT_PAPER]);
  const getAudioBooksLoading = useSelector((state) => state.loading[EProductAction.GET_LIST_PRODUCT_AUDIO]);
  const getNewsLoading = useSelector((state) => state.loading[ENewAction.GET_LIST_NEW]);

  const paperBooks = useSelector((state) => state.productState.paperBooks?.records) ?? [];
  const audioBooks = useSelector((state) => state.productState.audioBooks?.records) ?? [];
  const newsData = useSelector((state) => state.newState.news) ?? [];

  const [getPaperBooksParamsRequest] = useState({
    type: ETypeBook.PAPER_BOOK,
    page: ETypePage.DEFAULT_PAGE,
    pageSize: ETypePage.DEFAULT_PAGE_SIZE,
  });
  const [getAudioBooksParamsRequest] = useState({
    type: ETypeBook.AUDIO_BOOK,
    page: ETypePage.DEFAULT_PAGE,
    pageSize: ETypePage.DEFAULT_PAGE_SIZE,
  });
  const [getNewsParamsRequest, setGetNewsParamsRequest] = useState({
    page: ETypePage.DEFAULT_PAGE,
    pageSize: 4,
    featured: EKeyNewsTab.LASTEST,
  });

  const handleChangeNewsTab = (key) => {
    setGetNewsParamsRequest({
      ...getNewsParamsRequest,
      featured: key,
    });
  };

  const getListProductByPaper = useCallback(() => {
    dispatch(getListProductPaperBookAction.request(getPaperBooksParamsRequest));
  }, [dispatch, getPaperBooksParamsRequest]);

  const getListProductByAudio = useCallback(() => {
    dispatch(getListProductAudioBookAction.request(getAudioBooksParamsRequest));
  }, [dispatch, getAudioBooksParamsRequest]);

  const getNewsData = useCallback(() => {
    dispatch(getListNewAction.request(getNewsParamsRequest));
  }, [dispatch, getNewsParamsRequest]);

  useEffect(() => {
    getListProductByPaper();
    getListProductByAudio();
    getNewsData();
  }, [getListProductByPaper, getListProductByAudio, getNewsData]);

  return (
    <div className="Home">
      <HomeBanner />
      <BooksCarousel title="Sách Giấy" data={paperBooks} loading={getPaperBooksLoading} link={Paths.BooksCategory} />
      <BooksCarousel
        title="Sách Nói"
        darkBackground
        data={audioBooks}
        loading={getAudioBooksLoading}
        link={Paths.BooksListenCategory}
      />
      <NewsTab data={newsData} loading={getNewsLoading} onTabChange={handleChangeNewsTab} />
    </div>
  );
};

export default Home;
