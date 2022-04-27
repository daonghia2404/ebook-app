import React, { useRef } from 'react';
import { Form } from 'antd';
import Input from '@/components/Input';
import { showNotification, validationRules } from '@/utils/functions';
import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getListCartAction, getNoticeAction, getProfileAction, loginAction } from '@/redux/actions';
import { EAuthAction } from '@/redux/actions/auth/constants';
import { EKeyStepForgotPasswordModal } from '@/containers/ForgotPasswordModal/ForgotPasswordModal.enums';
import { ETypeNotification, ETypePage } from '@/utils/constants';

const SingIn = ({ onClickForgotPassword, onSignInSuccess }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const loadingSignIn = useSelector((state) => state.loading[EAuthAction.LOGIN]);

  const handerSubmit = (values) => {
    const body = { ...values, email: values?.email?.toLowerCase() };
    dispatch(loginAction.request(body, handleSignInSuccess));
  };
  const handleSignInSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Đăng nhập thành công !');
    onSignInSuccess?.();
    form.resetFields();
  };

  return (
    <Form layout="vertical" className="AuthModal-form style-form" form={form} onFinish={handerSubmit}>
      <Form.Item label="Email" name="email" rules={[validationRules.required(), validationRules.email()]}>
        <Input size="large" placeholder="Nhập email của bạn" />
      </Form.Item>
      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[validationRules.required(), validationRules.noSpaceKey(), validationRules.minLength()]}
      >
        <Input size="large" placeholder="Nhập mật khẩu" type="password" />
      </Form.Item>
      <Form.Item>
        <div
          className="AuthModal-forgot-password"
          onClick={() => onClickForgotPassword(EKeyStepForgotPasswordModal.FIND_ACCOUNT)}
        >
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
