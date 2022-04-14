import React from 'react';

import { Form } from 'antd';
import { showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { EAuthAction } from '@/redux/actions/auth/constants';
import { vertifyOtpAction } from '@/redux/actions';
import { ETypeNotification } from '@/utils/constants';

const VetifyAccount = ({ onSuccess }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const loadingVertify = useSelector((state) => state.loading[EAuthAction.VERTIFY_OTP]);
  const tokenUser = useSelector((state) => state.authState.token);
  const handleSubmit = (values) => {
    dispatch(vertifyOtpAction.request({ ...values }, tokenUser, handleVertifySuccess));
  };
  const handleVertifySuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Kích hoạt tài khoản thành công ! Vui lòng đăng nhập');
    onSuccess?.();
  };

  return (
    <>
      <div className="ForgotPasswordModal-title">Xác thực tài khoản</div>
      <div className="ForgotPasswordModal-description">
        Vui lòng nhập mã OTP được gửi đến email:
        <br />
        <span>huyentruong123@gmail.com</span>
      </div>
      <Form form={form} layout="vertical" className="ForgotPasswordModal-form style-form" onFinish={handleSubmit}>
        <Form.Item name="otp" label="Mã xác thực" rules={[validationRules.required()]}>
          <Input size="large" />
        </Form.Item>
        <Form.Item>
          <Button size="large" loading={loadingVertify} title="Xác nhận" type="primary" uppercase htmlType="submit" />
        </Form.Item>

        <div className="ForgotPasswordModal-resend">
          Chưa nhận được mã? <span>Gửi lại</span>
        </div>
      </Form>
    </>
  );
};

export default VetifyAccount;
