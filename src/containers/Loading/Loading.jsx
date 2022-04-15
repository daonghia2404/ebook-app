import React from 'react';
import { Spin } from 'antd';

import './Loading.scss';
import classNames from 'classnames';

const Loading = ({ absolute, minHeight = '30rem' }) => {
  return (
    <div className={classNames('Loading flex items-center justify-center', { absolute })} style={{ minHeight }}>
      <Spin />
    </div>
  );
};

export default Loading;
