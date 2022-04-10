import React from 'react';

import { Form } from 'antd';
import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';
import Select from '@/components/Select';
import Checkbox from '@/components/Checkbox';
import Button from '@/components/Button';

const AddressListConfig = () => {
  const handleSubmit = () => {};

  return (
    <div className="AddressListModal">
      <Form className="AddressListModal-form style-form" layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="name" label="Tên của bạn" rules={[validationRules.required()]}>
          <Input size="large" placeholder="Nhập tên của bạn" />
        </Form.Item>
        <Form.Item
          name="name"
          label="Số điện thoại"
          rules={[validationRules.required(), validationRules.onlyNumeric()]}
        >
          <Input size="large" placeholder="Nhập số điện thoại" />
        </Form.Item>
        <Form.Item name="city" label="Tỉnh/Thành phố" rules={[validationRules.required()]}>
          <Select placeholder="Chọn Tỉnh/Thành phố" options={[]} />
        </Form.Item>
        <Form.Item name="district" label="Quận/Huyện" rules={[validationRules.required()]}>
          <Select placeholder="Chọn Quận/Huyện" options={[]} />
        </Form.Item>
        <Form.Item name="commune" label="Phường/Xã" rules={[validationRules.required()]}>
          <Select placeholder="Chọn Phường/Xã" options={[]} />
        </Form.Item>
        <Form.Item name="name" label="Địa chỉ cụ thể" rules={[validationRules.required()]}>
          <Input size="large" placeholder="Nhập địa chỉ cụ thể" />
        </Form.Item>
        <Form.Item name="name">
          <Checkbox label="Đặt làm địa chỉ mặc định" />
        </Form.Item>
        <Form.Item>
          <Button title="Cập nhật" size="large" type="primary" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddressListConfig;
