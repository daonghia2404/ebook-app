import React, { useState } from 'react';

import { Form } from 'antd';
import { showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { EAuthAction } from '@/redux/actions/auth/constants';
import { resendRegisterOtpAction, vertifyOtpAction } from '@/redux/actions';
import { ETypeNotification } from '@/utils/constants';
import CountdownTime from '@/components/CountdownTime';
import classNames from 'classnames';

const VetifyAccount = ({ data, onSuccess }) => {
  const dispatch = useDispatch();
  const [isAvaiableResend, setIsAvaiableResend] = useState(false);

  const [form] = Form.useForm();
  const loadingVertify = useSelector((state) => state.loading[EAuthAction.VERTIFY_OTP]);
  const resendLoading = useSelector((state) => state.loading[EAuthAction.RESEND_REGISTER_OTP]);

  const handleSubmit = (values) => {
    dispatch(vertifyOtpAction.request({ ...values }, data?.token, handleVertifySuccess));
  };

  const handleFinishCountdown = () => {
    setIsAvaiableResend(true);
  };

  const handleClickResend = () => {
    if (isAvaiableResend && !resendLoading) {
      dispatch(resendRegisterOtpAction.request(data.token, handleResendOtpSuccess));
    }
  };

  const handleResendOtpSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Gửi lại mã xác thực thành công. Vui lòng kiểm tra hộp thư của bạn');
    setIsAvaiableResend(false);
  };

  const handleVertifySuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Kích hoạt tài khoản thành công ! Vui lòng đăng nhập');
    onSuccess?.();
  };

  return (
    <>
      <div className="ForgotPasswordModal-title">Xác thực tài khoản</div>
      <div className="ForgotPasswordModal-description">
        Vui lòng nhập mã OTP được gửi đến email:
        <br />
        <span>{data?.email}</span>
      </div>
      <Form form={form} layout="vertical" className="ForgotPasswordModal-form style-form" onFinish={handleSubmit}>
        <Form.Item name="otp" label="Mã xác thực" rules={[validationRules.required()]}>
          <Input size="large" placeholder="Nhập mã xác thực" />
        </Form.Item>
        <Form.Item>
          <Button size="large" loading={loadingVertify} title="Xác nhận" type="primary" uppercase htmlType="submit" />
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

export default VetifyAccount;
