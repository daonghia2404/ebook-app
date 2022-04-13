import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import ImageBookListenDetail from '@/assets/images/image-book-1.png';
import Button from '@/components/Button';
import ReviewsModal from '@/containers/ReviewsModal';
import BookListenListTab from '@/pages/BookListenDetail/BookListenListTab';
import { EKeyTabBookDetail } from '@/pages/BookDetail/BookDetail.enums';
import { scrollToTop, showNotification } from '@/utils/functions';
import AuthHelpers from '@/services/auth-helpers';
import './BookListenDetail.scss';
import { addToCartAction, getListCartAction, getProductDetailAction } from '@/redux/actions';
import { useParams } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { ETypeNotification } from '@/utils/constants';

const BookListenDetail = () => {
  useEffect(() => {
    scrollToTop();
    getProductById();
  }, []);
  const dispatch = useDispatch();
  const [reviewsModalState, setReviewsModalState] = useState({
    visible: false,
  });
  const [keyTabBookDetail, setKeyTabBookDetail] = useState(EKeyTabBookDetail.INFO_BOOK);
  let { id } = useParams();
  const handleOpenReviewsModal = () => {
    setReviewsModalState({ visible: true });
  };
  const checkAuth = AuthHelpers.getAccessToken();
  const handleCloseReviewsModal = () => {
    setReviewsModalState({ visible: false });
  };

  const handleChangeKeyTabBookDetail = (currentKey) => {
    setKeyTabBookDetail(currentKey);
  };
  const getProductById = () => {
    dispatch(getProductDetailAction.request(id));
  };
  const handlerAddToCart = () => {
    const cart = { product: id, amount: 1 };
    dispatch(addToCartAction.request({ ...cart }, addToCartSuccess));
  };
  const addToCartSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Sản phẩm đã được thêm vào giỏ hàng');
    getListCart();
  };
  const getListCart = () => {
    dispatch(getListCartAction.request());
  };
  const product = useSelector((state) => state.productState.book) ?? {};
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
              <div className="BookListenDetail-title">
                {product.name} <span>({product.type == 'PAPER_BOOK' ? 'Sách giấy' : 'Sách nói'})</span>
              </div>
              <div className="BookListenDetail-row flex justify-between items-center">
                <div className="BookListenDetail-author">Dale Carnegie</div>
                <div className="BookListenDetail-price">
                  <del>{product.price} đ</del>
                  <span>{product.prePrice} đ</span>
                </div>
              </div>
              <div className="BookListenDetail-overview flex items-center">
                <div className="BookListenDetail-overview-item" onClick={handleOpenReviewsModal}>
                  <div className="BookListenDetail-overview-item-title">Đánh giá</div>
                  <div className="BookListenDetail-overview-item-description">{product.rate}</div>
                </div>
                <div className="BookListenDetail-overview-item">
                  <div className="BookListenDetail-overview-item-title">Số trang</div>
                  <div className="BookListenDetail-overview-item-description">{product.numberOfPage}</div>
                </div>
                <div className="BookListenDetail-overview-item">
                  <div className="BookListenDetail-overview-item-title">Ngôn ngữ</div>
                  <div className="BookListenDetail-overview-item-description">{product.language}</div>
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
                  <span>{product.translator} </span>
                </div>
                <div className="BookListenDetail-row-info flex justify-between">
                  <span>Năm xuất bản:</span>
                  <span>{product.publishingYear}</span>
                </div>
                <div className="BookListenDetail-row-info flex justify-between">
                  <span>
                    {product.description} <br />
                    <span className="BookListenDetail-row-info-see-more">Xem thêm</span>
                  </span>
                </div>
              </div>

              <div className="BookListenDetail-actions flex justify-between items-center">
                <div className="BookListenDetail-actions-amount" />
                <div className="BookListenDetail-actions-add-cart">
                  <Button
                    title="Thêm vào giỏ hàng"
                    type="primary"
                    onClick={checkAuth ? handlerAddToCart : checkAuthAddToCart}
                  />
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
