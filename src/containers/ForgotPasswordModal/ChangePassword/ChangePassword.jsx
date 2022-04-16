import React, { useState } from 'react';

import { Form } from 'antd';
import { showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { EAuthAction } from '@/redux/actions/auth/constants';
import { resetPasswordAction } from '@/redux/actions';
import { ETypeNotification } from '@/utils/constants';

const ChangePassword = ({ onSuccess }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [password, setPassword] = useState('');

  const vetifyForgotLoading = useSelector((state) => state.loading[EAuthAction.RESET_PASSWORD]);

  const handleChangePassword = (passwordValue) => {
    setPassword(passwordValue);
  };

  const handleSubmit = (values) => {
    const body = {
      password: values.password,
      newPassword: values.newPassword,
    };

    dispatch(resetPasswordAction.request(body, handleResetPasswordSuccess));
  };

  const handleResetPasswordSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Đổi mật khẩu thành công. Vui lòng đăng nhập');
    onSuccess?.();
  };

  return (
    <>
      <div className="ForgotPasswordModal-title">Cập nhật mật khẩu</div>
      <div className="ForgotPasswordModal-description">Nhập mật khẩu mới để đăng nhập tài khoản</div>
      <Form form={form} layout="vertical" className="ForgotPasswordModal-form style-form" onFinish={handleSubmit}>
        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[validationRules.required(), validationRules.noSpaceKey(), validationRules.minLength()]}
        >
          <Input size="large" type="password" onChange={handleChangePassword} />
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu"
          name="confirmPassword"
          rules={[
            validationRules.required(),
            validationRules.noSpaceKey(),
            validationRules.minLength(),
            validationRules.confirmPassword(password),
          ]}
        >
          <Input size="large" type="password" />
        </Form.Item>
        <Form.Item>
          <Button
            size="large"
            title="Tiếp theo"
            type="primary"
            uppercase
            htmlType="submit"
            loading={vetifyForgotLoading}
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default ChangePassword;
