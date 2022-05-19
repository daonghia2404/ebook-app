import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { scrollToTop } from '@/utils/functions';
import { getListNewAction } from '@/redux/actions';
import { ETypePage } from '@/utils/constants';
import Loading from '@/containers/Loading/Loading';
import Empty from '@/components/Empty/Empty';
import { ENewAction } from '@/redux/actions/news/constants';
import NewBlock from '@/components/NewBlock';

import './News.scss';

const News = () => {
  const dispatch = useDispatch();
  const [getNewsParamsRequest, setGetNewsParamsRequest] = useState({
    page: ETypePage.DEFAULT_PAGE,
    pageSize: 500,
  });
  const getNewsLoading = useSelector((state) => state.loading[ENewAction.GET_LIST_NEW]);
  const newsData = useSelector((state) => state.newState.news);

  const isEmpty = newsData.records?.length === 0;

  const getNewsData = useCallback(() => {
    dispatch(getListNewAction.request(getNewsParamsRequest));
  }, [dispatch, getNewsParamsRequest]);

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    getNewsData();
  }, [getNewsData]);

  return (
    <div className="News">
      <div className="container">
        <div className="News-wrapper">
          <div className="News-title">Tin tức</div>
          {getNewsLoading ? (
            <Loading />
          ) : (
            <>
              {isEmpty ? (
                <Empty />
              ) : (
                <>
                  <div className="News-list flex flex-wrap">
                    {newsData?.records?.map((item, index) => (
                      <div key={index} className="News-list-item">
                        <NewBlock {...item} />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
