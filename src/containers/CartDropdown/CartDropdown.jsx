import React from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import ImageBookDetail from '@/assets/images/image-book-1.png';
import BgSpecial from '@/assets/images/bg-special.png';
import Amount from '@/components/Amount';

import './CartDropdown.scss';

const CartDropdown = ({ onClose }) => {
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
        {[1, 2, 3].map((item) => (
          <div key={item} className="CartDropdown-list-item flex items-start">
            <div className="CartDropdown-list-item-checkbox">
              <Checkbox />
            </div>
            <div className="CartDropdown-list-item-book flex items-start">
              <div className="CartDropdown-list-item-book-image">
                <img src={ImageBookDetail} alt="" />
              </div>
              <div className="CartDropdown-list-item-book-info">
                <div className="CartDropdown-list-item-book-info-title">Tư Duy Tích Cực</div>
                <div className="CartDropdown-list-item-book-info-price">95.000đ</div>
                <div className="CartDropdown-list-item-book-info-actions">
                  <Amount />
                </div>
              </div>
            </div>
            <div className="CartDropdown-list-item-remove">
              <Button
                size="small"
                title="Xoá"
                reverse
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
            Tổng tiền hàng <span>1.200.000đ</span>
          </div>
        </div>
        <div className="CartDropdown-footer-item">
          <Button type="primary" title="Mua ngay" />
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
