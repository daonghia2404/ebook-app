import React from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './Header.scss';

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="Header-wrapper flex items-center justify-between">
          <div className="Header-col" />
          <div className="Header-col flex items-center">
            <div className="Header-item flex items-center">
              <div className="Header-item-icon">
                <Icon name={EIconName.Notification} color={EIconColor.WHITE} />
              </div>
              <div className="Header-item-label">Thông Báo</div>
            </div>

            <div className="Header-item flex items-center">
              <div className="Header-item-icon">
                <Icon name={EIconName.Phone} color={EIconColor.WHITE} />
              </div>
              <div className="Header-item-label">Hotline: 0123 456 789</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
