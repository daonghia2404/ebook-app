import React, { useState } from 'react';
import { Form } from 'antd';

import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';
import Button from '@/components/Button';

const SignUp = () => {
  const [form] = Form.useForm();
  const [password, setPassword] = useState('');

  const handleChangePassword = (passwordValue) => {
    setPassword(passwordValue);
  };

  return (
    <Form layout="vertical" className="AuthModal-form style-form" form={form}>
      <Form.Item
        label="Tên của bạn"
        name="name"
        rules={[validationRules.required(), validationRules.minLength(undefined, 4)]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[validationRules.required(), validationRules.email()]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Mật khẩu" name="password" rules={[validationRules.required()]} onChange={handleChangePassword}>
        <Input size="large" type="password" />
      </Form.Item>
      <Form.Item
        label="Nhập lại mật khẩu"
        name="password"
        rules={[validationRules.required(), validationRules.confirmPassword(password)]}
      >
        <Input size="large" type="password" />
      </Form.Item>
      <Form.Item label="ID giới thiệu" name="referCode">
        <Input size="large" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" size="large" htmlType="submit" title="Đăng ký" />
      </Form.Item>
    </Form>
  );
};

export default SignUp;
