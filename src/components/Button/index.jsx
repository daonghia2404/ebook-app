import React from 'react';
import { Button as AntdButton } from 'antd';

import './Button.scss';

export const Button = ({ title }) => {
  return (
    <div className="Button">
      <AntdButton>{title}</AntdButton>
    </div>
  );
};

export default Button;
