import React, { useState, useRef } from 'react';
import { Form } from 'antd';
import Input from '@/components/Input';
import { showNotification, validationRules } from '@/utils/functions';
import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { EAuthAction } from '@/redux/actions/auth/constants';
import { registerAction } from '@/redux/actions';

const SignUp = ({ onSignUpSuccess }) => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const [password, setPassword] = useState('');
  const loadingSignUp = useSelector((state) => state.loading[EAuthAction.REGISTER]);

  const handleChangePassword = (passwordValue) => {
    setPassword(passwordValue);
  };

  const handerSubmit = (values) => {
    const { name, email, password, referCode } = values;
    const body = {
      name,
      email,
      password,
      referCode,
    };
    dispatch(registerAction.request(body, (response) => handleSignUpSuccess(response, values)));
  };

  const handleSignUpSuccess = (response, values) => {
    onSignUpSuccess?.({
      token: response.data.token,
      email: values.email,
    });
    form.resetFields();
  };

  return (
    <Form layout="vertical" className="AuthModal-form style-form" onFinish={handerSubmit} form={form}>
      <Form.Item
        label="Tên của bạn"
        name="name"
        rules={[
          validationRules.required(),
          validationRules.noSpaceKey(),
          validationRules.minLength(6),
          validationRules.maxLength(),
          validationRules.noSpecialKey(),
        ]}
      >
        <Input size="large" placeholder="Nhập tên" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[validationRules.required(), validationRules.email(), validationRules.maxLength()]}
      >
        <Input size="large" placeholder="Nhập email" />
      </Form.Item>
      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[
          validationRules.required(),
          validationRules.noSpaceKey(),
          validationRules.minLength(),
          validationRules.maxLength(),
        ]}
      >
        <Input size="large" placeholder="Nhập mật khẩu" type="password" onChange={handleChangePassword} />
      </Form.Item>
      <Form.Item
        label="Nhập lại mật khẩu"
        name="confirmPassword"
        rules={[
          validationRules.required(),
          validationRules.noSpaceKey(),
          validationRules.minLength(),
          validationRules.confirmPassword(password),
          validationRules.maxLength(),
        ]}
      >
        <Input size="large" type="password" placeholder="Nhập lại password" />
      </Form.Item>
      <Form.Item label="ID giới thiệu" name="referCode" rules={[validationRules.noSpaceKey()]}>
        <Input size="large" placeholder="Nhập mã giới thiệu" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" loading={loadingSignUp} size="large" htmlType="submit" title="Đăng ký" />
      </Form.Item>
    </Form>
  );
};

export default SignUp;
