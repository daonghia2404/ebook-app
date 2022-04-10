import React, { useEffect, useState } from 'react';

import Modal from '@/components/Modal';
import BgSpecial from '@/assets/images/bg-special.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';

import './ShippingTypeModal.scss';

const ShippingTypeModal = ({ visible, onClose }) => {
  return (
    <Modal
      maxWidth="63rem"
      radius
      closeable={false}
      visible={visible}
      onClose={onClose}
      className="ShippingTypeModal"
      wrapClassName="ShippingTypeModal-wrapper"
    >
      <img className="ShippingTypeModal-bg special" src={BgSpecial} alt="" />
      <div className="ShippingTypeModal-header flex items-center justify-center">
        <div className="ShippingTypeModal-back" onClick={onClose}>
          <Icon name={EIconName.ArrowLeft} color={EIconColor.BLUE_ZODIAC} />
        </div>
        <div className="ShippingTypeModal-title">Hình thức giao hàng</div>
      </div>

      <div className="ShippingTypeModal-list">
        <div className="ShippingTypeModal-list-item">
          <div className="ShippingTypeModal-list-item-checked" />
          <div className="ShippingTypeModal-list-item-title">
            Giao nhanh <span>16.000 vnđ</span>
          </div>
          <div className="ShippingTypeModal-list-item-description">Nhận hàng vào 11/2 - 23/2/2022</div>
          <div className="ShippingTypeModal-list-item-description">
            (Nhanh tay vào mã khuyến mãi để có mã giao hàng miễn phí nhé)
          </div>
        </div>

        <div className="ShippingTypeModal-list-item">
          <div className="ShippingTypeModal-list-item-title">
            Giao thường <span>26.000 vnđ</span>
          </div>
          <div className="ShippingTypeModal-list-item-description">Nhận hàng vào 11/2 - 23/2/2022</div>
          <div className="ShippingTypeModal-list-item-description">
            (Nhanh tay vào mã khuyến mãi để có mã giao hàng miễn phí nhé)
          </div>
        </div>
      </div>

      <div className="ShippingTypeModal-submit">
        <Button size="large" type="primary" title="ĐỒNG Ý" />
      </div>
    </Modal>
  );
};

export default ShippingTypeModal;
