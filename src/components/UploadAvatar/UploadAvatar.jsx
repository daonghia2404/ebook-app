import React from 'react';
import classNames from 'classnames';

import Upload from '@/components/Upload/Upload';
import ImageAvatarDefault from '@/assets/images/image-avatar-default.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import LoadingSpin from '@/assets/icons/icon-loading-spin.svg';

import './UploadAvatar.scss';

const UploadAvatar = ({ className, value, onChange }) => {
  const uploadLoading = false;

  const handleUpload = (data) => {
    const singleFile = data?.[0];

    if (singleFile) {
      const bodyFormData = new FormData();
      bodyFormData.append('file', singleFile);
    }
  };

  const handleUploadSuccess = (data) => {
    onChange?.(data.filename);
  };

  return (
    <div className={classNames('UploadAvatar', className)}>
      <Upload disabled={uploadLoading} onChange={handleUpload}>
        <div className="UploadAvatar-image flex">
          <img src={value || ImageAvatarDefault} alt="" />

          {uploadLoading && (
            <div className="UploadAvatar-loading flex items-center justify-center">
              <img src={LoadingSpin} alt="" />
            </div>
          )}
        </div>
        <div className="UploadAvatar-icon">
          <Icon name={EIconName.Camera} color={EIconColor.WHITE} />
        </div>
      </Upload>
    </div>
  );
};

export default UploadAvatar;
