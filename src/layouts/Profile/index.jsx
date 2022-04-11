import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Footer from '@/containers/Footer';
import Header from '@/containers/Header';
import ProfileCard from '@/containers/ProfileCard';
import HeaderSearch from '@/containers/HeaderSearch/HeaderSearch';
import { EDeviceType } from '@/redux/reducers/ui';

import './Profile.scss';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import classNames from 'classnames';

const Profile = ({ children }) => {
  const windowType = useSelector((state) => state.uiState.device);
  const isMobile = windowType.width <= 768;
  const [visibleProfileCard, setVisibleProfileCard] = useState(false);

  const handleOpenProfileCard = () => {
    setVisibleProfileCard(true);
  };
  const handleCloseProfileCard = () => {
    setVisibleProfileCard(false);
  };

  useEffect(() => {
    setVisibleProfileCard(false);
  }, [isMobile]);

  return (
    <div className="Profile">
      <div className="Profile-header">
        <Header />
        <HeaderSearch />
      </div>
      <div className="Profile-body">
        <div className="container">
          <div className="Profile-wrapper flex flex-wrap">
            <div className={classNames('Profile-body-item', { active: visibleProfileCard })}>
              {isMobile && <div className="Profile-overlay" onClick={handleCloseProfileCard} />}

              <ProfileCard onClickMenu={handleCloseProfileCard} />
            </div>
            <div className="Profile-body-item">
              {isMobile && (
                <div className="Profile-menu" onClick={handleOpenProfileCard}>
                  <Icon name={EIconName.Menu} color={EIconColor.FUN_GREEN} />
                </div>
              )}

              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="Profile-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
