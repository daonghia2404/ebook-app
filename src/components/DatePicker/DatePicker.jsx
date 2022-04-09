import React from 'react';
import { DatePicker as AntdDatePicker } from 'antd';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './DatePicker.scss';

const DatePicker = ({ className, onChange, ...rest }) => {
  const handleChange = (value, valueString) => {
    onChange?.(value, valueString);
  };

  return (
    <div className="DatePicker">
      <AntdDatePicker
        {...rest}
        suffixIcon={<Icon name={EIconName.CaretDown} color={EIconColor.GRAY} />}
        onChange={handleChange}
      />
    </div>
  );
};

export default DatePicker;
