import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from '@reach/router';

import VideoFileCard from '@/components/VideoFileCard/VideoFileCard';
import { scrollToTop } from '@/utils/functions';
import { getProductDetailAction, getVoiceMyBookAction } from '@/redux/actions';
import { Paths } from '@/pages/routers';
import Loading from '@/containers/Loading/Loading';
import Audio from '@/components/Audio';
import { EProductAction } from '@/redux/actions/products/constants';

import './BookAudio.scss';

const BookAudio = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const voice = query.get('voice');
  const product = query.get('product');

  const bookData = useSelector((state) => state.productState.book) ?? {};
  const getBookLoading = useSelector((state) => state.loading[EProductAction.GET_DETAIL_PRODUCT]);

  const isAvaiablePage = voice && product;

  const getVoiceMyBookData = useCallback(() => {
    dispatch(getVoiceMyBookAction.request({ product, voice }));
  }, [dispatch, voice, product]);

  useEffect(() => {
    if (isAvaiablePage) getVoiceMyBookData();
    else navigate(Paths.Home);
  }, [getVoiceMyBookData]);

  useEffect(() => {
    scrollToTop();
  }, []);

  const getProductById = useCallback(() => {
    if (product) dispatch(getProductDetailAction.request(product));
  }, [product]);

  useEffect(() => {
    getProductById();
  }, [getProductById]);

  return (
    <div className="BookAudio">
      <div className="container">
        <div className="BookAudio-wrapper">
          {getBookLoading ? (
            <Loading />
          ) : (
            <>
              <div className="BookAudio-control">
                <Audio image={bookData.image} title={bookData.name} />
              </div>
              <div className="BookAudio-list">
                <div className="BookAudio-list-title">Danh sách</div>
                <div className="BookAudio-list-main">
                  {bookData.voice?.map((item) => (
                    <VideoFileCard
                      key={item._id}
                      title={`Nghe sách: ${bookData.name}`}
                      description="Bấm vào đây để nghe sách"
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookAudio;
