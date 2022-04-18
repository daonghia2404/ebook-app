import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import Upload from '@/components/Upload/Upload';
import ImageAvatarDefault from '@/assets/images/image-avatar-default.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import LoadingSpin from '@/assets/icons/icon-loading-spin.svg';
import { uploadFileAction } from '@/redux/actions';
import { EUploadFileAction } from '@/redux/actions/upload/constants';
import { showNotification, validateImageTypeFile } from '@/utils/functions';
import { ETypeNotification } from '@/utils/constants';

import './UploadAvatar.scss';

const UploadAvatar = ({ className, value, onChange }) => {
  const dispatch = useDispatch();
  const [currentValue, setCurrentValue] = useState(value);

  const uploadLoading = useSelector((state) => state.loading[EUploadFileAction.UPLOAD_FILE]);

  const handleUpload = (data) => {
    const singleFile = data?.[0];

    if (singleFile) {
      if (validateImageTypeFile(singleFile)) {
        const bodyFormData = new FormData();
        bodyFormData.append('file', singleFile);
        dispatch(uploadFileAction.request(bodyFormData, handleUploadSuccess));
      } else {
        showNotification(
          ETypeNotification.ERROR,
          'Vui lòng chọn ảnh có định dạng .jpg, .jpeg, .png và kích thước nhỏ hơn 2MB',
        );
      }
    }
  };

  const handleUploadSuccess = (response) => {
    onChange?.(response.data.fileId);
    setCurrentValue(response.data.fullUrl);
  };

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <div className={classNames('UploadAvatar', className)}>
      <Upload disabled={uploadLoading} onChange={handleUpload}>
        <div className="UploadAvatar-image flex">
          <img src={currentValue || ImageAvatarDefault} alt="" />

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
