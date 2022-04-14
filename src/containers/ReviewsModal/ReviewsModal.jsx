import React from 'react';
import { Form } from 'antd';

import Modal from '@/components/Modal';
import BgSpecial from '@/assets/images/bg-special.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './ReviewsModal.scss';
import Avatar from '@/components/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRateProductAction, getRateStatisticProductAction } from '@/redux/actions';
import { useParams } from '@reach/router';
const ReviewsModal = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const getRateProduct = { id: id, page: 1, pageSize: 10 };

  useEffect(() => {
    dispatch(getRateProductAction.request(getRateProduct));
    dispatch(getRateStatisticProductAction.request(id));
  }, []);

  const getRateBook = useSelector((state) => state.rateProductState.getRateBooks);
  const getRateStatistic = useSelector((state) => state.rateProductState.getRateStatistic);
  const starArray = [];
  const getNumberStar = (count) => {
    for (let i = 1; i <= count; i++) {
      starArray.push(i);
    }
    return starArray;
  };
  getNumberStar(4).map(() => {});
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
          {getRateStatistic.oneStar}
        </div>

        <div className="ReviewsModal-overview-item flex flex-col justify-center">
          <div className="ReviewsModal-stars flex items-center justify-center">
            {getRateBook &&
              getRateBook.map((item) => (
                <div key={item} className="ReviewsModal-stars-item">
                  <Icon name={EIconName.Star} color={EIconColor.SUNGLOW} />
                </div>
              ))}
          </div>
          0
        </div>
      </div>

      <div className="ReviewsModal-list">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="ReviewsModal-list-item flex">
            <div className="ReviewsModal-list-item-avatar">
              <Avatar />
            </div>
            <div className="ReviewsModal-list-item-info">
              <div className="ReviewsModal-list-item-info-name">Hoang Huy</div>
              <div className="ReviewsModal-stars flex items-center">
                {getNumberStar(item.numberStar / 8).map((item) => (
                  <div key={item} className="ReviewsModal-stars-item">
                    <Icon name={EIconName.Star} color={EIconColor.SUNGLOW} />
                  </div>
                ))}
              </div>
              <div className="ReviewsModal-list-item-info-description">{item.content}</div>
              <div className="ReviewsModal-list-item-info-time">{item.createdAt}</div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ReviewsModal;
