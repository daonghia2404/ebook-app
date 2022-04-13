import React, { useEffect, useState } from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import DropdownCustom from '@/components/DropdownCustom';
import NotificationDropdown from '@/containers/NotificationDropdown';
import AuthHelpers from '@/services/auth-helpers';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getNoticeAction } from '@/redux/actions';
import { ETypePage } from '@/utils/constants';

const Header = () => {
  const [visibleNotificationDropdown, setVisibleNotificationDropdown] = useState(false);
  const checkAuth = AuthHelpers.getAccessToken();
  const dispatch = useDispatch();
  const handleOpenNotificationDropdown = () => {
    setVisibleNotificationDropdown(true);
  };

  const handleCloseNotificationDropdown = () => {
    setVisibleNotificationDropdown(false);
  };
  const data = useSelector((state) => state.notificationState.noticeList) ?? [];
  const paramGetProductRequest = {
    page: ETypePage.DEFAULT_PAGE,
    pageSize: ETypePage.DEFAULT_PAGE_SIZE,
  };
  const getNotification = () => {
    if (checkAuth) {
      dispatch(getNoticeAction.request(paramGetProductRequest));
    }
  };
  useEffect(() => {
    getNotification();
  }, []);
  return (
    <div className="Header">
      <div className="container">
        <div className="Header-wrapper flex items-center justify-between">
          <div className="Header-col" />
          <div className="Header-col flex items-center">
            {checkAuth ? (
              <DropdownCustom
                visible={visibleNotificationDropdown}
                onClose={handleCloseNotificationDropdown}
                maxWidth="63rem"
                placement="bottomRight"
                overlay={<NotificationDropdown data={data} onClose={handleCloseNotificationDropdown} />}
              >
                <div className="Header-item flex items-center" onClick={handleOpenNotificationDropdown}>
                  <div className="Header-item-icon">
                    <Icon name={EIconName.Notification} color={EIconColor.WHITE} />
                  </div>
                  <div className="Header-item-label">Thông Báo</div>
                </div>
              </DropdownCustom>
            ) : (
              ''
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
