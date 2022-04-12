import React, { useEffect } from 'react';
import { useLocation } from '@reach/router';

import ProfileInfomationView from '@/pages/ProfileInfomation/ProfileInfomationView';
import ProfileInfomationForm from '@/pages/ProfileInfomation/ProfileInfomationForm';

import './ProfileInfomation.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from '@/redux/actions';
import { EProfileAction } from '@/redux/actions/profile/constants';
import { showNotification } from '@/utils/functions';

const ProfileInfomation = () => {
  const location = useLocation();
  const { pathname } = location || {};
  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.profileState.profile);
  const loading = useSelector((state) => state.loading[EProfileAction.GET_PROFILE]);
  const isEditProfile = pathname.includes('/chinh-sua');
  const getProfile = () => {
    dispatch(getProfileAction.request());
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="ProfileInfomation flex flex-col items-center justify-center">
      {isEditProfile ? <ProfileInfomationForm /> : <ProfileInfomationView />}
    </div>
  );
};

export default ProfileInfomation;
