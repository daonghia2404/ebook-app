import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import DropdownCustom from '@/components/DropdownCustom';
import NotificationDropdown from '@/containers/NotificationDropdown';
import AuthHelpers from '@/services/auth-helpers';
import { showNotification } from '@/utils/functions';
import { ETypeNotification } from '@/utils/constants';

import './Header.scss';

const Header = () => {
  const profile = useSelector((state) => state.profileState.profile) ?? {};
  const atk = profile?.name;

  const [visibleNotificationDropdown, setVisibleNotificationDropdown] = useState(false);

  const handleOpenNotificationDropdown = () => {
    if (atk) {
      setVisibleNotificationDropdown(true);
    } else {
      showNotification(ETypeNotification.WARNING, 'Vui lòng đăng nhập để tiếp tục thực hiện hành động này');
    }
  };

  const handleCloseNotificationDropdown = () => {
    setVisibleNotificationDropdown(false);
  };

  return (
    <div className="Header">
      <div className="container">
        <div className="Header-wrapper flex items-center justify-between">
          <div className="Header-col" />
          <div className="Header-col flex items-center">
            {atk ? (
              <DropdownCustom
                visible={visibleNotificationDropdown}
                onClose={handleCloseNotificationDropdown}
                maxWidth="63rem"
                placement="bottomRight"
                overlay={<NotificationDropdown onClose={handleCloseNotificationDropdown} />}
              >
                <div
                  className="Header-item flex items-center"
                  onClick={handleOpenNotificationDropdown}
                  style={{ padding: '1rem 0' }}
                >
                  <div className="Header-item-icon">
                    <Icon name={EIconName.Notification} color={EIconColor.WHITE} />
                  </div>
                  <div className="Header-item-label">Thông Báo</div>
                </div>
              </DropdownCustom>
            ) : (
              <div className="Header-item flex items-center cursor-pointer" onClick={handleOpenNotificationDropdown}>
                <div className="Header-item-icon">
                  <Icon name={EIconName.Notification} color={EIconColor.WHITE} />
                </div>
                <div className="Header-item-label">Thông Báo</div>
              </div>
            )}
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
