import React from 'react';
import { Form } from 'antd';

import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';
import Button from '@/components/Button';
import UploadAvatar from '@/components/UploadAvatar';
import Radio from '@/components/Radio/Radio';
import { dataGenderOptions } from '@/common/static';
import { useDispatch, useSelector } from 'react-redux';
import { EProfileAction } from '@/redux/actions/profile/constants';
import { updateProfileAction } from '@/redux/actions';

const ProfileInfomationForm = () => {
  const [form] = Form.useForm();
  const handlerSubmit = (values) => {
    const { avatar, dob, email, gender, phone, name } = values;
    const newObj = {
      name,
      avatar,
      email,
      gender: gender?.value,
      phone,
      dob,
    };
    dispatch(updateProfileAction.request(newObj, handleSignInSuccess));
  };
  const handleSignInSuccess = () => {
    showNotification('success', 'Cập nhật thành công !');
    form.resetFields();
  };
  const dispatch = useDispatch();
  const data = useSelector((state) => state.profileState.profile);
  const loading = useSelector((state) => state.loading[EProfileAction.UPDATE_PROFILE]);
  return (
    <>
      <Form form={form} layout="vertical" className="ProfileInfomation-form style-form" onFinish={handlerSubmit}>
        <Form.Item name="avatar" style={{ marginBottom: '7rem' }}>
          <UploadAvatar />
        </Form.Item>
        <Form.Item name="name" label="Tên của bạn" rules={[validationRules.required()]}>
          <Input size="large" placeholder="Nhập tên của bạn" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Số điện thoại"
          rules={[validationRules.required(), validationRules.onlyNumeric()]}
        >
          <Input size="large" placeholder="Nhập số điện thoại" />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[validationRules.required(), validationRules.email()]}>
          <Input size="large" placeholder="Nhập email" />
        </Form.Item>
        <Form.Item name="dob" label="Ngày sinh" rules={[validationRules.required()]}>
          <DatePicker size="large" placeholder="Chọn ngày sinh" />
        </Form.Item>
        <div className="ProfileInfomation-form-row flex justify-end">
          <div className="ProfileInfomation-form-row-label">Giới tính</div>
          <Form.Item name="gender">
            <Radio options={dataGenderOptions} />
          </Form.Item>
        </div>

        <Form.Item className="ProfileInfomationForm-submit">
          <Button title="Lưu lại" size="large" htmlType="submit" uppercase type="primary" />
        </Form.Item>
      </Form>
    </>
  );
};

export default ProfileInfomationForm;
