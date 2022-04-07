import React from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import { loginAction } from '@/redux/actions';
import { LayoutPaths } from '@/pages/routers';
import { showNotification, validationRules } from '@/utils/functions';
import { ETypeNotification } from '@/utils/constants';
import { EAuthAction } from '@/redux/actions/auth/constants';

const Login = () => {
  const dispatch = useDispatch();
  const loadingLogin = useSelector((state) => state.loading[EAuthAction.LOGIN]);

  const handleSubmit = (values) => {
    const body = {
      username: values.username,
      password: values.password,
    };

    dispatch(loginAction.request(body, handleLoginSuccess));
  };

  const handleLoginSuccess = () => {
    navigate(LayoutPaths.Admin);
    showNotification(ETypeNotification.SUCCESS, 'Login Successfully');
  };

  return (
    <div className="Login" style={{ maxWidth: 520, margin: 'auto' }}>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Username" name="username" required rules={[validationRules.required()]}>
          <Input placeholder="Enter username" />
        </Form.Item>
        <Form.Item label="Password" name="password" required rules={[validationRules.required()]}>
          <Input type="password" placeholder="Enter password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={loadingLogin}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
