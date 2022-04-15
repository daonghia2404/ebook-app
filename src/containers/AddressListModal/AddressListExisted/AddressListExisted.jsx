import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Checkbox from '@/components/Checkbox';
import { EAddressAction } from '@/redux/actions/address/constants';
import Loading from '@/containers/Loading/Loading';
import Empty from '@/components/Empty/Empty';
import { addressListAction } from '@/redux/actions';
import { ETypePage } from '@/utils/constants';

const AddressListExisted = ({ currentAddress, onAdd, onEdit, onSubmit }) => {
  const dispatch = useDispatch();

  const [checkedAddress, setCheckedAddress] = useState(currentAddress);

  const getAddressListLoading = useSelector((state) => state.loading[EAddressAction.ADDRESS_LIST]);
  const addressListData = useSelector((state) => state.addressState.address?.records) || [];

  const isEmpty = addressListData.length === 0;

  const [getAddressParamsRequest, setGetAddressParamsRequest] = useState({
    page: ETypePage.DEFAULT_PAGE,
    pageSize: ETypePage.DEFAULT_PAGE_SIZE,
  });

  const getListAddress = useCallback(() => {
    dispatch(addressListAction.request(getAddressParamsRequest));
  }, [dispatch, getAddressParamsRequest]);

  useEffect(() => {
    setCheckedAddress(currentAddress);
  }, [currentAddress]);

  useEffect(() => {
    getListAddress();
  }, [getListAddress]);

  return (
    <>
      <div className="AddressListModal-list">
        {getAddressListLoading ? (
          <Loading />
        ) : (
          <>
            {isEmpty ? (
              <Empty />
            ) : (
              <div className="AddressListModal-list-wrapper">
                {addressListData.map((item) => (
                  <div key={item._id} className="AddressListModal-list-item flex">
                    <div className="AddressListModal-list-item-checkbox">
                      <Checkbox value={item._id === checkedAddress?._id} onChange={() => setCheckedAddress?.(item)} />
                    </div>
                    <div className="AddressListModal-list-item-info">
                      <div className="AddressListModal-list-item-info-name">{item.name}</div>
                      <div className="AddressListModal-list-item-info-description">{item.phone}</div>
                      <div className="AddressListModal-list-item-info-description">{item.detailAddress}</div>
                      <div className="AddressListModal-list-item-info-change" onClick={() => onEdit?.(item)}>
                        Chỉnh sửa
                      </div>
                      {item.isDefault ? <div className="AddressListModal-list-item-info-default">Mặc định</div> : ''}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        <div className="AddressListModal-add flex items-center" onClick={onAdd}>
          <div className="AddressListModal-add-icon">
            <Icon name={EIconName.PlusCircle} color={EIconColor.FUN_GREEN} />
          </div>
          <div className="AddressListModal-add-title">Thêm địa chỉ mới</div>
        </div>
      </div>

      {checkedAddress && (
        <div className="AddressListModal-submit">
          <Button size="large" type="primary" title="Giao đến địa chỉ này" onClick={() => onSubmit?.(checkedAddress)} />
        </div>
      )}
    </>
  );
};

export default AddressListExisted;
