import React from 'react';

import { Form } from 'antd';
import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';

const VetifyAccount = ({ onSuccess }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
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
        <Form.Item name="email" label="Mã xác thực" rules={[validationRules.required()]}>
          <Input size="large" />
        </Form.Item>
        <Form.Item>
          <Button size="large" title="Xác nhận" type="primary" uppercase htmlType="submit" />
        </Form.Item>

        <div className="ForgotPasswordModal-resend">
          Chưa nhận được mã? <span>Gửi lại</span>
        </div>
      </Form>
    </>
  );
};

export default VetifyAccount;
