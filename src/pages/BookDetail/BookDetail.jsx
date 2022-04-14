import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import BooksList from '@/containers/BooksList';
import { dataBookCarousel } from '@/common/data';
import ImageBookDetail from '@/assets/images/image-book-1.png';
import Button from '@/components/Button';
import Amount from '@/components/Amount';
import ReviewsModal from '@/containers/ReviewsModal';
import { scrollToTop, showNotification } from '@/utils/functions';

import { EKeyTabBookDetail } from './BookDetail.enums';
import './BookDetail.scss';
import AuthHelpers from '@/services/auth-helpers';
import { useParams } from '@reach/router';
import { getProductDetailAction, addToCartAction, getListCartAction, getSameProductAction } from '@/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { EProductAction } from '@/redux/actions/products/constants';
import { ETypeNotification } from '@/utils/constants';

const BookDetail = () => {
  const [reviewsModalState, setReviewsModalState] = useState({
    visible: false,
  });
  const dispatch = useDispatch();
  const [keyTabBookDetail, setKeyTabBookDetail] = useState(EKeyTabBookDetail.INFO_BOOK);
  const sameBooks = useSelector((state) => state.productState.sameBooks);
  const [count, setCount] = useState(1);
  useEffect(() => {
    scrollToTop();
    getProductById();
    getSameProductById();
  }, []);
  let { id } = useParams();
  const product = useSelector((state) => state.productState.book) ?? {};
  const loadingCart = useSelector((state) => state.loading[EProductAction.ADD_TO_CART_PRODUCT]);
  const checkAuth = AuthHelpers.getAccessToken();
  const samePaperBook = { pageSize: 10, page: 1 };
  const getSameProductById = () => {
    dispatch(getSameProductAction.request(id, samePaperBook));
  };
  const handleOpenReviewsModal = () => {
    setReviewsModalState({ visible: true });
  };
  const getProductById = () => {
    dispatch(getProductDetailAction.request(id));
  };
  const handleCloseReviewsModal = () => {
    setReviewsModalState({ visible: false });
  };

  const handleChangeKeyTabBookDetail = (currentKey) => {
    setKeyTabBookDetail(currentKey);
  };
  const handlerChange = (values) => {
    setCount(values);
  };
  const handlerAddToCart = () => {
    const cart = { product: id, amount: count };
    dispatch(addToCartAction.request({ ...cart }, addToCartSuccess));
  };
  const addToCartSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Sản phẩm đã được thêm vào giỏ hàng');
    getListCart();
    setCount(1);
  };
  const checkAuthAddToCart = () => {
    if (!checkAuth) {
      showNotification('warning', 'Bắt buộc phải đăng nhập');
    }
  };
  const getListCart = () => {
    dispatch(getListCartAction.request());
  };
  return (
    <div className="BookDetail">
      <div className="container">
        <div className="BookDetail-wrapper">
          <div className="BookDetail-main flex flex-wrap">
            <div className="BookDetail-main-item">
              <div className="BookDetail-image flex">
                <img src={product.image} alt="" />
              </div>
            </div>
            <div className="BookDetail-main-item">
              <div className="BookDetail-title">
                {product.name} <span>({product.type == 'PAPER_BOOK' ? 'Sách giấy' : 'Sách nói'})</span>
              </div>
              <div className="BookDetail-row flex justify-between items-center">
                <div className="BookDetail-author">Dale Carnegie</div>
                <div className="BookDetail-price">
                  <del>{product.price} đ</del>
                  <span>{product.prePrice} đ</span>
                </div>
              </div>
              <div className="BookDetail-overview flex items-center">
                <div className="BookDetail-overview-item" onClick={handleOpenReviewsModal}>
                  <div className="BookDetail-overview-item-title">Đánh giá</div>
                  <div className="BookDetail-overview-item-description">{product.rate}</div>
                </div>
                <div className="BookDetail-overview-item">
                  <div className="BookDetail-overview-item-title">Số trang</div>
                  <div className="BookDetail-overview-item-description">{product.numberOfPage}</div>
                </div>
                <div className="BookDetail-overview-item">
                  <div className="BookDetail-overview-item-title">Ngôn ngữ</div>
                  <div className="BookDetail-overview-item-description">{product.language}</div>
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
                  <span>{product.translator} </span>
                </div>
                <div className="BookDetail-row-info flex justify-between">
                  <span>Năm xuất bản:</span>
                  <span>{product.publishingYear}</span>
                </div>
                <div className="BookDetail-row-info flex justify-between">
                  <span>
                    {product.description} <br />
                    <span className="BookDetail-row-info-see-more">Xem thêm</span>
                  </span>
                </div>
              </div>

              <div className="BookDetail-actions flex justify-between items-center">
                <div className="BookDetail-actions-amount">
                  <Amount onChange={checkAuth ? handlerChange : checkAuthAddToCart} value={count} />
                </div>

                <div className="BookDetail-actions-add-cart">
                  <Button
                    title="Thêm vào giỏ hàng"
                    type="primary"
                    loading={loadingCart}
                    onClick={checkAuth ? handlerAddToCart : checkAuthAddToCart}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BooksList title="Sách tương tự" layout={5} data={sameBooks} />

      <ReviewsModal {...reviewsModalState} onClose={handleCloseReviewsModal} />
    </div>
  );
};

export default BookDetail;
