import React from 'react';

import ImageEmpty from '@/assets/images/image-empty.svg';

import './Empty.scss';

const Empty = () => {
  return (
    <div className="Empty flex flex-col items-center justify-center">
      <div className="Empty-image">
        <img src={ImageEmpty} alt="" />
      </div>
      <div className="Empty-title">Không có dữ liệu</div>
    </div>
  );
};

export default Empty;
