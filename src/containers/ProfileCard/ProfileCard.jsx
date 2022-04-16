import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { globalHistory, navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import ConfirmModal from '@/containers/ConfirmModal/ConfirmModal';
import { LayoutPaths, Paths } from '@/pages/routers';
import AuthHelpers from '@/services/auth-helpers';
import { showNotification } from '@/utils/functions';
import { ETypeNotification } from '@/utils/constants';

import { dataMenuListProfile } from './ProfileCard.data';
import './ProfileCard.scss';
import { getProfileAction } from '@/redux/actions';

const ProfileCard = ({ onClickMenu }) => {
  const dispatch = useDispatch();
  const [pathName, setPathName] = useState('');
  const [visibleLogoutModal, setVisibleLogoutModal] = useState(false);

  const profile = useSelector((state) => state.profileState.profile) ?? {};

  const handleChangeRouter = (pathname) => {
    setPathName(pathname);
  };

  const handleClickMenu = (data) => {
    switch (true) {
      case data.isAction: {
        if (data?.key === 'logout') handleOpenLogoutModal();
        break;
      }
      case Boolean(data.link):
        navigate(data?.link || '');
        onClickMenu?.();
        break;
      default:
        break;
    }
  };

  const handleOpenLogoutModal = () => {
    setVisibleLogoutModal(true);
  };
  const handleCloseLogoutModal = () => {
    setVisibleLogoutModal(false);
  };
  const handleSubmitLogoutModal = () => {
    AuthHelpers.clearTokens();
    dispatch(getProfileAction.success({ data: {} }));
    showNotification(ETypeNotification.SUCCESS, 'Đăng xuất thành công');
    navigate(Paths.Home);
    handleCloseLogoutModal();
  };

  useEffect(() => {
    const { pathname: mountedPathName } = window.location;
    handleChangeRouter(mountedPathName);

    globalHistory.listen(({ location }) => {
      const { pathname } = location;
      handleChangeRouter(pathname);
    });
  }, []);

  return (
    <div className="ProfileCard">
      <div className="ProfileCard-header flex flex-col justify-center items-center">
        <div className="ProfileCard-avatar">
          <Avatar size={100} image={profile.avatar} />
        </div>
        <div className="ProfileCard-name">{profile.name}</div>
        <div className="ProfileCard-email">{profile.email}</div>
        <div className="ProfileCard-edit-btn flex justify-center">
          <Button
            size="small"
            title="Chỉnh sửa hồ sơ"
            onClick={() => handleClickMenu({ link: `${LayoutPaths.Profile}${Paths.ProfileInfomationEdit}` })}
          />
        </div>
      </div>
      <div className="ProfileCard-list">
        {dataMenuListProfile.map((item, index) => (
          <div
            className={classNames('ProfileCard-list-item flex items-center', {
              active: pathName.includes(item?.link),
            })}
            onClick={() => handleClickMenu(item)}
            key={index}
          >
            <div className="ProfileCard-list-item-icon">{item.icon}</div>
            <div className="ProfileCard-list-item-title">{item.title}</div>
          </div>
        ))}
      </div>

      <ConfirmModal
        visible={visibleLogoutModal}
        title="Đăng xuất tài khoản?"
        onClose={handleCloseLogoutModal}
        onSubmit={handleSubmitLogoutModal}
      />
    </div>
  );
};

export default ProfileCard;
