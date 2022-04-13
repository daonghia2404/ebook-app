import React from 'react';

import { Form } from 'antd';
import { showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { EAuthAction } from '@/redux/actions/auth/constants';
import { vertifyForgotAction } from '@/redux/actions';
import { EKeyStepForgotPasswordModal } from '../ForgotPasswordModal.enums';
import { ETypeNotification } from '@/utils/constants';

const VetifyAccount = ({ onShowForgotPasswordModal }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading[EAuthAction.VERTIFY_FORGOT_PASSWORD]);
  const token = useSelector((state) => state.authState.tokenForgot);
  const handleSubmit = (values) => {
    handleForgotPasswordSuccess();
    dispatch(vertifyForgotAction.request({ ...values }, token, handleForgotPasswordSuccess));
  };
  const handleForgotPasswordSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Xác nhận thành công ! Hãy đổi mật khẩu của bạn !');
    onShowForgotPasswordModal?.(EKeyStepForgotPasswordModal.CHANGE_PASSWORD);
  };

  return (
    <>
      <div className="ForgotPasswordModal-title">Xác thực tài khoản</div>
      <div className="ForgotPasswordModal-description">
        Vui lòng nhập mã OTP được gửi đến email:
        {/* <br />
        <span>huyentruong123@gmail.com</span> */}
      </div>
      <Form form={form} layout="vertical" className="ForgotPasswordModal-form style-form" onFinish={handleSubmit}>
        <Form.Item name="otp" label="Mã xác thực" rules={[validationRules.required()]}>
          <Input size="large" />
        </Form.Item>
        <Form.Item>
          <Button size="large" loading={loading} title="Xác nhận" type="primary" uppercase htmlType="submit" />
        </Form.Item>

        <div className="ForgotPasswordModal-resend">
          Chưa nhận được mã? <span>Gửi lại</span>
        </div>
      </Form>
    </>
  );
};

export default VetifyAccount;
