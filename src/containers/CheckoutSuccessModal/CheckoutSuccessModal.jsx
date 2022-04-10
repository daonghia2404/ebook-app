import React, { useEffect, useState } from 'react';

import Modal from '@/components/Modal';
import BgSpecial from '@/assets/images/bg-special.png';
import ImageCheckoutSuccess from '@/assets/images/image-checkout-success.png';

import './CheckoutSuccessModal.scss';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import { Form } from 'antd';
import Input from '@/components/Input';

const CheckoutSuccessModal = ({ visible, onClose }) => {
  return (
    <Modal
      maxWidth="63rem"
      radius
      closeable={false}
      visible={visible}
      onClose={onClose}
      className="CheckoutSuccessModal"
      wrapClassName="CheckoutSuccessModal-wrapper"
    >
      <img className="CheckoutSuccessModal-bg special" src={BgSpecial} alt="" />
      <div className="CheckoutSuccessModal-header flex items-center justify-center">
        <div className="CheckoutSuccessModal-title">ĐẶT HÀNG THÀNH CÔNG</div>
      </div>

      <div className="CheckoutSuccessModal-image">
        <img src={ImageCheckoutSuccess} alt="" />
      </div>

      <Form className="CheckoutSuccessModal-form style-form" layout="vertical">
        <Form.Item name="code" label="Mã kích hoạt sách">
          <Input placeholder="Nhập mã kích hoạt sách" size="large" />
        </Form.Item>
        <Form.Item name="reCode" label="Nhập lại kích hoạt sách">
          <Input placeholder="Nhập lại mã kích hoạt sách" size="large" />
        </Form.Item>
      </Form>

      <div className="CheckoutSuccessModal-submit">
        <Button size="large" type="primary" title="VỀ TRANG CHỦ" uppercase />
      </div>
    </Modal>
  );
};

export default CheckoutSuccessModal;
