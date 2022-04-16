import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import ReviewsModal from '@/containers/ReviewsModal';
import { formatMoneyVND, scrollToTop } from '@/utils/functions';
import { useParams } from '@reach/router';
import { getProductDetailAction } from '@/redux/actions';
import { EProductAction } from '@/redux/actions/products/constants';
import Loading from '@/containers/Loading/Loading';
import { ETypeBook, LIMIT_DESCRIPTION_LENGTH } from '@/common/static';

import { EKeyTabMyBookDetail } from './MyBookDetail.enums';
import './MyBookDetail.scss';
import MyBookDetailTab from '@/pages/MyBookDetail/MyBookDetailTab';

const MyBookDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const getBookLoading = useSelector((state) => state.loading[EProductAction.GET_DETAIL_PRODUCT]);

  const bookData = useSelector((state) => state.productState.book) ?? {};

  const isPaperBook = bookData.type == ETypeBook.PAPER_BOOK;

  const [reviewsModalState, setReviewsModalState] = useState({
    visible: false,
  });
  const [keyTabMyBookDetail, setKeyTabMyBookDetail] = useState(EKeyTabMyBookDetail.INFO_BOOK);

  const [seeMoreDescription, setSeeMoreDescription] = useState(false);
  const isShowSeeMore = bookData.description?.length > LIMIT_DESCRIPTION_LENGTH;

  const handleOpenReviewsModal = () => {
    setReviewsModalState({ visible: true });
  };

  const handleCloseReviewsModal = () => {
    setReviewsModalState({ visible: false });
  };

  const handleChangeKeyTabMyBookDetail = (currentKey) => {
    setKeyTabMyBookDetail(currentKey);
  };

  const getProductById = useCallback(() => {
    if (id) dispatch(getProductDetailAction.request(id));
  }, [id]);

  useEffect(() => {
    scrollToTop();
    getProductById();
  }, [getProductById]);

  return (
    <div className="MyBookDetail">
      <div className="container">
        {getBookLoading ? (
          <Loading />
        ) : (
          <div className="MyBookDetail-wrapper">
            <div className="MyBookDetail-main flex flex-wrap">
              <div className="MyBookDetail-main-item">
                <div className="MyBookDetail-image flex">
                  <img src={bookData.image} alt="" />
                </div>
              </div>
              <div className="MyBookDetail-main-item">
                <div className="MyBookDetail-title">
                  {bookData.name} <span>({isPaperBook ? 'Sách giấy' : 'Ebook'})</span>
                </div>
                <div className="MyBookDetail-row flex justify-between items-center">
                  <div className="MyBookDetail-author">{bookData?.author?.name}</div>
                  <div className="MyBookDetail-price">
                    {bookData.prePrice && <del>{formatMoneyVND({ amount: bookData.prePrice, showSuffix: true })}</del>}
                    <span>{formatMoneyVND({ amount: bookData.price, showSuffix: true })}</span>
                  </div>
                </div>
                <div className="MyBookDetail-overview flex items-center">
                  <div className="MyBookDetail-overview-item" onClick={handleOpenReviewsModal}>
                    <div className="MyBookDetail-overview-item-title">Đánh giá</div>
                    <div className="MyBookDetail-overview-item-description">{bookData.rate}</div>
                  </div>
                  <div className="MyBookDetail-overview-item">
                    <div className="MyBookDetail-overview-item-title">Số trang</div>
                    <div className="MyBookDetail-overview-item-description">{bookData.numberOfPage}</div>
                  </div>
                  <div className="MyBookDetail-overview-item">
                    <div className="MyBookDetail-overview-item-title">Ngôn ngữ</div>
                    <div className="MyBookDetail-overview-item-description">{bookData.language}</div>
                  </div>
                </div>
                <div className="MyBookDetail-tabs flex items-center">
                  {[EKeyTabMyBookDetail.INFO_BOOK, EKeyTabMyBookDetail.INFO_AUTHOR].map((item, index) => (
                    <div
                      key={index}
                      className={classNames('MyBookDetail-tabs-item', { active: item === keyTabMyBookDetail })}
                      onClick={() => handleChangeKeyTabMyBookDetail(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {keyTabMyBookDetail === EKeyTabMyBookDetail.INFO_BOOK && (
                  <div className="MyBookDetail-tabs-main-item">
                    <div className="MyBookDetail-row-info flex justify-between">
                      <span>Dịch giả:</span>
                      <span>{bookData.translator} </span>
                    </div>
                    <div className="MyBookDetail-row-info flex justify-between">
                      <span>Năm xuất bản:</span>
                      <span>{bookData.publishingYear}</span>
                    </div>
                    <div className="MyBookDetail-row-info flex justify-between">
                      <span>
                        {seeMoreDescription
                          ? bookData.description
                          : `${bookData.description?.substring(0, LIMIT_DESCRIPTION_LENGTH)}${
                              isShowSeeMore ? '...' : ''
                            }`}{' '}
                        <br />
                        {isShowSeeMore && (
                          <span
                            className="MyBookDetail-row-info-see-more"
                            onClick={() => setSeeMoreDescription(!seeMoreDescription)}
                          >
                            {seeMoreDescription ? 'Thu gọn' : 'Xem thêm'}
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                )}

                {keyTabMyBookDetail === EKeyTabMyBookDetail.INFO_AUTHOR && (
                  <div className="MyBookDetail-tabs-main-item">
                    <div className="MyBookDetail-row-info flex justify-between">
                      <span>Tên tác giả:</span>
                      <span>{bookData.author?.name} </span>
                    </div>
                    <div className="MyBookDetail-row-info flex justify-between">
                      <span>Lời giới thiệu:</span>
                      <span>{bookData.author?.description}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <MyBookDetailTab />
          </div>
        )}
      </div>

      <ReviewsModal {...reviewsModalState} onClose={handleCloseReviewsModal} />
    </div>
  );
};

export default MyBookDetail;
