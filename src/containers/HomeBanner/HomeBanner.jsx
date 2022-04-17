import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Carousels from '@/components/Carousels';
import { ETypePage } from '@/utils/constants';
import { getBannersAction } from '@/redux/actions';
import { EBannerAction } from '@/redux/actions/banner/constants';
import Loading from '@/containers/Loading/Loading';

import './HomeBanner.scss';

const HomeBanner = () => {
  const [dragging, setDragging] = useState(false);
  const dispatch = useDispatch();

  const bannersState = useSelector((state) => state.bannerState.banners?.records) || [];
  const getBannersLoading = useSelector((state) => state.loading[EBannerAction.GET_BANNERS]);

  const [getBannersParamsRequest, setGetBannersParamsRequest] = useState({
    page: ETypePage.DEFAULT_PAGE,
    pageSize: ETypePage.DEFAULT_PAGE_SIZE,
  });

  const getBannersData = useCallback(() => {
    dispatch(getBannersAction.request(getBannersParamsRequest));
  }, [dispatch]);

  useEffect(() => {
    getBannersData();
  }, [getBannersData]);

  return (
    <div className="HomeBanner">
      <div className="container">
        {getBannersLoading ? (
          <Loading />
        ) : (
          <div className="HomeBanner-wrapper">
            <Carousels dots={false} arrows={false} autoplay onDragging={setDragging}>
              {bannersState.map((item) => (
                <div
                  key={item}
                  className="HomeBanner-item"
                  onClick={() => {
                    !dragging && window.open(item.link);
                  }}
                >
                  <img src={item.imageUrl} alt="" />
                </div>
              ))}
            </Carousels>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeBanner;
