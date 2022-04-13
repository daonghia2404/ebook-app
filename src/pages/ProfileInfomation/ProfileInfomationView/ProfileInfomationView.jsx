import React, { useEffect } from 'react';

import Button from '@/components/Button';
import Avatar from '@/components/Avatar';
import { LayoutPaths, Paths } from '@/pages/routers';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from '@/redux/actions';
import { EProfileAction } from '@/redux/actions/profile/constants';
import { showNotification } from '@/utils/functions';

const ProfileInfomationView = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.profileState.profile) ?? {};
  const loading = useSelector((state) => state.loading[EProfileAction.GET_PROFILE]);
  const getProfile = () => {
    dispatch(getProfileAction.request());
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <>
      <div className="ProfileInfomation-avatar">
        <Avatar size={100} />
      </div>
      <div className="ProfileInfomation-row flex justify-between">
        <div className="ProfileInfomation-row-item">Họ và tên</div>
        <div className="ProfileInfomation-row-item">{data.name}</div>
      </div>
      <div className="ProfileInfomation-row flex justify-between">
        <div className="ProfileInfomation-row-item">Số điện thoại</div>
        <div className="ProfileInfomation-row-item">{data.phone}</div>
      </div>
      <div className="ProfileInfomation-row flex justify-between">
        <div className="ProfileInfomation-row-item">Email</div>
        <div className="ProfileInfomation-row-item">{data.email}</div>
      </div>
      <div className="ProfileInfomation-row flex justify-between">
        <div className="ProfileInfomation-row-item">Ngày sinh</div>
        <div className="ProfileInfomation-row-item">{data.dob}</div>
      </div>
      <div className="ProfileInfomation-row flex justify-between">
        <div className="ProfileInfomation-row-item">Giới tính</div>
        <div className="ProfileInfomation-row-item">{data.gender == true ? 'Nam' : 'Nữ'}</div>
      </div>
      <div className="ProfileInfomation-row submit">
        <Button
          title="CHỈNH SỬA THÔNG TIN"
          uppercase
          type="primary"
          size="large"
          link={`${LayoutPaths.Profile}${Paths.ProfileInfomationEdit}`}
        />
      </div>
    </>
  );
};

export default ProfileInfomationView;
