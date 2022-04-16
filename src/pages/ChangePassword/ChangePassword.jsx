import React, { useState } from 'react';
import { Form } from 'antd';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { showNotification, validationRules } from '@/utils/functions';

import './ChangePassword.scss';
import { useDispatch, useSelector } from 'react-redux';
import { EAuthAction } from '@/redux/actions/auth/constants';
import { updatePasswordAction } from '@/redux/actions';
import { ETypeNotification } from '@/utils/constants';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [password, setPassword] = useState('');

  const updatePasswordLoading = useSelector((state) => state.loading[EAuthAction.UPDATE_PASSWORD]);

  const handleChangePassword = (passwordValue) => {
    setPassword(passwordValue);
  };

  const handerSubmit = (values) => {
    const { password, newPassword } = values;
    const body = {
      password,
      newPassword,
    };
    dispatch(updatePasswordAction.request(body, handleChangePasswordSuccess));
  };

  const handleChangePasswordSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Đổi mật khẩu thành công');
    form.resetFields();
  };

  return (
    <div className="ChangePassword flex flex-col items-center justify-center">
      <Form form={form} layout="vertical" className="ChangePassword-form style-form" onFinish={handerSubmit}>
        <div className="ChangePassword-form-title">Đổi mật khẩu</div>
        <Form.Item
          label="Mật khẩu hiện tại"
          name="password"
          rules={[validationRules.required(), validationRules.noSpaceKey(), validationRules.minLength()]}
        >
          <Input placeholder="Nhập mật khẩu hiện tại" size="large" type="password" onChange={handleChangePassword} />
        </Form.Item>
        <Form.Item
          label="Mật khẩu mới"
          name="newPassword"
          rules={[validationRules.required(), validationRules.noSpaceKey(), validationRules.minLength()]}
        >
          <Input placeholder="Nhập mật khẩu mới" size="large" type="password" onChange={handleChangePassword} />
        </Form.Item>
        <Form.Item
          label="Xác nhận mật khẩu mới"
          name="confirmPassword"
          rules={[
            validationRules.required(),
            validationRules.noSpaceKey(),
            validationRules.minLength(),
            validationRules.confirmPassword(password),
          ]}
        >
          <Input placeholder="Nhập lại mật khẩu mới" size="large" type="password" />
        </Form.Item>

        <Form.Item className="ChangePasswordForm-submit">
          <Button
            title="CẬP NHẬT"
            size="large"
            loading={updatePasswordLoading}
            htmlType="submit"
            uppercase
            type="primary"
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChangePassword;
