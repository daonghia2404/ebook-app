import React from 'react';
import { Input as AntdInput } from 'antd';

import './Input.scss';

const Input = ({ className, onChange, type, ...rest }) => {
  const handleChange = (e) => {
    const { value: currentValue } = e.target;
    onChange?.(currentValue);
  };

  return (
    <div className="Input">
      {type === 'password' ? (
        <AntdInput.Password type={type} onChange={handleChange} {...rest} />
      ) : (
        <AntdInput type={type} onChange={handleChange} {...rest} />
      )}
    </div>
  );
};

export default Input;
