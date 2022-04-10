import React from 'react';
import { Form, Rate } from 'antd';

import Modal from '@/components/Modal';
import BgSpecial from '@/assets/images/bg-special.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import OrdersList from '@/pages/Orders/OrdersList';
import { validationRules } from '@/utils/functions';

import './ReviewBookModal.scss';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';

const ReviewBookModal = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      maxWidth="63rem"
      radius
      closeable={false}
      visible={visible}
      onClose={onClose}
      className="ReviewBookModal"
      wrapClassName="ReviewBookModal-wrapper"
    >
      <img className="ReviewBookModal-bg special" src={BgSpecial} alt="" />
      <div className="ReviewBookModal-header flex items-center justify-center">
        <div className="ReviewBookModal-back" onClick={onClose}>
          <Icon name={EIconName.ArrowLeft} color={EIconColor.BLUE_ZODIAC} />
        </div>
        <div className="ReviewBookModal-title">Đánh Giá</div>
      </div>

      <OrdersList />

      <Form className="ReviewBookModal-form" form={form} layout="vertical">
        <Form.Item name="stars">
          <Rate allowHalf />
        </Form.Item>
        <Form.Item name="content" rules={[validationRules.required()]}>
          <TextArea placeholder="Viết đánh giá" />
        </Form.Item>
        <Form.Item>
          <Button size="large" type="primary" title="Cập nhật" uppercase htmlType="submit" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ReviewBookModal;
