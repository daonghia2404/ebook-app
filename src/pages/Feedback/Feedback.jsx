import React from 'react';
import { Form } from 'antd';

import Button from '@/components/Button';
import TextArea from '@/components/TextArea';
import UploadImagesList from '@/components/UploadImagesList/UploadImagesList';
import { useDispatch, useSelector } from 'react-redux';
import { showNotification, validationRules } from '@/utils/functions';

import './Feedback.scss';
import { EFeedbackAction } from '@/redux/actions/feedback/constants';
import { postFeedbackAction } from '@/redux/actions';
import { ETypeNotification } from '@/utils/constants';

const Feedback = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const postFeedbackLoading = useSelector((state) => state.loading[EFeedbackAction.POST_FEEDBACK]);

  const handleSubmit = (values) => {
    const bodyFormData = new FormData();
    values?.images?.map((item) => bodyFormData.append('file', item));
    bodyFormData.append('content', values.content);

    dispatch(postFeedbackAction.request(bodyFormData, handlePostFeedbackSuccess));
  };

  const handlePostFeedbackSuccess = () => {
    showNotification(
      ETypeNotification.SUCCESS,
      'Cảm ơn bạn đã đóng góp ý kiến. Ý kiến của bạn sẽ được xét duyệt bởi quản trị viên',
    );
    form.resetFields();
  };

  return (
    <div className="Feedback flex flex-col items-center justify-center">
      <Form form={form} className="Feedback-form" layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="images">
          <UploadImagesList />
        </Form.Item>
        <Form.Item name="content" style={{ marginTop: '-4rem' }} rules={[validationRules.required()]}>
          <TextArea placeholder="Nội dung góp ý" />
        </Form.Item>

        <Form.Item>
          <Button
            size="large"
            title="GỬI THÔNG TIN"
            type="primary"
            uppercase
            htmlType="submit"
            loading={postFeedbackLoading}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Feedback;
