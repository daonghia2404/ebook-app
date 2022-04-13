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

const FindAccount = ({ onShowForgotPasswordModal }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading[EAuthAction.FORGOT_PASSWORD]);
  const handleSubmit = (values) => {
    dispatch(forgotPasswordAction.request({ ...values }, handleForgotPasswordSuccess));
  };
  const handleForgotPasswordSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Xác nhận mã OTP đã được gửi vào Email của bạn !');
    onShowForgotPasswordModal?.(EKeyStepForgotPasswordModal.VERTIFY_FORGOT);
  };
  return (
    <>
      <div className="ForgotPasswordModal-title">Quên mật khẩu</div>
      <div className="ForgotPasswordModal-description">Vui lòng nhập email đăng ký tài khoản</div>
      <Form form={form} layout="vertical" className="ForgotPasswordModal-form style-form" onFinish={handleSubmit}>
        <Form.Item name="email" label="Email" rules={[validationRules.required(), validationRules.email()]}>
          <Input size="large" />
        </Form.Item>
        <Form.Item>
          <Button size="large" loading={loading} title="Tiếp theo" type="primary" uppercase htmlType="submit" />
        </Form.Item>
      </Form>
    </>
  );
};

export default FindAccount;
