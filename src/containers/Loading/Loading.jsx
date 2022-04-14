import React from 'react';
import { Spin } from 'antd';

import './Loading.scss';

const Loading = ({ minHeight = '30rem' }) => {
  return (
    <div className="Loading flex items-center justify-center" style={{ minHeight }}>
      <Spin />
    </div>
  );
};

export default Loading;
