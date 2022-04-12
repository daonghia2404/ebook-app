import React, { useEffect, useState } from 'react';

import Modal from '@/components/Modal';
import BgSpecial from '@/assets/images/bg-special.png';
import BgForgotPasswordModal from '@/assets/images/bg-forgot-password-modal.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import FindAccount from '@/containers/ForgotPasswordModal/FindAccount';
import VetifyAccount from '@/containers/ForgotPasswordModal/VetifyAccount';
import ChangePassword from '@/containers/ForgotPasswordModal/ChangePassword';

import { EKeyStepForgotPasswordModal } from './ForgotPasswordModal.enums';
import './ForgotPasswordModal.scss';
import { ETypeAuthModal } from '../AuthModal/AuthModal.enums';

const ForgotPasswordModal = ({ visible, onClose, onSuccess, defaultStep, prevAction }) => {
  const [keyStepForgotPasswordModal, setKeyStepForgotPasswordModal] = useState(
    EKeyStepForgotPasswordModal.FIND_ACCOUNT,
  );

  const handleClickBack = () => {
    switch (keyStepForgotPasswordModal) {
      case EKeyStepForgotPasswordModal.FIND_ACCOUNT:
        onClose?.();
        break;
      case EKeyStepForgotPasswordModal.VETIFY_ACCOUNT:
        setKeyStepForgotPasswordModal(EKeyStepForgotPasswordModal.FIND_ACCOUNT);
        break;
      case EKeyStepForgotPasswordModal.CHANGE_PASSWORD:
        setKeyStepForgotPasswordModal(EKeyStepForgotPasswordModal.VETIFY_ACCOUNT);
        break;
      default:
        break;
    }
  };

  const handleNextStep = () => {
    switch (keyStepForgotPasswordModal) {
      case EKeyStepForgotPasswordModal.FIND_ACCOUNT:
        setKeyStepForgotPasswordModal(EKeyStepForgotPasswordModal.VETIFY_ACCOUNT);
        break;
      case EKeyStepForgotPasswordModal.VETIFY_ACCOUNT:
        setKeyStepForgotPasswordModal(EKeyStepForgotPasswordModal.CHANGE_PASSWORD);
        break;
      case EKeyStepForgotPasswordModal.CHANGE_PASSWORD:
        onSuccess?.();
        break;
      default:
        break;
    }
  };
  const handlerSubmitVertifyAccount = () => {
    if (prevAction === ETypeAuthModal.SIGN_UP) {
      onClose(ETypeAuthModal.SIGN_IN);
    }
  };
  const renderStepSection = () => {
    switch (keyStepForgotPasswordModal) {
      case EKeyStepForgotPasswordModal.FIND_ACCOUNT:
        return <FindAccount onSuccess={handleNextStep} />;
      case EKeyStepForgotPasswordModal.VETIFY_ACCOUNT:
        return <VetifyAccount onSuccess={handlerSubmitVertifyAccount} />;
      case EKeyStepForgotPasswordModal.CHANGE_PASSWORD:
        return <ChangePassword onSuccess={handleNextStep} />;
      default:
        return <></>;
    }
  };

  useEffect(() => {
    if (visible) {
      setKeyStepForgotPasswordModal(defaultStep || EKeyStepForgotPasswordModal.FIND_ACCOUNT);
    }
  }, [visible, defaultStep]);

  return (
    <Modal
      maxWidth="62.6rem"
      radius
      closeable={false}
      visible={visible}
      onClose={onClose}
      className="ForgotPasswordModal"
      wrapClassName="ForgotPasswordModal-wrapper"
    >
      <img className="ForgotPasswordModal-bg special" src={BgSpecial} alt="" />
      <img className="ForgotPasswordModal-bg object" src={BgForgotPasswordModal} alt="" />
      <div className="ForgotPasswordModal-back" onClick={handleClickBack}>
        <Icon name={EIconName.ArrowLeft} color={EIconColor.BLUE_ZODIAC} />
      </div>

      {renderStepSection()}
    </Modal>
  );
};

export default ForgotPasswordModal;
