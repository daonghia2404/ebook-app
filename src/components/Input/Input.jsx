import React from 'react';
import { Input as AntdInput } from 'antd';

import './Input.scss';

const Input = ({ className, onChange, ...rest }) => {
  const handleChange = (e) => {
    const { value: currentValue } = e.target;
    onChange?.(currentValue);
  };

  return (
    <div className="Input">
      <AntdInput {...rest} onChange={handleChange} />
    </div>
  );
};

export default Input;
