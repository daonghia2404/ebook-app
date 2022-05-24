import React from 'react';
import { navigate } from '@reach/router';

import { Paths } from '@/pages/routers';
import { formatISODateToDateTime } from '@/utils/functions';

import './NewBlock.scss';

const NewBlock = ({ featureImageId, title, description, createdAt, slug }) => {
  return (
    <div className="NewBlock" onClick={() => navigate(Paths.NewDetail(slug))}>
      <div className="NewBlock-image">
        <img src={featureImageId} alt="" />
      </div>
      <div className="NewBlock-info">
        <div className="NewBlock-title">{title}</div>
        <div className="NewBlock-description">{description}</div>
        <div className="NewBlock-footer flex justify-between items-center">
          <div className="NewBlock-date">{formatISODateToDateTime(createdAt)}</div>
          <div className="NewBlock-see-detail">Xem chi tiết {`>`}</div>
        </div>
      </div>
    </div>
  );
};

export default NewBlock;
