import React from 'react';
import { Avatar as AntdAvatar } from 'antd';
import classNames from 'classnames';

import { formatAbbreviationsName } from '@/utils/functions';
import ImageAvatarDefault from '@/assets/images/image-avatar-default.png';

import './Avatar.scss';

const Avatar = ({ className, image, fullname, forceContent, size = 40, style, onClickAvatar }) => {
  const handleClickAvatar = () => {
    onClickAvatar?.();
  };

  return (
    <div className={classNames('Avatar', className)} style={style}>
      <AntdAvatar src={image || ImageAvatarDefault} size={size} onClick={handleClickAvatar}>
        {forceContent || formatAbbreviationsName(fullname || '')}
      </AntdAvatar>
    </div>
  );
};

export default Avatar;
