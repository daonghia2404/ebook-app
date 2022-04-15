import React from 'react';
import { useSelector } from 'react-redux';

import Button from '@/components/Button';
import Avatar from '@/components/Avatar';
import { LayoutPaths, Paths } from '@/pages/routers';
import { EProfileAction } from '@/redux/actions/profile/constants';
import { dataGenderOptions } from '@/common/static';
import Loading from '@/containers/Loading/Loading';
import { formatISODateToDateTime } from '@/utils/functions';

const ProfileInfomationView = () => {
  const profileData = useSelector((state) => state.profileState.profile) ?? {};
  const getProfileLoading = useSelector((state) => state.loading[EProfileAction.GET_PROFILE]);

  return (
    <>
      {getProfileLoading ? (
        <Loading />
      ) : (
        <>
          <div className="ProfileInfomation-avatar">
            <Avatar size={100} image={profileData.avatar} />
          </div>
          <div className="ProfileInfomation-row flex justify-between">
            <div className="ProfileInfomation-row-item">Họ và tên</div>
            <div className="ProfileInfomation-row-item">{profileData.name || '-'}</div>
          </div>
          <div className="ProfileInfomation-row flex justify-between">
            <div className="ProfileInfomation-row-item">Số điện thoại</div>
            <div className="ProfileInfomation-row-item">{profileData.phone || '-'}</div>
          </div>
          <div className="ProfileInfomation-row flex justify-between">
            <div className="ProfileInfomation-row-item">Email</div>
            <div className="ProfileInfomation-row-item">{profileData.email || '-'}</div>
          </div>
          <div className="ProfileInfomation-row flex justify-between">
            <div className="ProfileInfomation-row-item">Ngày sinh</div>
            <div className="ProfileInfomation-row-item">
              {profileData.dob ? formatISODateToDateTime(profileData.dob, 'DD/MM/YYYY') : '-'}
            </div>
          </div>
          <div className="ProfileInfomation-row flex justify-between">
            <div className="ProfileInfomation-row-item">Giới tính</div>
            <div className="ProfileInfomation-row-item">
              {profileData.gender === null
                ? '-'
                : dataGenderOptions.find((item) => item.value === profileData.gender)?.label}
            </div>
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
      )}
    </>
  );
};

export default ProfileInfomationView;
