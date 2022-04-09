import React from 'react';
import { Form } from 'antd';

import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';
import Button from '@/components/Button';

const SingIn = ({ onClickForgotPassword }) => {
  const [form] = Form.useForm();

  return (
    <Form layout="vertical" className="AuthModal-form style-form" form={form}>
      <Form.Item label="Email" name="email" rules={[validationRules.required(), validationRules.email()]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Mật khẩu" name="password" rules={[validationRules.required()]}>
        <Input size="large" type="password" />
      </Form.Item>
      <Form.Item>
        <div className="AuthModal-forgot-password" onClick={onClickForgotPassword}>
          Quên mật khẩu
        </div>
      </Form.Item>
      <Form.Item>
        <Button type="primary" size="large" htmlType="submit" title="Đăng nhập" />
      </Form.Item>
    </Form>
  );
};

export default SingIn;
