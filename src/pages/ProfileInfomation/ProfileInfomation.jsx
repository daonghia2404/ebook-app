import React, { useEffect } from 'react';
import { useLocation } from '@reach/router';

import ProfileInfomationView from '@/pages/ProfileInfomation/ProfileInfomationView';
import ProfileInfomationForm from '@/pages/ProfileInfomation/ProfileInfomationForm';

import './ProfileInfomation.scss';

const ProfileInfomation = () => {
  const location = useLocation();
  const { pathname } = location || {};
  const isEditProfile = pathname.includes('/chinh-sua');

  return (
    <div className="ProfileInfomation flex flex-col items-center justify-center">
      {isEditProfile ? <ProfileInfomationForm /> : <ProfileInfomationView />}
    </div>
  );
};

export default ProfileInfomation;
