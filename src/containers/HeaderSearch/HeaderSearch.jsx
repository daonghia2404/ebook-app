import React, { useState } from 'react';

import Logo from '@/assets/images/logo.svg';
import Avatar from '@/components/Avatar';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Input from '@/components/Input';
import Button from '@/components/Button';
import AuthModal from '@/containers/AuthModal/AuthModal';

import './HeaderSearch.scss';
import { ETypeAuthModal } from '@/containers/AuthModal/AuthModal.enums';
import DropdownCustom from '@/components/DropdownCustom';
import CartDropdown from '@/containers/CartDropdown/CartDropdown';
import ForgotPasswordModal from '@/containers/ForgotPasswordModal';
import { Link } from '@reach/router';
import { Paths } from '@/pages/routers';

const HeaderSearch = () => {
  const [authModalState, setAuthModalState] = useState({
    visible: false,
  });
  const [forgotPasswordModalState, setForgotPasswordModalState] = useState({
    visible: false,
  });
  const [visibleCartDropdown, setVisibleCartDropdown] = useState(false);

  const handleCartDropdownVisibleChange = (visible) => {
    setVisibleCartDropdown(visible);
  };
  const handleOpenCartDropdown = () => {
    setVisibleCartDropdown(true);
  };
  const handleCloseCartDropdown = () => {
    setVisibleCartDropdown(false);
  };

  const handleOpenForgotPasswordModal = () => {
    handleCloseAuthModal();
    setForgotPasswordModalState({ visible: true });
  };

  const handleCloseForgotPasswordModal = () => {
    setForgotPasswordModalState({ visible: false });
  };

  const handleSuccessForgotPasswordModal = () => {
    handleCloseForgotPasswordModal();
    handleOpenAuthModal(ETypeAuthModal.SIGN_IN);
  };

  const handleOpenAuthModal = (type) => {
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

  return (
    <div className="HeaderSearch">
      <div className="container">
        <div className="HeaderSearch-wrapper flex items-center justify-center">
          <div className="HeaderSearch-logo">
            <Link to={Paths.Home}>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="HeaderSearch-search flex items-center">
            <Input placeholder="Tìm kiếm" />
            <Button type="primary" icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} />} />
          </div>
          <div className="HeaderSearch-account flex items-center">
            <Avatar />
            <div className="HeaderSearch-account-link" onClick={() => handleOpenAuthModal(ETypeAuthModal.SIGN_UP)}>
              Đăng Ký
            </div>
            /
            <div className="HeaderSearch-account-link" onClick={() => handleOpenAuthModal(ETypeAuthModal.SIGN_IN)}>
              Đăng Nhập
            </div>
          </div>
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
      />

      <ForgotPasswordModal
        {...forgotPasswordModalState}
        onClose={handleCloseForgotPasswordModal}
        onSuccess={handleSuccessForgotPasswordModal}
      />
    </div>
  );
};

export default HeaderSearch;
