import Icon, { EIconColor, EIconName } from '@/components/Icon';
import React, { useState } from 'react';

import './Amount.scss';

const DEFAULT_VALUE = 1;

const Amount = ({ value, step = 1, onChange, min = 0, max }) => {
  const [stateValue, setStateValue] = useState(DEFAULT_VALUE);
  const isHaveValueProp = value !== undefined;

  const currentValue = isHaveValueProp ? value : stateValue;

  const handleMinus = () => {
    const isNotMinValue = currentValue !== min;
    if (isNotMinValue) {
      const newValue = currentValue - step;
      onChange?.(newValue);
      if (!onChange) setStateValue(newValue);
    }
  };

  const handlePlus = () => {
    const isNotMaxValue = !max || currentValue !== max;
    if (isNotMaxValue) {
      const newValue = currentValue + step;
      onChange?.(newValue);
      if (!onChange) setStateValue(newValue);
    }
  };

  return (
    <div className="Amount flex items-center">
      <div className="Amount-minus" onClick={handlePlus}>
        <Icon name={EIconName.Plus} color={EIconColor.GRAY} />
      </div>
      <span>{currentValue}</span>
      <div className="Amount-plus" onClick={handleMinus}>
        <Icon name={EIconName.Minus} color={EIconColor.GRAY} />
      </div>
    </div>
  );
};

export default Amount;
