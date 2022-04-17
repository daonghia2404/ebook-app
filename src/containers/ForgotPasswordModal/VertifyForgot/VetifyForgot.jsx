import React, { useState } from 'react';
import classNames from 'classnames';

import { Form } from 'antd';
import { showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { EAuthAction } from '@/redux/actions/auth/constants';
import { resendForgotOtpAction, vertifyForgotAction } from '@/redux/actions';
import { EKeyStepForgotPasswordModal } from '@/containers/ForgotPasswordModal/ForgotPasswordModal.enums';
import CountdownTime from '@/components/CountdownTime';
import { ETypeNotification } from '@/utils/constants';

const VetifyForgot = ({ onSuccess, data }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [isAvaiableResend, setIsAvaiableResend] = useState(false);

  const vetifyForgotLoading = useSelector((state) => state.loading[EAuthAction.VERTIFY_FORGOT_PASSWORD]);
  const resendLoading = useSelector((state) => state.loading[EAuthAction.RESEND_FORGOT_OTP]);

  const handleSubmit = (values) => {
    dispatch(vertifyForgotAction.request({ ...values }, data.token, handleForgotPasswordSuccess));
  };

  const handleFinishCountdown = () => {
    setIsAvaiableResend(true);
  };

  const handleClickResend = () => {
    if (isAvaiableResend && !resendLoading) {
      dispatch(resendForgotOtpAction.request(data.token, handleResendOtpSuccess));
    }
  };

  const handleResendOtpSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Gửi lại mã xác thực thành công. Vui lòng kiểm tra hộp thư của bạn');
    setIsAvaiableResend(false);
    onSuccess?.();
  };

  const handleForgotPasswordSuccess = (response) => {
    onSuccess?.({ token: response.data.token });
  };

  return (
    <>
      <div className="ForgotPasswordModal-title">Xác thực tài khoản</div>
      <div className="ForgotPasswordModal-description">
        Vui lòng nhập mã OTP được gửi đến email:
        <br />
        <span>{data.email}</span>
      </div>
      <Form form={form} layout="vertical" className="ForgotPasswordModal-form style-form" onFinish={handleSubmit}>
        <Form.Item name="otp" label="Mã xác thực" rules={[validationRules.required()]}>
          <Input size="large" placeholder="Nhập mã xác thực" />
        </Form.Item>
        <Form.Item>
          <Button
            size="large"
            loading={vetifyForgotLoading}
            title="Xác nhận"
            type="primary"
            uppercase
            htmlType="submit"
          />
        </Form.Item>

        <div className="ForgotPasswordModal-resend">
          Chưa nhận được mã?{' '}
          <span className={classNames({ disabled: !isAvaiableResend })} onClick={handleClickResend}>
            Gửi lại{' '}
            {!isAvaiableResend && (
              <>
                (<CountdownTime defaultValue="01:00" onFinish={handleFinishCountdown} />)
              </>
            )}
          </span>
        </div>
      </Form>
    </>
  );
};

export default VetifyForgot;
