import React from 'react';
import { Form } from 'antd';

import Modal from '@/components/Modal';
import BgSpecial from '@/assets/images/bg-special.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import './FilterBooksModal.scss';
import Button from '@/components/Button';
import DatePicker from '@/components/DatePicker';
import Select from '@/components/Select';

const FilterBooksModal = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      maxWidth="63rem"
      radius
      closeable={false}
      visible={visible}
      onClose={onClose}
      className="FilterBooksModal"
      wrapClassName="FilterBooksModal-wrapper"
    >
      <img className="FilterBooksModal-bg special" src={BgSpecial} alt="" />
      <div className="FilterBooksModal-header flex items-center justify-center">
        <div className="FilterBooksModal-back">
          <Icon name={EIconName.ArrowLeft} color={EIconColor.BLUE_ZODIAC} />
        </div>
        <div className="FilterBooksModal-title">Lọc</div>
      </div>
      <Form form={form} className="FilterBooksModal-form style-form" layout="vertical">
        <Form.Item name="author" label="Tác giả">
          <Select placeholder="Chọn tác giả" size="large" options={[]} />
        </Form.Item>
        <Form.Item name="author" label="Dịch giả">
          <Select placeholder="Chọn dịch giả" size="large" options={[]} />
        </Form.Item>
        <Form.Item name="author" label="Năm xuất bản">
          <DatePicker size="large" placeholder="Chọn năm xuất bản" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" title="Lọc" uppercase size="large" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FilterBooksModal;
