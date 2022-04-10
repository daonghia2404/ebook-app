import React, { useState } from 'react';
import { Form } from 'antd';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';

import './ChangePassword.scss';

const ChangePassword = () => {
  const [form] = Form.useForm();
  const [password, setPassword] = useState('');

  const handleChangePassword = (passwordValue) => {
    setPassword(passwordValue);
  };

  return (
    <div className="ChangePassword flex flex-col items-center justify-center">
      <Form form={form} layout="vertical" className="ChangePassword-form style-form">
        <div className="ChangePassword-form-title">Đổi mật khẩu</div>
        <Form.Item label="Mật khẩu hiện tại" name="oldPassword" rules={[validationRules.required()]}>
          <Input placeholder="Nhập mật khẩu hiện tại" size="large" type="password" onChange={handleChangePassword} />
        </Form.Item>
        <Form.Item label="Mật khẩu mới" name="password" rules={[validationRules.required()]}>
          <Input placeholder="Nhập mật khẩu mới" size="large" type="password" onChange={handleChangePassword} />
        </Form.Item>
        <Form.Item
          label="Xác nhận mật khẩu mới"
          name="confirmPassword"
          rules={[validationRules.required(), validationRules.confirmPassword(password)]}
        >
          <Input placeholder="Nhập lại mật khẩu mới" size="large" type="password" />
        </Form.Item>

        <Form.Item className="ChangePasswordForm-submit">
          <Button title="CẬP NHẬT" size="large" uppercase type="primary" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChangePassword;
