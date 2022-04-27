import React from 'react';
import classNames from 'classnames';
import { Checkbox as AntCheckbox } from 'antd';

import './Checkbox.scss';

const Checkbox = ({ label, className, value, onChange, ...rest }) => {
  const handleChange = (e) => {
    const { checked } = e.target;
    onChange?.(checked);
  };

  return (
    <div className={classNames('Checkbox', className)}>
      <AntCheckbox checked={Boolean(value)} onChange={handleChange} {...rest}>
        {label}
      </AntCheckbox>
    </div>
  );
};

export default Checkbox;
