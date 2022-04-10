import React, { useEffect, useState } from 'react';

import Modal from '@/components/Modal';
import BgSpecial from '@/assets/images/bg-special.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import AddressListConfig from '@/containers/AddressListModal/AddressListConfig';
import AddressListExisted from '@/containers/AddressListModal/AddressListExisted/AddressListExisted';

import { ETypeAddressListModal } from './AddressListModal.enums';
import './AddressListModal.scss';

const AddressListModal = ({ visible, onClose }) => {
  const [typeAddressListModal, setTypeAddressListModal] = useState(ETypeAddressListModal.LIST);
  const isListAddressModal = typeAddressListModal === ETypeAddressListModal.LIST;

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

  useEffect(() => {
    if (visible) {
      setTypeAddressListModal(ETypeAddressListModal.LIST);
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

      {isListAddressModal ? (
        <AddressListExisted onEdit={handleEditAddress} onAdd={handleCreateAddress} />
      ) : (
        <AddressListConfig />
      )}
    </Modal>
  );
};

export default AddressListModal;
