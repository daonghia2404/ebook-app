import React from 'react';
import { Form } from 'antd';

import Modal from '@/components/Modal';
import BgSpecial from '@/assets/images/bg-special.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './ReviewsModal.scss';
import Avatar from '@/components/Avatar';

const ReviewsModal = ({ visible, onClose }) => {
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
          8
        </div>

        <div className="ReviewsModal-overview-item flex flex-col justify-center">
          <div className="ReviewsModal-stars flex items-center justify-center">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="ReviewsModal-stars-item">
                <Icon name={EIconName.Star} color={EIconColor.SUNGLOW} />
              </div>
            ))}
          </div>
          3
        </div>

        <div className="ReviewsModal-overview-item flex flex-col justify-center">
          <div className="ReviewsModal-stars flex items-center justify-center">
            {[1, 2, 3].map((item) => (
              <div key={item} className="ReviewsModal-stars-item">
                <Icon name={EIconName.Star} color={EIconColor.SUNGLOW} />
              </div>
            ))}
          </div>
          0
        </div>

        <div className="ReviewsModal-overview-item flex flex-col justify-center">
          <div className="ReviewsModal-stars flex items-center justify-center">
            {[1, 2].map((item) => (
              <div key={item} className="ReviewsModal-stars-item">
                <Icon name={EIconName.Star} color={EIconColor.SUNGLOW} />
              </div>
            ))}
          </div>
          0
        </div>

        <div className="ReviewsModal-overview-item flex flex-col justify-center">
          <div className="ReviewsModal-stars flex items-center justify-center">
            {[1].map((item) => (
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
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="ReviewsModal-stars-item">
                    <Icon name={EIconName.Star} color={EIconColor.SUNGLOW} />
                  </div>
                ))}
              </div>
              <div className="ReviewsModal-list-item-info-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <div className="ReviewsModal-list-item-info-time">1 giờ trước</div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ReviewsModal;
