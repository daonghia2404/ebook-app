import React, { useEffect } from 'react';
import { Form, Rate } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@/components/Modal';
import BgSpecial from '@/assets/images/bg-special.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import OrdersList from '@/pages/Orders/OrdersList';
import { showNotification, validationRules } from '@/utils/functions';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';
import { postRateProductAction } from '@/redux/actions';
import { ETypeNotification } from '@/utils/constants';
import { ERateProductAction } from '@/redux/actions/rate/constants';

import './ReviewBookModal.scss';

const ReviewBookModal = ({ data, visible, onClose }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  console.log(data);

  const postRateProductLoading = useSelector((state) => state.loading[ERateProductAction.POST_RATE_PRODUCT]);

  const handleSubmit = (values) => {
    const body = {
      numberStar: values.numberStar || 1,
      content: values.content,
    };

    dispatch(postRateProductAction.request(data.product, body, handleRateProductSuccess));
  };

  const handleRateProductSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Đánh giá sản phẩm thành công');
    onClose?.();
  };

  useEffect(() => {
    if (!visible) form.resetFields();
  }, [visible]);

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

      <Form className="ReviewBookModal-form" form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="numberStar">
          <Rate defaultValue={1} />
        </Form.Item>
        <Form.Item name="content" rules={[validationRules.required()]}>
          <TextArea placeholder="Viết đánh giá" />
        </Form.Item>
        <Form.Item>
          <Button
            size="large"
            type="primary"
            title="Đánh giá"
            uppercase
            htmlType="submit"
            loading={postRateProductLoading}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ReviewBookModal;
