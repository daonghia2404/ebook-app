import React, { useRef } from 'react';
import { Form } from 'antd';
import Input from '@/components/Input';
import { showNotification, validationRules } from '@/utils/functions';
import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '@/redux/actions';
import { EAuthAction } from '@/redux/actions/auth/constants';

const SingIn = ({ onClickForgotPassword, onSignInSuccess }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const loadingSignIn = useSelector((state) => state.loading[EAuthAction.LOGIN]);
  const formRef = useRef();
  const handerSubmit = (values) => {
    dispatch(loginAction.request({ ...values }, handleSignInSuccess));
  };
  const handleSignInSuccess = () => {
    showNotification('success', 'Đăng nhập thành công !');
    onSignInSuccess?.();
  };
  return (
    <Form layout="vertical" className="AuthModal-form style-form" form={form} onFinish={handerSubmit}>
      <Form.Item label="Email" name="email" rules={[validationRules.required(), validationRules.email()]}>
        <Input size="large" placeholder="Nhập Email của bạn..." />
      </Form.Item>
      <Form.Item label="Mật khẩu" name="password" rules={[validationRules.required()]}>
        <Input size="large" placeholder="Nhập password..." type="password" />
      </Form.Item>
      <Form.Item>
        <div className="AuthModal-forgot-password" onClick={onClickForgotPassword}>
          Quên mật khẩu
        </div>
      </Form.Item>
      <Form.Item>
        <Button type="primary" loading={loadingSignIn} size="large" htmlType="submit" title="Đăng nhập" />
      </Form.Item>
    </Form>
  );
};

export default SingIn;
