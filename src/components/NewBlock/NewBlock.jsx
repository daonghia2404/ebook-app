import React from 'react';
import { navigate } from '@reach/router';

import { Paths } from '@/pages/routers';

import './NewBlock.scss';

const NewBlock = ({ image, title, description, date }) => {
  return (
    <div className="NewBlock" onClick={() => navigate(Paths.NewDetail(1))}>
      <div className="NewBlock-image">
        <img src={image} alt="" />
      </div>
      <div className="NewBlock-info">
        <div className="NewBlock-title">{title}</div>
        <div className="NewBlock-description">{description}</div>
        <div className="NewBlock-date">{date}</div>
      </div>
    </div>
  );
};

export default NewBlock;
