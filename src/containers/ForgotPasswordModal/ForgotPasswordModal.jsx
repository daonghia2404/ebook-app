import React, { useEffect, useState } from 'react';

import Modal from '@/components/Modal';
import BgSpecial from '@/assets/images/bg-special.png';
import BgForgotPasswordModal from '@/assets/images/bg-forgot-password-modal.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import FindAccount from '@/containers/ForgotPasswordModal/FindAccount';
import VetifyAccount from '@/containers/ForgotPasswordModal/VetifyAccount';
import ChangePassword from '@/containers/ForgotPasswordModal/ChangePassword';
import { ETypeAuthModal } from '@/containers/AuthModal/AuthModal.enums';

import { EKeyStepForgotPasswordModal } from './ForgotPasswordModal.enums';
import './ForgotPasswordModal.scss';
import VetifyForgot from '@/containers/ForgotPasswordModal/VertifyForgot/VetifyForgot';

const ForgotPasswordModal = ({ visible, onClose, defaultStep, prevAction, data = {} }) => {
  const [globalKeyStepState, setGlobalKeyStepState] = useState({
    key: EKeyStepForgotPasswordModal.FIND_ACCOUNT,
    prevAction: undefined,
    data: undefined,
  });

  const handleFindAccountSuccess = (prevAction, data) => {
    setGlobalKeyStepState({
      key: EKeyStepForgotPasswordModal.VERTIFY_FORGOT,
      prevAction,
      data,
    });
  };

  const handleVetiryForgotSuccess = (data) => {
    setGlobalKeyStepState({
      ...globalKeyStepState,
      key: EKeyStepForgotPasswordModal.CHANGE_PASSWORD,
      data,
    });
  };

  const handleChangePasswordSuccess = () => {
    onClose?.(ETypeAuthModal.SIGN_IN);
  };

  const handleVetifyAccountSuccess = () => {
    onClose?.(ETypeAuthModal.SIGN_IN);
  };

  const handleClickBack = () => {
    switch (true) {
      case globalKeyStepState.prevAction === ETypeAuthModal.SIGN_UP &&
        globalKeyStepState.key === EKeyStepForgotPasswordModal.VETIFY_ACCOUNT:
        onClose?.(ETypeAuthModal.SIGN_UP);
        break;
      case globalKeyStepState.prevAction === ETypeAuthModal.FIND_ACCOUNT &&
        globalKeyStepState.key === EKeyStepForgotPasswordModal.VERTIFY_FORGOT:
        setGlobalKeyStepState({
          ...globalKeyStepState,
          key: EKeyStepForgotPasswordModal.FIND_ACCOUNT,
        });
        break;
      case globalKeyStepState.prevAction === ETypeAuthModal.FIND_ACCOUNT &&
        globalKeyStepState.key === EKeyStepForgotPasswordModal.CHANGE_PASSWORD:
        setGlobalKeyStepState({
          ...globalKeyStepState,
          key: EKeyStepForgotPasswordModal.VERTIFY_FORGOT,
        });
        break;
      default:
        break;
    }
  };

  const renderStepSection = () => {
    switch (globalKeyStepState.key) {
      case EKeyStepForgotPasswordModal.FIND_ACCOUNT:
        return <FindAccount onSubmit={handleFindAccountSuccess} />;
      case EKeyStepForgotPasswordModal.VERTIFY_FORGOT:
        return <VetifyForgot data={globalKeyStepState.data} onSuccess={handleVetiryForgotSuccess} />;
      case EKeyStepForgotPasswordModal.CHANGE_PASSWORD:
        return <ChangePassword data={globalKeyStepState.data} onSuccess={handleChangePasswordSuccess} />;

      case EKeyStepForgotPasswordModal.VETIFY_ACCOUNT:
        return <VetifyAccount data={globalKeyStepState.data} onSuccess={handleVetifyAccountSuccess} />;

      default:
        return <></>;
    }
  };

  useEffect(() => {
    if (visible && defaultStep) {
      setGlobalKeyStepState({
        key: defaultStep,
        prevAction,
        data,
      });
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
