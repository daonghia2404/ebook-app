import React, { useState } from 'react';

import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Checkbox from '@/components/Checkbox';

const AddressListExisted = ({ data, onAdd, onEdit, onClose }) => {
  console.log('data', data);
  const [checkedAddress, setCheckAdrres] = useState(1);
  const handlerChange = (e, item) => {
    setCheckAdrres(item);
  };
  return (
    <>
      <div className="AddressListModal-list">
        <div className="AddressListModal-list-wrapper">
          {data &&
            data.map((item) => (
              <div key={item._id} className="AddressListModal-list-item flex">
                <div className="AddressListModal-list-item-checkbox">
                  <Checkbox value={checkedAddress._id === item._id} onChange={(e) => handlerChange(e, item)} />
                </div>
                <div className="AddressListModal-list-item-info">
                  <div className="AddressListModal-list-item-info-name">{item.name}</div>
                  <div className="AddressListModal-list-item-info-description">{item.phone}</div>
                  <div className="AddressListModal-list-item-info-description">{item.detailAddress}</div>
                  <div className="AddressListModal-list-item-info-change" onClick={onEdit}>
                    Chỉnh sửa
                  </div>
                  {item.isDefault == true ? (
                    <div className="AddressListModal-list-item-info-default">Mặc định</div>
                  ) : (
                    ''
                  )}
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
        <Button size="large" type="primary" title="Giao đến địa chỉ này" onClick={() => onClose(checkedAddress)} />
      </div>
    </>
  );
};

export default AddressListExisted;
