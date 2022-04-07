import React, { useState } from 'react';

import Logo from '@/assets/images/logo.svg';
import Avatar from '@/components/Avatar';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Input from '@/components/Input';
import Button from '@/components/Button';
import AuthModal from '@/containers/AuthModal/AuthModal';

import './HeaderSearch.scss';
import { ETypeAuthModal } from '@/containers/AuthModal/AuthModal.enums';

const HeaderSearch = () => {
  const [authModalState, setAuthModalState] = useState({
    visible: false,
  });

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
            <img src={Logo} alt="" />
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
          <div className="HeaderSearch-cart">
            <div className="HeaderSearch-cart-badge">2</div>
            <Icon name={EIconName.ShoppingBag} color={EIconColor.MAKO} />
          </div>
        </div>
      </div>

      <AuthModal {...authModalState} onClose={handleCloseAuthModal} />
    </div>
  );
};

export default HeaderSearch;
