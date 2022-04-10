import React from 'react';
import { Radio as AntdRadio } from 'antd';

import './Radio.scss';

const Radio = ({ value = null, options = [], onChange }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    const optionValue = options.find((option) => option.value === value);
    onChange?.(optionValue);
  };

  return (
    <div className="Radio">
      <AntdRadio.Group onChange={handleChange} value={value?.value}>
        {options.map((item) => (
          <AntdRadio key={item.value} value={item.value}>
            {item.label}
          </AntdRadio>
        ))}
      </AntdRadio.Group>
    </div>
  );
};

export default Radio;
