import React, { useState } from 'react';

import { Form } from 'antd';
import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';

const ChangePassword = ({ onSuccess }) => {
  const [form] = Form.useForm();
  const [password, setPassword] = useState('');

  const handleChangePassword = (passwordValue) => {
    setPassword(passwordValue);
  };

  const handleSubmit = () => {
    onSuccess?.();
  };

  return (
    <>
      <div className="ForgotPasswordModal-title">Cập nhật mật khẩu</div>
      <div className="ForgotPasswordModal-description">Nhập mật khẩu mới để đăng nhập tài khoản</div>
      <Form form={form} layout="vertical" className="ForgotPasswordModal-form style-form" onFinish={handleSubmit}>
        <Form.Item label="Mật khẩu" name="password" rules={[validationRules.required()]}>
          <Input size="large" type="password" onChange={handleChangePassword} />
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu"
          name="confirmPassword"
          rules={[validationRules.required(), validationRules.confirmPassword(password)]}
        >
          <Input size="large" type="password" />
        </Form.Item>
        <Form.Item>
          <Button size="large" title="Tiếp theo" type="primary" uppercase htmlType="submit" />
        </Form.Item>
      </Form>
    </>
  );
};

export default ChangePassword;
