import React from 'react';

import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

const AddressListExisted = ({ onAdd, onEdit }) => {
  return (
    <>
      <div className="AddressListModal-list">
        <div className="AddressListModal-list-wrapper">
          {[1, 2].map((item) => (
            <div key={item} className="AddressListModal-list-item flex">
              <div className="AddressListModal-list-item-checkbox">
                <Checkbox />
              </div>
              <div className="AddressListModal-list-item-info">
                <div className="AddressListModal-list-item-info-name">Hoang Huy</div>
                <div className="AddressListModal-list-item-info-description">0364 111 222</div>
                <div className="AddressListModal-list-item-info-description">
                  15 Pháo Đài Láng, P. Láng Thượng, Q. Đống Đa, TP. Hà Nội
                </div>
                <div className="AddressListModal-list-item-info-change" onClick={onEdit}>
                  Chỉnh sửa
                </div>
                <div className="AddressListModal-list-item-info-default">Mặc định</div>
              </div>
            </div>
          ))}
        </div>

        <div className="AddressListModal-add flex items-center" onClick={onAdd}>
          <div className="AddressListModal-add-icon">
            <Icon name={EIconName.PlusCircle} color={EIconColor.FUN_GREEN} />
          </div>
          <div className="AddressListModal-add-title">Thêm địa chỉ mới</div>
        </div>
      </div>

      <div className="AddressListModal-submit">
        <Button size="large" type="primary" title="Giao đến địa chỉ này" />
      </div>
    </>
  );
};

export default AddressListExisted;
