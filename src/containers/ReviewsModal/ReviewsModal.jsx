import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from '@reach/router';

import Modal from '@/components/Modal';
import BgSpecial from '@/assets/images/bg-special.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Avatar from '@/components/Avatar';
import { getRateProductAction, getRateStatisticProductAction } from '@/redux/actions';
import { ERateProductAction } from '@/redux/actions/rate/constants';
import Loading from '@/containers/Loading/Loading';
import { ETypePage } from '@/utils/constants';

import './ReviewsModal.scss';
import { formatISODateToDateTime } from '@/utils/functions';
import Empty from '@/components/Empty/Empty';

const ReviewsModal = ({ visible, onClose }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [getRateProductParamsRequest, setGetRateProductParamsRequest] = useState({
    page: ETypePage.DEFAULT_PAGE,
    pageSize: ETypePage.DEFAULT_PAGE_SIZE,
  });

  const getRateProductLoading = useSelector((state) => state.loading[ERateProductAction.GET_RATE_PRODUCT]);
  const getRateStatisticLoading = useSelector((state) => state.loading[ERateProductAction.GET_RATE_STATISTIC_PRODUCT]);

  const loading = getRateProductLoading || getRateStatisticLoading;

  const getRateProductData = useCallback(() => {
    dispatch(getRateProductAction.request(id, getRateProductParamsRequest));
  }, [dispatch, id, getRateProductParamsRequest]);

  const getRateStatisticData = useCallback(() => {
    dispatch(getRateStatisticProductAction.request(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (visible) {
      getRateProductData();
      getRateStatisticData();
    }
  }, [visible, getRateProductData, getRateStatisticData]);

  const getRateBooks = useSelector((state) => state.rateProductState.getRateBooks) || [];
  const getRateStatistic = useSelector((state) => state.rateProductState.getRateStatistic) || {};

  const isEmpty = getRateBooks.length === 0;

  return (
    <Modal
      maxWidth="63rem"
      radius
      closeable={false}
      visible={visible}
      onClose={onClose}
      className="ReviewsModal"
      wrapClassName="ReviewsModal-wrapper"
    >
      <img className="ReviewsModal-bg special" src={BgSpecial} alt="" />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="ReviewsModal-header flex items-center justify-center">
            <div className="ReviewsModal-back" onClick={onClose}>
              <Icon name={EIconName.ArrowLeft} color={EIconColor.BLUE_ZODIAC} />
            </div>
            <div className="ReviewsModal-title">Đánh Giá</div>
          </div>

          <div className="ReviewsModal-overview flex justify-between">
            <div className="ReviewsModal-overview-item flex flex-col justify-center">
              <div className="ReviewsModal-stars flex items-center justify-center">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="ReviewsModal-stars-item">
                    <Icon name={EIconName.Star} color={EIconColor.SUNGLOW} />
                  </div>
                ))}
              </div>
              {getRateStatistic.fiveStar}
            </div>

            <div className="ReviewsModal-overview-item flex flex-col justify-center">
              <div className="ReviewsModal-stars flex items-center justify-center">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="ReviewsModal-stars-item">
                    <Icon name={EIconName.Star} color={EIconColor.SUNGLOW} />
                  </div>
                ))}
              </div>
              {getRateStatistic.fourStar}
            </div>

            <div className="ReviewsModal-overview-item flex flex-col justify-center">
              <div className="ReviewsModal-stars flex items-center justify-center">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="ReviewsModal-stars-item">
                    <Icon name={EIconName.Star} color={EIconColor.SUNGLOW} />
                  </div>
                ))}
              </div>
              {getRateStatistic.threeStar}
            </div>

            <div className="ReviewsModal-overview-item flex flex-col justify-center">
              <div className="ReviewsModal-stars flex items-center justify-center">
                {[1, 2].map((item) => (
                  <div key={item} className="ReviewsModal-stars-item">
                    <Icon name={EIconName.Star} color={EIconColor.SUNGLOW} />
                  </div>
                ))}
              </div>
              {getRateStatistic.twoStar}
            </div>

            <div className="ReviewsModal-overview-item flex flex-col justify-center">
              <div className="ReviewsModal-stars flex items-center justify-center">
                {[1].map((item) => (
                  <div key={item} className="ReviewsModal-stars-item">
                    <Icon name={EIconName.Star} color={EIconColor.SUNGLOW} />
                  </div>
                ))}
              </div>
              {getRateStatistic.oneStar}
            </div>
          </div>

          {isEmpty ? (
            <Empty />
          ) : (
            <div className="ReviewsModal-list">
              {getRateBooks.map((item) => (
                <div key={item} className="ReviewsModal-list-item flex">
                  <div className="ReviewsModal-list-item-avatar">
                    <Avatar />
                  </div>
                  <div className="ReviewsModal-list-item-info">
                    <div className="ReviewsModal-list-item-info-name">{item.user?.name}</div>
                    <div className="ReviewsModal-stars flex items-center">
                      {[...Array(item.numberStar)].map((item) => (
                        <div key={item} className="ReviewsModal-stars-item">
                          <Icon name={EIconName.Star} color={EIconColor.SUNGLOW} />
                        </div>
                      ))}
                    </div>
                    <div className="ReviewsModal-list-item-info-description">{item.content}</div>
                    <div className="ReviewsModal-list-item-info-time">{formatISODateToDateTime(item.createdAt)}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </Modal>
  );
};

export default ReviewsModal;
