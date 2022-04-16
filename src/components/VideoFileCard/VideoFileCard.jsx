import React from 'react';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './VideoFileCard.scss';

const VideoFileCard = ({ pdf, video, title, image, description, onClick }) => {
  return (
    <div className="VideoFileCard flex items-center" onClick={onClick}>
      <div
        className={classNames('VideoFileCard-icon', { pdf, video })}
        style={
          video && {
            background: `rgba(0, 0, 0, 0.2) url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }
        }
      >
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
