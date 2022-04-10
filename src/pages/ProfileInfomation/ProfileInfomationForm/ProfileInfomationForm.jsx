import React from 'react';
import { Form } from 'antd';

import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';
import Button from '@/components/Button';
import UploadAvatar from '@/components/UploadAvatar';
import Radio from '@/components/Radio/Radio';
import { dataGenderOptions } from '@/common/static';

const ProfileInfomationForm = () => {
  const [form] = Form.useForm();

  return (
    <>
      <Form form={form} layout="vertical" className="ProfileInfomation-form style-form">
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
        <Form.Item name="birthDay" label="Ngày sinh" rules={[validationRules.required()]}>
          <DatePicker size="large" placeholder="Chọn ngày sinh" />
        </Form.Item>
        <div className="ProfileInfomation-form-row flex justify-end">
          <div className="ProfileInfomation-form-row-label">Giới tính</div>
          <Form.Item name="gender">
            <Radio options={dataGenderOptions} />
          </Form.Item>
        </div>

        <Form.Item className="ProfileInfomationForm-submit">
          <Button title="Lưu lại" size="large" uppercase type="primary" />
        </Form.Item>
      </Form>
    </>
  );
};

export default ProfileInfomationForm;
