import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import BgSpecial from '@/assets/images/bg-special.png';
import Logo from '@/assets/images/logo.svg';
import { formatISODateToDateTime, getTotalPage } from '@/utils/functions';
import WrapperLazyLoad from '@/components/WrapperLazyLoad';
import { getNoticeAction } from '@/redux/actions';
import { ETypePage } from '@/utils/constants';
import AuthHelpers from '@/services/auth-helpers';

import './NotificationDropdown.scss';

const NotificationDropdown = ({ onClose }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profileState.profile) || {};
  const atk = profile?.name;

  const [notificationData, setNotificationData] = useState([]);
  const notificationDataTotal = useSelector((state) => state.notificationState.noticeList?.total) ?? 0;

  const [getNotificationParamsRequest, setGetNotificationParamsRequest] = useState({
    page: ETypePage.DEFAULT_PAGE,
    pageSize: ETypePage.DEFAULT_PAGE_SIZE,
  });

  const handleLoadMore = () => {
    const isLoadMore =
      getNotificationParamsRequest.page < getTotalPage(notificationDataTotal, getNotificationParamsRequest.pageSize);

    if (isLoadMore) {
      setGetNotificationParamsRequest({
        ...getNotificationParamsRequest,
        page: getNotificationParamsRequest.page + 1,
      });
    }
  };

  const getNotification = useCallback(() => {
    dispatch(
      getNoticeAction.request(getNotificationParamsRequest, (response) => {
        const isFirstFetching = getNotificationParamsRequest.page === ETypePage.DEFAULT_PAGE;
        const notification = response.data.records;
        setNotificationData(isFirstFetching ? notification : [...notificationData, ...notification]);
      }),
    );
  }, [dispatch, getNotificationParamsRequest]);

  useEffect(() => {
    if (atk) {
      getNotification();
    }
  }, [atk, getNotification]);

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
        <WrapperLazyLoad maxHeight="70rem" onEnd={handleLoadMore}>
          {notificationData.map((item) => (
            <div key={item.id} className="NotificationDropdown-list-item flex items-start">
              <div className="NotificationDropdown-list-item-image">
                <img src={item.featureImage ?? Logo} alt="" />
              </div>
              <div className="NotificationDropdown-list-item-info">
                <div className="NotificationDropdown-list-item-info-title">{item.title} </div>
                <div className="NotificationDropdown-list-item-info-description">{item.description}. </div>
                <div className="NotificationDropdown-list-item-info-time">
                  {formatISODateToDateTime(item.createdAt)}
                </div>
              </div>
              <div className="NotificationDropdown-list-item-unread" />
            </div>
          ))}
        </WrapperLazyLoad>
      </div>
    </div>
  );
};

export default NotificationDropdown;
