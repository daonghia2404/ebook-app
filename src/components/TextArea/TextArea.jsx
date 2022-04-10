import React from 'react';
import classNames from 'classnames';
import { Input } from 'antd';

import './TextArea.scss';

const { TextArea: AntdTextArea } = Input;

export const TextArea = ({ disabled, className, placeholder, value, onChange }) => {
  return (
    <div className={classNames('TextArea', className)}>
      <AntdTextArea
        className="TextArea-control"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
