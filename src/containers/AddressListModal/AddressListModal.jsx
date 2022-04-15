import React, { useEffect, useState } from 'react';

import Modal from '@/components/Modal';
import BgSpecial from '@/assets/images/bg-special.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import AddressListConfig from '@/containers/AddressListModal/AddressListConfig';
import AddressListExisted from '@/containers/AddressListModal/AddressListExisted/AddressListExisted';

import { ETypeAddressListModal } from './AddressListModal.enums';
import './AddressListModal.scss';

const AddressListModal = ({ visible, currentAddress, onClose, onSubmit }) => {
  const [addressListState, setAddressListState] = useState({
    type: ETypeAddressListModal.LIST,
    data: undefined,
  });

  const isShowAddressList = addressListState.type === ETypeAddressListModal.LIST;

  const handleBack = () => {
    switch (addressListState.type) {
      case ETypeAddressListModal.LIST:
        onClose?.();
        break;
      case ETypeAddressListModal.CREATE:
      case ETypeAddressListModal.UPDATE:
        handleChangeTypeAddressListModal(ETypeAddressListModal.LIST);
        break;
      default:
        break;
    }
  };

  const handleChangeTypeAddressListModal = (type, data) => {
    setAddressListState({ type, data });
  };

  const titleModal = () => {
    switch (addressListState.type) {
      case ETypeAddressListModal.LIST:
        return 'Địa chỉ của bạn';
      case ETypeAddressListModal.CREATE:
        return 'Thêm địa chỉ mới';
      case ETypeAddressListModal.UPDATE:
        return 'Cập nhật địa chỉ';
      default:
        return '';
    }
  };

  const handleSubmitAddressListConfig = () => {
    handleChangeTypeAddressListModal(ETypeAddressListModal.LIST);
  };

  useEffect(() => {
    if (visible) {
      handleChangeTypeAddressListModal(ETypeAddressListModal.LIST);
    }
  }, [visible]);

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

      {isShowAddressList ? (
        <AddressListExisted
          currentAddress={currentAddress}
          onSubmit={onSubmit}
          onAdd={() => handleChangeTypeAddressListModal(ETypeAddressListModal.CREATE)}
          onEdit={(data) => handleChangeTypeAddressListModal(ETypeAddressListModal.UPDATE, data)}
        />
      ) : (
        <AddressListConfig {...addressListState} onSubmit={handleSubmitAddressListConfig} />
      )}
    </Modal>
  );
};

export default AddressListModal;
