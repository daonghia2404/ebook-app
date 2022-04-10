import React from 'react';

import Footer from '@/containers/Footer';
import Header from '@/containers/Header';
import ProfileCard from '@/containers/ProfileCard';
import HeaderSearch from '@/containers/HeaderSearch/HeaderSearch';

import './Profile.scss';

const Profile = ({ children }) => {
  return (
    <div className="Profile">
      <div className="Profile-header">
        <Header />
        <HeaderSearch />
      </div>
      <div className="Profile-body">
        <div className="container">
          <div className="Profile-wrapper flex flex-wrap">
            <div className="Profile-body-item">
              <ProfileCard />
            </div>
            <div className="Profile-body-item">{children}</div>
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
