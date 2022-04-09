import React from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import BgSpecial from '@/assets/images/bg-special.png';
import Logo from '@/assets/images/logo.svg';

import './NotificationDropdown.scss';

const NotificationDropdown = ({ onClose }) => {
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
        {[1, 2, 3].map((item) => (
          <div key={item} className="NotificationDropdown-list-item flex items-start">
            <div className="NotificationDropdown-list-item-image">
              <img src={Logo} alt="" />
            </div>
            <div className="NotificationDropdown-list-item-info">
              <div className="NotificationDropdown-list-item-info-title">Lorem ipsum dolor sit amet </div>
              <div className="NotificationDropdown-list-item-info-description">
                Consectadipiscing elit. Maecenas solicitudin metus a elementum.{' '}
              </div>
              <div className="NotificationDropdown-list-item-info-time">15:30 06/09/2021</div>
            </div>
            <div className="NotificationDropdown-list-item-unread" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationDropdown;
