import React from 'react';

import { Form } from 'antd';
import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';

const FindAccount = ({ onSuccess }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    onSuccess?.();
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
          <Button size="large" title="Tiếp theo" type="primary" uppercase htmlType="submit" />
        </Form.Item>
      </Form>
    </>
  );
};

export default FindAccount;
