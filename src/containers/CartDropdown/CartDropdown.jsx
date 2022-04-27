import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import BgSpecial from '@/assets/images/bg-special.png';
import Amount from '@/components/Amount';
import { getListCartAction, updateCartAction, deleteCartAction, uiActions } from '@/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { caculateTotal, formatMoneyVND, showNotification } from '@/utils/functions';
import { Paths } from '@/pages/routers';
import { ETypeNotification } from '@/utils/constants';
import { EProductAction } from '@/redux/actions/products/constants';
import Loading from '@/containers/Loading/Loading';
import Empty from '@/components/Empty/Empty';
import { ETypeBook } from '@/common/static';
import AuthHelpers from '@/services/auth-helpers';

import './CartDropdown.scss';
import { handleChangeAmountCartLocalStorage, handleDeleteCartLocalStorage } from '@/utils/cart';

const CartDropdown = ({ onClose }) => {
  const dispatch = useDispatch();
  const atk = AuthHelpers.getAccessToken();

  const listCart = useSelector((state) => state.productState?.carts) || [];
  const listCartStorage = useSelector((state) => state.uiState?.cartsStorage) || [];

  const getListCartLoading = useSelector((state) => state.loading[EProductAction.LIST_CART_PRODUCT]);
  const updateListCartLoading = useSelector((state) => state.loading[EProductAction.UPDATE_CART_PRODUCT]);
  const deleteListCartLoading = useSelector((state) => state.loading[EProductAction.DELETE_CART_PRODUCT]);

  const dataCarts = atk ? listCart : listCartStorage;

  const [checkedCartData, setCheckedCartData] = useState([]);

  const isEmpty = dataCarts?.length === 0;

  const getCartsData = () => {
    if (atk) dispatch(getListCartAction.request());
  };

  const handleDeleteCart = (item) => {
    const { _id } = item;
    if (atk) {
      dispatch(deleteCartAction.request(_id, handleDeleteCartSuccess));
    } else {
      const newCartsData = handleDeleteCartLocalStorage(listCartStorage, _id);
      dispatch(uiActions.setCartsStorage(newCartsData));
    }
  };

  const handleDeleteCartSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Xóa sản phẩm khỏi giỏ hàng thành công');
    getCartsData();
  };

  const handleAmountChange = (amount, item) => {
    if (atk) {
      dispatch(updateCartAction.request(item._id, { amount }, handleUpdateCartSuccess));
    } else {
      const newCartsData = handleChangeAmountCartLocalStorage(listCartStorage, item._id, amount);
      dispatch(uiActions.setCartsStorage(newCartsData));
    }
  };

  const handleUpdateCartSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Cập nhật giỏ hàng thành công');
    getCartsData();
  };

  const handleCheckAllCart = (checked) => {
    setCheckedCartData(checked ? dataCarts : []);
  };

  const handleCheckCart = (checked, data) => {
    if (checked) {
      setCheckedCartData([...checkedCartData, data]);
    } else {
      setCheckedCartData(checkedCartData.filter((item) => item._id !== data._id));
    }
  };

  const handleCheckout = () => {
    if (atk) {
      const data = checkedCartData;
      navigate(Paths.Checkout, {
        state: {
          checkedCartData: data,
        },
      });
      onClose?.();
    } else {
      showNotification(ETypeNotification.WARNING, 'Vui lòng đăng nhập để tiếp tục thực hiện hành động này');
    }
  };

  const isCheckedCart = (data) => {
    return checkedCartData.find((item) => item._id === data._id);
  };

  return (
    <div className="CartDropdown">
      <img className="CartDropdown-bg" src={BgSpecial} alt="" />
      {getListCartLoading && <Loading absolute />}
      <div className="CartDropdown-header">
        <div className="CartDropdown-title">Giỏ Hàng</div>
        <div className="CartDropdown-close" onClick={onClose}>
          <Icon name={EIconName.Close} color={EIconColor.BLUE_ZODIAC} />
        </div>
      </div>

      {isEmpty ? (
        <Empty />
      ) : (
        <div className="CartDropdown-list">
          {dataCarts?.map((item) => (
            <div key={item} className="CartDropdown-list-item flex items-start">
              <div className="CartDropdown-list-item-checkbox">
                <Checkbox value={isCheckedCart(item)} onChange={(checked) => handleCheckCart(checked, item)} />
              </div>
              <div className="CartDropdown-list-item-book flex items-start">
                <div className="CartDropdown-list-item-book-image">
                  <img src={item.product?.image} alt="" />
                </div>
                <div className="CartDropdown-list-item-book-info">
                  <div className="CartDropdown-list-item-book-info-title">
                    {item.product?.name} ({item.productType == ETypeBook.AUDIO_BOOK ? 'Ebook' : 'Sách giấy'})
                  </div>
                  <div className="CartDropdown-list-item-book-info-price">
                    {formatMoneyVND({ amount: item.product?.price, showSuffix: true })}
                  </div>
                  <div className="CartDropdown-list-item-book-info-actions">
                    <Amount
                      value={item.amount}
                      disabled={updateListCartLoading}
                      onChange={(value) => handleAmountChange(value, item)}
                    />
                  </div>
                </div>
              </div>
              <div className="CartDropdown-list-item-remove">
                <Button
                  size="small"
                  title="Xoá"
                  reverse
                  onClick={() => handleDeleteCart(item)}
                  danger
                  loading={deleteListCartLoading}
                  icon={<Icon name={EIconName.Trash} color={EIconColor.WHITE} />}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="CartDropdown-footer flex justify-between items-center">
        <div className="CartDropdown-footer-item">
          <Checkbox
            value={checkedCartData.length === dataCarts?.length}
            label="Tất cả"
            disabled={isEmpty}
            onChange={handleCheckAllCart}
          />
          <div className="CartDropdown-footer-total">
            Tổng tiền hàng{' '}
            <span>{formatMoneyVND({ amount: caculateTotal(checkedCartData) || 0, showSuffix: true })}</span>
          </div>
        </div>
        <div className="CartDropdown-footer-item">
          <Button type="primary" title="Mua ngay" disabled={checkedCartData.length === 0} onClick={handleCheckout} />
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
