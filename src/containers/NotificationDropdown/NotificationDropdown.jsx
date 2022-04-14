import React from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import BgSpecial from '@/assets/images/bg-special.png';
import Logo from '@/assets/images/logo.svg';

import './NotificationDropdown.scss';

const NotificationDropdown = ({ onClose, data }) => {
  return (
    <div className="NotificationDropdown">
      <img className="NotificationDropdown-bg" src={BgSpecial} alt="" />
      <div className="NotificationDropdown-header">
        <div className="NotificationDropdown-title">Thông báo</div>
        <div className="NotificationDropdown-close" onClick={onClose}>
          <Icon name={EIconName.Close} color={EIconColor.BLUE_ZODIAC} />
        </div>
      </div>

      <div className="NotificationDropdown-list">
        {data &&
          data.map((item) => (
            <div key={item.id} className="NotificationDropdown-list-item flex items-start">
              <div className="NotificationDropdown-list-item-image">
                <img src={item.featureImage ?? Logo} alt="" />
              </div>
              <div className="NotificationDropdown-list-item-info">
                <div className="NotificationDropdown-list-item-info-title">{item.title} </div>
                <div className="NotificationDropdown-list-item-info-description">{item.description}. </div>
                <div className="NotificationDropdown-list-item-info-time">{item.createdAt}</div>
              </div>
              <div className="NotificationDropdown-list-item-unread" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NotificationDropdown;
