import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { navigate } from '@reach/router';
import { Paths } from '@/pages/routers';
import { convertToSlug, formatMoneyVND, showNotification } from '@/utils/functions';
import { EProductAction } from '@/redux/actions/products/constants';
import { addToCartAction, getListCartAction, uiActions } from '@/redux/actions';
import { ETypeNotification } from '@/utils/constants';
import { handleAddNewCartLocalStorage, parseCartData } from '@/utils/cart';

import './BookBlock.scss';
import classNames from 'classnames';

const BookBlock = ({ image, images, type, owner, name, price, prePrice, _id, slug, author, ...rest }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profileState.profile) || {};
  const cartsStorage = useSelector((state) => state.uiState.cartsStorage);
  const atk = profile?.name;

  const isFlipCard = images && images.length >= 2;

  const addCartLoading = useSelector((state) => state.loading[EProductAction.ADD_TO_CART_PRODUCT]);

  const handleClickBookBlock = () => {
    if (owner) {
      navigate(Paths.MyBookDetail(slug || convertToSlug(name), _id));
    } else {
      navigate(Paths.BookDetail(slug || convertToSlug(name), _id));
    }
  };

  const handleAddBookToCart = () => {
    if (atk) {
      const body = { product: _id, amount: 1 };
      dispatch(addToCartAction.request(body, handleAddBookToCartSuccess));
    } else {
      const newCartsData = handleAddNewCartLocalStorage(
        cartsStorage,
        parseCartData({
          amount: 1,
          image,
          name,
          prePrice,
          price,
          _id,
          type,
        }),
      );
      if (newCartsData) dispatch(uiActions.setCartsStorage(newCartsData));
    }
  };

  const handleAddBookToCartSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Sản phẩm đã được thêm vào giỏ hàng');
    getCartsData();
  };

  const getCartsData = () => {
    dispatch(getListCartAction.request());
  };

  const handleBuyNow = () => {
    if (atk) {
      const body = { product: _id, amount: 1 };
      dispatch(addToCartAction.request(body, handleBuyBookSuccess));
    } else {
      showNotification(ETypeNotification.WARNING, 'Vui lòng đăng nhập để tiếp tục thực hiện hành động này');
    }
  };

  const handleBuyBookSuccess = (response) => {
    getCartsData();
    navigate(Paths.Checkout, {
      state: {
        checkedCartData: [
          {
            _id: response.data._id,
            amount: 1,
            productType: type,
            product: {
              _id,
              image,
              type,
              owner,
              name,
              price,
              prePrice,
              ...rest,
            },
          },
        ],
      },
    });
  };

  return (
    <div className={classNames('BookBlock', { 'flip-card': isFlipCard })}>
      <div className="BookBlock-image" onClick={handleClickBookBlock}>
        {isFlipCard ? (
          <>
            <div className="BookBlock-image-front">
              <img src={images[0]} alt="" />
            </div>
            <div className="BookBlock-image-back">
              <img src={images[1]} alt="" />
            </div>
          </>
        ) : (
          <img src={image} alt="" />
        )}
      </div>

      <div className="BookBlock-title" onClick={handleClickBookBlock}>
        {name}
      </div>
      {author?.name && <div className="BookBlock-author">{author?.name}</div>}
      {!owner && (
        <>
          <div className="BookBlock-price flex justify-center">
            {Boolean(prePrice) && <del>{formatMoneyVND({ amount: prePrice, showSuffix: true })}</del>}
            <span>{formatMoneyVND({ amount: price, showSuffix: true })}</span>
          </div>
          <div className="BookBlock-action flex justify-between">
            <Button
              size="large"
              type="primary"
              loading={addCartLoading}
              icon={<Icon name={EIconName.ShoppingBag} color={EIconColor.WHITE} />}
              onClick={handleAddBookToCart}
            />
            <Button
              size="large"
              className="outline-primary"
              title="Mua ngay"
              loading={addCartLoading}
              onClick={handleBuyNow}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BookBlock;
