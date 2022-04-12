import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import ImageBookListenDetail from '@/assets/images/image-book-1.png';
import Button from '@/components/Button';
import ReviewsModal from '@/containers/ReviewsModal';
import BookListenListTab from '@/pages/BookListenDetail/BookListenListTab';
import { EKeyTabBookDetail } from '@/pages/BookDetail/BookDetail.enums';
import { scrollToTop } from '@/utils/functions';

import './BookListenDetail.scss';

const BookListenDetail = () => {
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
    <div className="BookListenDetail">
      <div className="container">
        <div className="BookListenDetail-wrapper">
          <div className="BookListenDetail-main flex flex-wrap">
            <div className="BookListenDetail-main-item">
              <div className="BookListenDetail-image flex">
                <img src={ImageBookListenDetail} alt="" />
              </div>
            </div>
            <div className="BookListenDetail-main-item">
              <div className="BookListenDetail-title">Đắc nhân tâm</div>
              <div className="BookListenDetail-row flex justify-between items-center">
                <div className="BookListenDetail-author">Dale Carnegie</div>
                <div className="BookListenDetail-price">
                  <del>150.000đ</del>
                  <span>150.000đ</span>
                </div>
              </div>
              <div className="BookListenDetail-overview flex items-center">
                <div className="BookListenDetail-overview-item" onClick={handleOpenReviewsModal}>
                  <div className="BookListenDetail-overview-item-title">Đánh giá</div>
                  <div className="BookListenDetail-overview-item-description">4.1</div>
                </div>
                <div className="BookListenDetail-overview-item">
                  <div className="BookListenDetail-overview-item-title">Số trang</div>
                  <div className="BookListenDetail-overview-item-description">1500</div>
                </div>
                <div className="BookListenDetail-overview-item">
                  <div className="BookListenDetail-overview-item-title">Ngôn ngữ</div>
                  <div className="BookListenDetail-overview-item-description">Tiếng Việt</div>
                </div>
              </div>
              <div className="BookListenDetail-tabs flex items-center">
                {[EKeyTabBookDetail.INFO_BOOK, EKeyTabBookDetail.INFO_AUTHOR].map((item, index) => (
                  <div
                    key={index}
                    className={classNames('BookListenDetail-tabs-item', { active: item === keyTabBookDetail })}
                    onClick={() => handleChangeKeyTabBookDetail(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="BookListenDetail-tabs-main-item">
                <div className="BookListenDetail-row-info flex justify-between">
                  <span>Dịch giả:</span>
                  <span>Influence </span>
                </div>
                <div className="BookListenDetail-row-info flex justify-between">
                  <span>Năm xuất bản:</span>
                  <span>1990</span>
                </div>
                <div className="BookListenDetail-row-info flex justify-between">
                  <span>
                    Đắc nhân tâm - How to win friends and Influence People của Dale Carnegie là quyển sách nổi tiếng
                    nhất, bán chạy nhất và có tầm ảnh hưởng nhất của mọi thời đại. Tác phẩm đã được chuyển ngữ sang hầu
                    hết các thứ tiếng trên thế giới và có mặt ở hàng trăm quốc gia. <br />
                    <span className="BookListenDetail-row-info-see-more">Xem thêm</span>
                  </span>
                </div>
              </div>

              <div className="BookListenDetail-actions flex justify-between items-center">
                <div className="BookListenDetail-actions-amount" />
                <div className="BookListenDetail-actions-add-cart">
                  <Button title="Thêm vào giỏ hàng" type="primary" />
                </div>
              </div>
            </div>
          </div>

          <BookListenListTab />
        </div>
      </div>

      <ReviewsModal {...reviewsModalState} onClose={handleCloseReviewsModal} />
    </div>
  );
};

export default BookListenDetail;
