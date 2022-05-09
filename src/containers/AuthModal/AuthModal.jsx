import React, { useEffect, useState } from 'react';

import Modal from '@/components/Modal';
import ImageAuth from '@/assets/images/image-auth.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { ETypeAuthModal } from '@/containers/AuthModal/AuthModal.enums';
import SignUp from '@/containers/AuthModal/SignUp';
import SignIn from '@/containers/AuthModal/SingIn';

import './AuthModal.scss';

const AuthModal = ({ visible, onClose, type, onClickForgotPassword, onSignUpSuccess, onSignInSuccess }) => {
  const [typeAuthModal, setTypeAuthModal] = useState(type || ETypeAuthModal.SIGN_IN);

  const isSignInModal = typeAuthModal === ETypeAuthModal.SIGN_IN;

  const handleClickBack = () => {
    if (isSignInModal) onClose?.();
    else setTypeAuthModal(ETypeAuthModal.SIGN_IN);
  };

  useEffect(() => {
    setTypeAuthModal(type);
  }, [type]);

  return (
    <Modal radius visible={visible} onClose={onClose} closeable={false} maxWidth="135.5rem">
      <div className="AuthModal-body flex flex-wrap">
        <div className="AuthModal-body-item info flex flex-col">
          <div className="AuthModal-back" onClick={handleClickBack}>
            <Icon name={EIconName.ArrowLeft} color={EIconColor.BLUE_ZODIAC} />
          </div>
          <div className="AuthModal-title">{isSignInModal ? 'Chào mừng trở lại với KALABOOKS' : 'Đăng ký ngay'}.</div>
          <div className="AuthModal-description">
            {isSignInModal ? 'Đăng nhập để tiếp tục' : 'Để trải nghiệm dịch vụ tốt nhất từ chúng tôi.'}
          </div>
          {isSignInModal ? (
            <SignIn onClickForgotPassword={onClickForgotPassword} onSignInSuccess={onSignInSuccess} />
          ) : (
            <SignUp onSignUpSuccess={onSignUpSuccess} />
          )}
          {isSignInModal ? (
            <div className="AuthModal-link">
              Bạn chưa có tài khoản? <span onClick={() => setTypeAuthModal(ETypeAuthModal.SIGN_UP)}>Đăng ký</span>
            </div>
          ) : (
            <div className="AuthModal-link">
              Bạn đã có tài khoản? <span onClick={() => setTypeAuthModal(ETypeAuthModal.SIGN_IN)}>Đăng nhập</span>
            </div>
          )}
        </div>
        <div className="AuthModal-body-item background">
          <img src={ImageAuth} alt="" />
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;
