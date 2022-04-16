import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { navigate } from '@reach/router';
import { Paths } from '@/pages/routers';
import { ETypeBook } from '@/common/static';
import { formatMoneyVND, showNotification } from '@/utils/functions';
import AuthHelpers from '@/services/auth-helpers';
import { EProductAction } from '@/redux/actions/products/constants';
import { addToCartAction, getListCartAction } from '@/redux/actions';
import { ETypeNotification } from '@/utils/constants';

import './BookBlock.scss';

const BookBlock = ({ image, type, owner, name, price, prePrice, _id, ...rest }) => {
  const dispatch = useDispatch();
  const atk = AuthHelpers.getAccessToken();

  const addCartLoading = useSelector((state) => state.loading[EProductAction.ADD_TO_CART_PRODUCT]);

  const handleClickBookBlock = () => {
    if (owner) {
      navigate(Paths.MyBookDetail(_id));
    } else {
      navigate(Paths.BookDetail(_id));
    }
  };

  const handleAddBookToCart = () => {
    if (atk) {
      const body = { product: _id, amount: 1 };
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
    <div className="BookBlock">
      <div className="BookBlock-image" onClick={handleClickBookBlock}>
        <img src={image} alt="" />
      </div>
      <div className="BookBlock-title" onClick={handleClickBookBlock}>
        {name}
      </div>
      {!owner && (
        <>
          <div className="BookBlock-price flex justify-center">
            <span>{formatMoneyVND({ amount: price, showSuffix: true })}</span>
            {prePrice && <del>{formatMoneyVND({ amount: prePrice, showSuffix: true })}</del>}
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
