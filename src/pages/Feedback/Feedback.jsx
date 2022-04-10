import React from 'react';
import { Form } from 'antd';

import Button from '@/components/Button';
import TextArea from '@/components/TextArea';
import UploadImagesList from '@/components/UploadImagesList/UploadImagesList';

import './Feedback.scss';
import { validationRules } from '@/utils/functions';

const Feedback = () => {
  return (
    <div className="Feedback flex flex-col items-center justify-center">
      <Form className="Feedback-form" layout="vertical">
        <Form.Item name="images">
          <UploadImagesList />
        </Form.Item>
        <Form.Item name="content" style={{ marginTop: '-4rem' }} rules={[validationRules.required()]}>
          <TextArea placeholder="Nội dung góp ý" />
        </Form.Item>

        <Form.Item>
          <Button size="large" title="GỬI THÔNG TIN" type="primary" uppercase htmlType="submit" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Feedback;
