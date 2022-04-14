import React, { useState } from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import ImageBookDetail from '@/assets/images/image-book-1.png';
import BgSpecial from '@/assets/images/bg-special.png';
import Amount from '@/components/Amount';

import './CartDropdown.scss';
import { getListCartAction, updateCartAction, deleteCartAction } from '@/redux/actions';
import { useDispatch } from 'react-redux';
import { caculateTotal, showNotification } from '@/utils/functions';
import { Paths } from '@/pages/routers';
import { ETypeNotification } from '@/utils/constants';

const CartDropdown = ({ onClose, data }) => {
  const dispatch = useDispatch();
  const getListCart = () => {
    dispatch(getListCartAction.request());
  };
  const deleteCart = (item) => {
    const { _id } = item;
    dispatch(deleteCartAction.request(_id, handlerDeleteSuccess));
  };
  const handlerDeleteSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Xóa sản phẩm thành công');
  };
  return (
    <div className="CartDropdown">
      <img className="CartDropdown-bg" src={BgSpecial} alt="" />
      <div className="CartDropdown-header">
        <div className="CartDropdown-title">Giỏ Hàng</div>
        <div className="CartDropdown-close" onClick={onClose}>
          <Icon name={EIconName.Close} color={EIconColor.BLUE_ZODIAC} />
        </div>
      </div>

      <div className="CartDropdown-list">
        {data &&
          data.map((item) => (
            <div key={item} className="CartDropdown-list-item flex items-start">
              <div className="CartDropdown-list-item-checkbox">
                <Checkbox />
              </div>
              <div className="CartDropdown-list-item-book flex items-start">
                <div className="CartDropdown-list-item-book-image">
                  <img src={item.product.image} alt="" />
                </div>
                <div className="CartDropdown-list-item-book-info">
                  <div className="CartDropdown-list-item-book-info-title">
                    {item.product.name} ({item.productType == 'AUDIO_BOOK' ? 'Sách nói' : 'Sách viết'})
                  </div>
                  <div className="CartDropdown-list-item-book-info-price">{item.product.price}đ</div>
                  <div className="CartDropdown-list-item-book-info-actions">
                    <Amount value={item.amount} />
                  </div>
                </div>
              </div>
              <div className="CartDropdown-list-item-remove">
                <Button
                  size="small"
                  title="Xoá"
                  reverse
                  onClick={() => deleteCart(item)}
                  danger
                  icon={<Icon name={EIconName.Trash} color={EIconColor.WHITE} />}
                />
              </div>
            </div>
          ))}
      </div>

      <div className="CartDropdown-footer flex justify-between items-center">
        <div className="CartDropdown-footer-item">
          <Checkbox value label="Tất cả" />
          <div className="CartDropdown-footer-total">
            Tổng tiền hàng <span>{caculateTotal(data)}đ</span>
          </div>
        </div>
        <div className="CartDropdown-footer-item">
          <Button type="primary" title="Mua ngay" link={Paths.Checkout} />
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
