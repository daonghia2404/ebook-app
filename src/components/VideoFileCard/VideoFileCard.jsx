import React from 'react';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './VideoFileCard.scss';

const VideoFileCard = ({ pdf, video, title, description }) => {
  return (
    <div className="VideoFileCard flex items-center">
      <div className={classNames('VideoFileCard-icon', { pdf, video })}>
        <Icon name={pdf ? EIconName.Pdf : EIconName.Play} color={EIconColor.WHITE} />
      </div>
      <div className="VideoFileCard-info">
        <div className="VideoFileCard-info-title">{title}</div>
        <div className="VideoFileCard-info-description">{description}</div>
      </div>
    </div>
  );
};

export default VideoFileCard;
