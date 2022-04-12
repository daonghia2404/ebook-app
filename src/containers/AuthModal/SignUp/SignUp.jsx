import React, { useState, useRef } from 'react';
import { Form } from 'antd';
import Input from '@/components/Input';
import { showNotification, validationRules } from '@/utils/functions';
import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { EAuthAction } from '@/redux/actions/auth/constants';
import { registerAction } from '@/redux/actions';

const SignUp = ({ onSignUpSuccess }) => {
  const [form] = Form.useForm();
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loadingSignUp = useSelector((state) => state.loading[EAuthAction.REGISTER]);
  const handleChangePassword = (passwordValue) => {
    setPassword(passwordValue);
  };
  const handerSubmit = (values) => {
    const { name, email, password, referCode } = values;
    const newObj = {
      name,
      email,
      password,
      referCode,
    };
    dispatch(registerAction.request(newObj, handleSignUpSuccess));
  };
  const handleSignUpSuccess = () => {
    showNotification('success', 'Đăng ký tài khoản thành công ! Vui Lòng kiểm tra Email');
    form.resetFields();
    onSignUpSuccess?.();
  };
  return (
    <Form layout="vertical" className="AuthModal-form style-form" onFinish={handerSubmit} form={form}>
      <Form.Item
        label="Tên của bạn"
        name="name"
        rules={[validationRules.required(), validationRules.minLength(undefined, 4)]}
      >
        <Input size="large" placeholder="Nhập tên..." />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[validationRules.required(), validationRules.email()]}>
        <Input size="large" placeholder="Nhập Email..." />
      </Form.Item>
      <Form.Item label="Mật khẩu" name="password" rules={[validationRules.required()]}>
        <Input size="large" placeholder="Nhập password..." type="password" onChange={handleChangePassword} />
      </Form.Item>
      <Form.Item
        label="Nhập lại mật khẩu"
        name="confirmPassword"
        rules={[validationRules.required(), validationRules.confirmPassword(password)]}
      >
        <Input size="large" type="password" />
      </Form.Item>
      <Form.Item label="ID giới thiệu" name="referCode">
        <Input size="large" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" loading={loadingSignUp} size="large" htmlType="submit" title="Đăng ký" />
      </Form.Item>
    </Form>
  );
};

export default SignUp;
