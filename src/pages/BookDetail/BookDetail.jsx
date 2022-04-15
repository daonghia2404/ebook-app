import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';

import BooksList from '@/containers/BooksList';
import Button from '@/components/Button';
import Amount from '@/components/Amount';
import ReviewsModal from '@/containers/ReviewsModal';
import { formatMoneyVND, scrollToTop, showNotification } from '@/utils/functions';
import AuthHelpers from '@/services/auth-helpers';
import { useParams } from '@reach/router';
import { getProductDetailAction, addToCartAction, getSameProductAction, getListCartAction } from '@/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { EProductAction } from '@/redux/actions/products/constants';
import { ETypeNotification, ETypePage } from '@/utils/constants';
import Loading from '@/containers/Loading/Loading';

import { EKeyTabBookDetail } from './BookDetail.enums';
import './BookDetail.scss';
import { ETypeBook } from '@/common/static';

const BookDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const atk = AuthHelpers.getAccessToken();
  const LIMIT_DESCRIPTION_LENGTH = 300;

  const addCartLoading = useSelector((state) => state.loading[EProductAction.ADD_TO_CART_PRODUCT]);
  const getBookLoading = useSelector((state) => state.loading[EProductAction.GET_DETAIL_PRODUCT]);
  const getSameBooksLoading = useSelector((state) => state.loading[EProductAction.GET_SAME_PRODUCT]);

  const sameBooks = useSelector((state) => state.productState.sameBooks?.records) || [];
  const bookData = useSelector((state) => state.productState.book) ?? {};
  const [getSameBookParamsRequest] = useState({
    page: ETypePage.DEFAULT_PAGE,
    pageSize: 5,
  });

  const isPaperBook = bookData.type == ETypeBook.PAPER_BOOK;

  const [reviewsModalState, setReviewsModalState] = useState({
    visible: false,
  });
  const [keyTabBookDetail, setKeyTabBookDetail] = useState(EKeyTabBookDetail.INFO_BOOK);

  const [seeMoreDescription, setSeeMoreDescription] = useState(false);
  const isShowSeeMore = bookData.description?.length > LIMIT_DESCRIPTION_LENGTH;
  const [amount, setAmount] = useState(1);

  const handleOpenReviewsModal = () => {
    setReviewsModalState({ visible: true });
  };

  const handleCloseReviewsModal = () => {
    setReviewsModalState({ visible: false });
  };

  const handleChangeKeyTabBookDetail = (currentKey) => {
    setKeyTabBookDetail(currentKey);
  };

  const handleChangeAmountProduct = (value) => {
    if (atk) {
      setAmount(value);
    } else {
      showNotification(ETypeNotification.WARNING, 'Vui lòng đăng nhập để tiếp tục thực hiện hành động này');
    }
  };

  const handleAddBookToCart = () => {
    if (atk) {
      const body = { product: id, amount: amount };
      dispatch(addToCartAction.request(body, handleAddBookToCartSuccess));
    } else {
      showNotification(ETypeNotification.WARNING, 'Vui lòng đăng nhập để tiếp tục thực hiện hành động này');
    }
  };

  const handleAddBookToCartSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Sản phẩm đã được thêm vào giỏ hàng');
    getCartsData();
  };

  const getCartsData = () => {
    dispatch(getListCartAction.request());
  };

  const getProductById = useCallback(() => {
    if (id) dispatch(getProductDetailAction.request(id));
  }, [id]);

  const getSameProductById = useCallback(() => {
    if (id) dispatch(getSameProductAction.request(id, getSameBookParamsRequest));
  }, [id, getSameBookParamsRequest]);

  useEffect(() => {
    scrollToTop();
    getProductById();
    getSameProductById();
  }, [getProductById, getSameProductById]);

  return (
    <div className="BookDetail">
      <div className="container">
        {getBookLoading ? (
          <Loading />
        ) : (
          <div className="BookDetail-wrapper">
            <div className="BookDetail-main flex flex-wrap">
              <div className="BookDetail-main-item">
                <div className="BookDetail-image flex">
                  <img src={bookData.image} alt="" />
                </div>
              </div>
              <div className="BookDetail-main-item">
                <div className="BookDetail-title">
                  {bookData.name} <span>({isPaperBook ? 'Sách giấy' : 'Sách nói'})</span>
                </div>
                <div className="BookDetail-row flex justify-between items-center">
                  <div className="BookDetail-author">{bookData?.author?.name}</div>
                  <div className="BookDetail-price">
                    {bookData.prePrice && <del>{formatMoneyVND({ amount: bookData.prePrice, showSuffix: true })}</del>}
                    <span>{formatMoneyVND({ amount: bookData.price, showSuffix: true })}</span>
                  </div>
                </div>
                <div className="BookDetail-overview flex items-center">
                  <div className="BookDetail-overview-item" onClick={handleOpenReviewsModal}>
                    <div className="BookDetail-overview-item-title">Đánh giá</div>
                    <div className="BookDetail-overview-item-description">{bookData.rate}</div>
                  </div>
                  <div className="BookDetail-overview-item">
                    <div className="BookDetail-overview-item-title">Số trang</div>
                    <div className="BookDetail-overview-item-description">{bookData.numberOfPage}</div>
                  </div>
                  <div className="BookDetail-overview-item">
                    <div className="BookDetail-overview-item-title">Ngôn ngữ</div>
                    <div className="BookDetail-overview-item-description">{bookData.language}</div>
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

                {keyTabBookDetail === EKeyTabBookDetail.INFO_BOOK && (
                  <div className="BookDetail-tabs-main-item">
                    <div className="BookDetail-row-info flex justify-between">
                      <span>Dịch giả:</span>
                      <span>{bookData.translator} </span>
                    </div>
                    <div className="BookDetail-row-info flex justify-between">
                      <span>Năm xuất bản:</span>
                      <span>{bookData.publishingYear}</span>
                    </div>
                    <div className="BookDetail-row-info flex justify-between">
                      <span>
                        {seeMoreDescription
                          ? bookData.description
                          : `${bookData.description?.substring(0, LIMIT_DESCRIPTION_LENGTH)}${
                              isShowSeeMore ? '...' : ''
                            }`}{' '}
                        <br />
                        {isShowSeeMore && (
                          <span
                            className="BookDetail-row-info-see-more"
                            onClick={() => setSeeMoreDescription(!seeMoreDescription)}
                          >
                            {seeMoreDescription ? 'Thu gọn' : 'Xem thêm'}
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                )}

                {keyTabBookDetail === EKeyTabBookDetail.INFO_AUTHOR && (
                  <div className="BookDetail-tabs-main-item">
                    <div className="BookDetail-row-info flex justify-between">
                      <span>Tên tác giả:</span>
                      <span>{bookData.author?.name} </span>
                    </div>
                    <div className="BookDetail-row-info flex justify-between">
                      <span>Lời giới thiệu:</span>
                      <span>{bookData.author?.description}</span>
                    </div>
                  </div>
                )}

                <div className="BookDetail-actions flex justify-between items-center">
                  <div className="BookDetail-actions-amount">
                    {isPaperBook && <Amount onChange={handleChangeAmountProduct} value={amount} />}
                  </div>

                  <div className="BookDetail-actions-add-cart">
                    <Button
                      title="Thêm vào giỏ hàng"
                      type="primary"
                      loading={addCartLoading}
                      onClick={handleAddBookToCart}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <BooksList title="Sách tương tự" layout={5} loading={getSameBooksLoading} data={sameBooks} />

      <ReviewsModal {...reviewsModalState} onClose={handleCloseReviewsModal} />
    </div>
  );
};

export default BookDetail;
