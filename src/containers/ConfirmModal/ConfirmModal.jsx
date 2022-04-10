import React from 'react';
import classNames from 'classnames';

import Modal from '@/components/Modal';
import Button from '@/components/Button';

import './ConfirmModal.scss';

const ConfirmModal = ({ visible, hideCancel, title, onClose, onSubmit }) => {
  return (
    <Modal maxWidth="60rem" closeable={false} visible={visible} onClose={onClose} wrapClassName="ConfirmModal-wrapper">
      <div className="ConfirmModal-title">{title}</div>
      <div className={classNames('ConfirmModal-actions flex justify-between', { single: hideCancel })}>
        {!hideCancel && <Button title="HUỶ BỎ" uppercase className="outline-primary" onClick={onClose} />}
        <Button title="ĐỒNG Ý" uppercase type="primary" onClick={onSubmit} />
      </div>
    </Modal>
  );
};

export default ConfirmModal;
