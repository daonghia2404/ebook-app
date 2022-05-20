import React from 'react';

import { Form } from 'antd';
import { showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { EKeyStepForgotPasswordModal } from '../ForgotPasswordModal.enums';
import { useDispatch, useSelector } from 'react-redux';
import { EAuthAction } from '@/redux/actions/auth/constants';
import { forgotPasswordAction } from '@/redux/actions';
import { ETypeNotification } from '@/utils/constants';

const FindAccount = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const loading = useSelector((state) => state.loading[EAuthAction.FORGOT_PASSWORD]);

  const handleSubmit = (values) => {
    const body = { ...values, email: values?.email?.toLowerCase() };
    dispatch(forgotPasswordAction.request(body, (response) => handleForgotPasswordSuccess(response, values)));
  };

  const handleForgotPasswordSuccess = (response, values) => {
    showNotification(ETypeNotification.SUCCESS, 'Xác nhận mã OTP đã được gửi vào email của bạn !');
    onSubmit?.({
      token: response.data.token,
      email: values.email,
    });
  };

  return (
    <>
      <div className="ForgotPasswordModal-title">Quên mật khẩu</div>
      <div className="ForgotPasswordModal-description">Vui lòng nhập email đăng ký tài khoản</div>
      <Form form={form} layout="vertical" className="ForgotPasswordModal-form style-form" onFinish={handleSubmit}>
        <Form.Item name="email" label="Email" rules={[validationRules.required(), validationRules.email()]}>
          <Input size="large" placeholder="Nhập email" />
        </Form.Item>
        <Form.Item>
          <Button size="large" loading={loading} title="Tiếp theo" type="primary" uppercase htmlType="submit" />
        </Form.Item>
      </Form>
    </>
  );
};

export default FindAccount;
