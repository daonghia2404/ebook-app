import React from 'react';

import Button from '@/components/Button';
import Avatar from '@/components/Avatar';
import { LayoutPaths, Paths } from '@/pages/routers';

const ProfileInfomationView = () => {
  return (
    <>
      <div className="ProfileInfomation-avatar">
        <Avatar size={100} />
      </div>
      <div className="ProfileInfomation-row flex justify-between">
        <div className="ProfileInfomation-row-item">Họ và tên</div>
        <div className="ProfileInfomation-row-item">Nguyễn Thanh</div>
      </div>
      <div className="ProfileInfomation-row flex justify-between">
        <div className="ProfileInfomation-row-item">Số điện thoại</div>
        <div className="ProfileInfomation-row-item">03789001356</div>
      </div>
      <div className="ProfileInfomation-row flex justify-between">
        <div className="ProfileInfomation-row-item">Email</div>
        <div className="ProfileInfomation-row-item">nguyenvana@gmail.com</div>
      </div>
      <div className="ProfileInfomation-row flex justify-between">
        <div className="ProfileInfomation-row-item">Ngày sinh</div>
        <div className="ProfileInfomation-row-item">11/06/1994</div>
      </div>
      <div className="ProfileInfomation-row flex justify-between">
        <div className="ProfileInfomation-row-item">Giới tính</div>
        <div className="ProfileInfomation-row-item">Nữ</div>
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
