import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '@/assets/images/logo.svg';
import Avatar from '@/components/Avatar';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Input from '@/components/Input';
import Button from '@/components/Button';
import AuthModal from '@/containers/AuthModal/AuthModal';
import { ETypeAuthModal } from '@/containers/AuthModal/AuthModal.enums';
import DropdownCustom from '@/components/DropdownCustom';
import CartDropdown from '@/containers/CartDropdown/CartDropdown';
import ForgotPasswordModal from '@/containers/ForgotPasswordModal';
import { Link } from '@reach/router';
import { Paths } from '@/pages/routers';
import { EDeviceType } from '@/redux/reducers/ui';
import AuthHelpers from '@/services/auth-helpers';
import './HeaderSearch.scss';
import { EKeyStepForgotPasswordModal } from '@/containers/ForgotPasswordModal/ForgotPasswordModal.enums';
import ConfirmModal from '@/containers/ConfirmModal/ConfirmModal';
import { showNotification } from '@/utils/functions';

const HeaderSearch = () => {
  const windowType = useSelector((state) => state.uiState.device);
  const isMobile = windowType.type === EDeviceType.MOBILE;
  const checkAuth = AuthHelpers.getAccessToken();
  const [authModalState, setAuthModalState] = useState({
    visible: false,
  });
  const [logoutModalState, setLogoutModalState] = useState({
    visible: false,
  });
  const [forgotPasswordModalState, setForgotPasswordModalState] = useState({
    visible: false,
  });
  const [visibleCartDropdown, setVisibleCartDropdown] = useState(false);
  const [visibleMenuDropdown, setVisibleMenuDropdown] = useState(false);

  const handleCartDropdownVisibleChange = (visible) => {
    setVisibleCartDropdown(visible);
  };
  const handleOpenLogoutModal = () => {
    setLogoutModalState({ visible: true });
  };
  const onSubmitLogout = () => {
    handleLogoutSuccess();
  };
  const handleLogoutSuccess = () => {
    AuthHelpers.clearTokens();
    showNotification('success', 'Đăng xuất thành công');
    setLogoutModalState({ visible: false });
  };
  const handleCloseLogoutModal = () => {
    setLogoutModalState({ visible: false });
  };
  const handleOpenCartDropdown = () => {
    setVisibleCartDropdown(true);
  };
  const handleCloseCartDropdown = () => {
    setVisibleCartDropdown(false);
  };
  const handleOpenMenuDropdown = () => {
    setVisibleMenuDropdown(true);
  };
  const handleCloseMenuDropdown = () => {
    setVisibleMenuDropdown(false);
  };

  const handleOpenForgotPasswordModal = (defaultStep, prevAction) => {
    handleCloseAuthModal();
    setForgotPasswordModalState({ visible: true, defaultStep, prevAction });
  };

  const handleCloseForgotPasswordModal = () => {
    setForgotPasswordModalState({ visible: false });
  };

  const handleSuccessForgotPasswordModal = () => {
    handleCloseForgotPasswordModal();
    handleOpenAuthModal(ETypeAuthModal.SIGN_IN);
  };

  const handleOpenAuthModal = (type) => {
    handleCloseMenuDropdown();
    setAuthModalState({
      visible: true,
      type,
    });
  };

  const handleCloseAuthModal = () => {
    setAuthModalState({
      visible: false,
    });
  };
  const handleSignUpSuccess = () => {
    handleCloseAuthModal();
    handleOpenForgotPasswordModal(EKeyStepForgotPasswordModal.VETIFY_ACCOUNT, ETypeAuthModal.SIGN_UP);
  };
  const handleSignInSuccess = () => {
    handleCloseAuthModal();
  };
  const renderDropdownMenuMobile = () => {
    return (
      <div className="HeaderSearch-menu-mobile">
        <div className="HeaderSearch-menu-mobile-item" onClick={() => handleOpenAuthModal(ETypeAuthModal.SIGN_UP)}>
          Đăng Ký
        </div>
        <div className="HeaderSearch-menu-mobile-item" onClick={() => handleOpenAuthModal(ETypeAuthModal.SIGN_IN)}>
          Đăng Nhập
        </div>
        <div className="HeaderSearch-menu-mobile-item">
          <div className="HeaderSearch-menu-mobile-item-search flex items-center">
            <Input placeholder="Tìm kiếm" />
            <Button type="primary" icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} />} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="HeaderSearch">
      <div className="container">
        <div className="HeaderSearch-wrapper flex items-center justify-center">
          <div className="HeaderSearch-logo">
            <Link to={Paths.Home}>
              <img src={Logo} alt="" />
            </Link>
          </div>
          {isMobile ? (
            <DropdownCustom
              visible={visibleMenuDropdown}
              onClose={handleCloseMenuDropdown}
              maxWidth="50rem"
              placement="bottomRight"
              overlay={renderDropdownMenuMobile()}
            >
              <div className="HeaderSearch-menu" onClick={handleOpenMenuDropdown}>
                <Icon name={EIconName.Menu} color={EIconColor.FUN_GREEN} />
              </div>
            </DropdownCustom>
          ) : (
            <>
              <div className="HeaderSearch-search flex items-center">
                <Input placeholder="Tìm kiếm" />
                <Button type="primary" icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} />} />
              </div>
              {checkAuth ? (
                <div className="HeaderSearch-avatar flex items-center" onClick={() => handleOpenLogoutModal()}>
                  <Avatar />
                  <span>Thu Quỳnh</span>
                </div>
              ) : (
                <div className="HeaderSearch-account flex items-center">
                  <Avatar />
                  <div
                    className="HeaderSearch-account-link"
                    onClick={() => handleOpenAuthModal(ETypeAuthModal.SIGN_UP)}
                  >
                    Đăng Ký
                  </div>
                  /
                  <div
                    className="HeaderSearch-account-link"
                    onClick={() => handleOpenAuthModal(ETypeAuthModal.SIGN_IN)}
                  >
                    Đăng Nhập
                  </div>
                </div>
              )}
            </>
          )}

          <DropdownCustom
            visible={visibleCartDropdown}
            onClose={handleCloseCartDropdown}
            maxWidth="63rem"
            placement="bottomRight"
            overlay={<CartDropdown onClose={handleCloseCartDropdown} />}
          >
            <div className="HeaderSearch-cart" onClick={handleOpenCartDropdown}>
              <div className="HeaderSearch-cart-badge">2</div>
              <Icon name={EIconName.ShoppingBag} color={EIconColor.MAKO} />
            </div>
          </DropdownCustom>
        </div>
      </div>

      <AuthModal
        {...authModalState}
        onClickForgotPassword={handleOpenForgotPasswordModal}
        onClose={handleCloseAuthModal}
        onSignUpSuccess={handleSignUpSuccess}
        onSignInSuccess={handleSignInSuccess}
      />

      <ForgotPasswordModal
        {...forgotPasswordModalState}
        onClose={handleCloseForgotPasswordModal}
        onSuccess={handleSuccessForgotPasswordModal}
        onClickForgotPassword={handleOpenForgotPasswordModal}
      />
      {logoutModalState.visible ? (
        <ConfirmModal
          title="Đăng Xuất?"
          onSubmit={onSubmitLogout}
          visible={logoutModalState}
          onClose={handleCloseLogoutModal}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default HeaderSearch;
