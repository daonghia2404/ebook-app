import React, { useEffect, useState } from 'react';
import moment from 'moment';

const CountdownTime = ({ defaultValue = '00:00', format = 'mm:ss', onFinish }) => {
  const [value, setValue] = useState();

  const showValue = () => {
    const minutes = Number(value?.minutes?.()) < 10 ? `0${value?.minutes()}` : value?.minutes();
    const seconds = Number(value?.seconds?.()) < 10 ? `0${value?.seconds()}` : value?.seconds();

    return value ? `${minutes}:${seconds}` : defaultValue;
  };

  useEffect(() => {
    const unixValue = moment(defaultValue, format).unix();
    const currentValue = moment('00:00', format).unix();
    const diffTime = unixValue - currentValue;
    let duration = moment.duration(diffTime * 1000, 'milliseconds');

    const interval = setInterval(() => {
      duration = moment.duration(duration - 1000, 'milliseconds');
      setValue(duration);

      const isCountEnd = duration?.minutes() === 0 && duration?.seconds() === 0;

      if (isCountEnd) {
        onFinish?.();
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [defaultValue]);

  return <>{showValue()}</>;
};

export default CountdownTime;
