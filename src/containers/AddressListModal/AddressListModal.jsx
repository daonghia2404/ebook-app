import React, { useEffect, useState } from 'react';

import Modal from '@/components/Modal';
import BgSpecial from '@/assets/images/bg-special.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import AddressListConfig from '@/containers/AddressListModal/AddressListConfig';
import AddressListExisted from '@/containers/AddressListModal/AddressListExisted/AddressListExisted';

import { ETypeAddressListModal } from './AddressListModal.enums';
import './AddressListModal.scss';
import { addressListAction } from '@/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ETypePage } from '@/utils/constants';

const AddressListModal = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const params = {
    page: ETypePage.DEFAULT_PAGE,
    pageSize: ETypePage.DEFAULT_PAGE_SIZE,
  };
  useEffect(() => {
    if (visible) {
      setTypeAddressListModal(ETypeAddressListModal.LIST);
    }
    getListAddress();
  }, [visible]);
  const getListAddress = () => {
    dispatch(addressListAction.request(params));
  };
  const [typeAddressListModal, setTypeAddressListModal] = useState(ETypeAddressListModal.LIST);
  const isListAddressModal = typeAddressListModal === ETypeAddressListModal.LIST;
  const listAddress = useSelector((state) => state.addresState.address) ?? [];
  const handleBack = () => {
    switch (typeAddressListModal) {
      case ETypeAddressListModal.LIST:
        onClose?.();
        break;
      case ETypeAddressListModal.CREATE:
      case ETypeAddressListModal.UPDATE:
        setTypeAddressListModal(ETypeAddressListModal.LIST);
        break;
      default:
        break;
    }
  };

  const handleEditAddress = () => {
    setTypeAddressListModal(ETypeAddressListModal.UPDATE);
  };

  const handleCreateAddress = () => {
    setTypeAddressListModal(ETypeAddressListModal.CREATE);
  };
  const titleModal = () => {
    switch (typeAddressListModal) {
      case ETypeAddressListModal.LIST:
        return 'Địa chỉ của bạn';
      case ETypeAddressListModal.CREATE:
        return 'Thêm địa chỉ mới';
      case ETypeAddressListModal.UPDATE:
        return 'Cập nhật địa chỉ mới';
      default:
        return '';
    }
  };

  return (
    <Modal
      maxWidth="63rem"
      radius
      closeable={false}
      visible={visible}
      onClose={onClose}
      className="AddressListModal"
      wrapClassName="AddressListModal-wrapper"
    >
      <img className="AddressListModal-bg special" src={BgSpecial} alt="" />
      <div className="AddressListModal-header flex items-center justify-center">
        <div className="AddressListModal-back" onClick={handleBack}>
          <Icon name={EIconName.ArrowLeft} color={EIconColor.BLUE_ZODIAC} />
        </div>
        <div className="AddressListModal-title">{titleModal()}</div>
      </div>

      {isListAddressModal ? (
        <AddressListExisted
          data={listAddress}
          onClose={onClose}
          onEdit={handleEditAddress}
          onAdd={handleCreateAddress}
        />
      ) : (
        <AddressListConfig />
      )}
    </Modal>
  );
};

export default AddressListModal;
