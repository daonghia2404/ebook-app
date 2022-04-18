import React from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Upload from '@/components/Upload/Upload';

import './UploadImagesList.scss';

const UploadImagesList = ({ value = [], onChange }) => {
  const uploadLoading = false;
  const LIMIT_LENGTH = 5;

  const handleUpload = (data) => {
    if (value.length < LIMIT_LENGTH) {
      const files = data;
      onChange?.([...value, ...files]);
    }
  };

  const handleRemoveImage = (removeIndex) => {
    onChange(value.filter((item, index) => index !== removeIndex));
  };

  return (
    <div className="UploadImagesList">
      <Upload multiple disabled={uploadLoading} onChange={handleUpload}>
        <div className="UploadImagesList-upload flex flex-col justify-center items-center">
          {uploadLoading && (
            <div className="UploadImagesList-loading flex items-center justify-center">
              <img src={LoadingSpin} alt="" />
            </div>
          )}
          <div className="UploadImagesList-icon">
            <Icon name={EIconName.Camera} color={EIconColor.FUN_GREEN} />
          </div>
          <div className="UploadImagesList-text">
            {value.length}/{LIMIT_LENGTH}
          </div>
        </div>
      </Upload>

      <div className="UploadImagesList-list flex flex-wrap">
        {value.map((item, index) => (
          <div key={index} className="UploadImagesList-list-item">
            <div className="UploadImagesList-list-item-image">
              <img src={URL.createObjectURL(item)} alt="" />
            </div>
            <div className="UploadImagesList-list-item-close" onClick={() => handleRemoveImage(index)}>
              <Icon name={EIconName.Close} color={EIconColor.ALTO} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadImagesList;
