import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import BooksList from '@/containers/BooksList';
import { dataBookCarousel } from '@/common/data';
import ImageBookDetail from '@/assets/images/image-book-1.png';
import Button from '@/components/Button';
import Amount from '@/components/Amount';
import ReviewsModal from '@/containers/ReviewsModal';
import { scrollToTop } from '@/utils/functions';

import { EKeyTabBookDetail } from './BookDetail.enums';
import './BookDetail.scss';

const BookDetail = () => {
  const [reviewsModalState, setReviewsModalState] = useState({
    visible: false,
  });
  const [keyTabBookDetail, setKeyTabBookDetail] = useState(EKeyTabBookDetail.INFO_BOOK);

  const handleOpenReviewsModal = () => {
    setReviewsModalState({ visible: true });
  };

  const handleCloseReviewsModal = () => {
    setReviewsModalState({ visible: false });
  };

  const handleChangeKeyTabBookDetail = (currentKey) => {
    setKeyTabBookDetail(currentKey);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="BookDetail">
      <div className="container">
        <div className="BookDetail-wrapper">
          <div className="BookDetail-main flex flex-wrap">
            <div className="BookDetail-main-item">
              <div className="BookDetail-image flex">
                <img src={ImageBookDetail} alt="" />
              </div>
            </div>
            <div className="BookDetail-main-item">
              <div className="BookDetail-title">Đắc nhân tâm</div>
              <div className="BookDetail-row flex justify-between items-center">
                <div className="BookDetail-author">Dale Carnegie</div>
                <div className="BookDetail-price">
                  <del>150.000đ</del>
                  <span>150.000đ</span>
                </div>
              </div>
              <div className="BookDetail-overview flex items-center">
                <div className="BookDetail-overview-item" onClick={handleOpenReviewsModal}>
                  <div className="BookDetail-overview-item-title">Đánh giá</div>
                  <div className="BookDetail-overview-item-description">4.1</div>
                </div>
                <div className="BookDetail-overview-item">
                  <div className="BookDetail-overview-item-title">Số trang</div>
                  <div className="BookDetail-overview-item-description">1500</div>
                </div>
                <div className="BookDetail-overview-item">
                  <div className="BookDetail-overview-item-title">Ngôn ngữ</div>
                  <div className="BookDetail-overview-item-description">Tiếng Việt</div>
                </div>
              </div>
              <div className="BookDetail-tabs flex items-center">
                {[EKeyTabBookDetail.INFO_BOOK, EKeyTabBookDetail.INFO_AUTHOR].map((item, index) => (
                  <div
                    key={index}
                    className={classNames('BookDetail-tabs-item', { active: item === keyTabBookDetail })}
                    onClick={() => handleChangeKeyTabBookDetail(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="BookDetail-tabs-main-item">
                <div className="BookDetail-row-info flex justify-between">
                  <span>Dịch giả:</span>
                  <span>Influence </span>
                </div>
                <div className="BookDetail-row-info flex justify-between">
                  <span>Năm xuất bản:</span>
                  <span>1990</span>
                </div>
                <div className="BookDetail-row-info flex justify-between">
                  <span>
                    Đắc nhân tâm - How to win friends and Influence People của Dale Carnegie là quyển sách nổi tiếng
                    nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Tác phẩm đã được chuyển ngữ sang hầu
                    hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia. <br />
                    <span className="BookDetail-row-info-see-more">Xem thêm</span>
                  </span>
                </div>
              </div>

              <div className="BookDetail-actions flex justify-between items-center">
                <div className="BookDetail-actions-amount">
                  <Amount />
                </div>

                <div className="BookDetail-actions-add-cart">
                  <Button title="Thêm vào giỏ hàng" type="primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BooksList title="Sách tương tự" layout={5} data={dataBookCarousel.slice(0, 5)} />

      <ReviewsModal {...reviewsModalState} onClose={handleCloseReviewsModal} />
    </div>
  );
};

export default BookDetail;
