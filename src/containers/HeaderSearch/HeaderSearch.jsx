import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'antd';

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
import { Link, navigate } from '@reach/router';
import { LayoutPaths, Paths } from '@/pages/routers';
import { EDeviceType } from '@/redux/reducers/ui';
import AuthHelpers from '@/services/auth-helpers';
import { EKeyStepForgotPasswordModal } from '@/containers/ForgotPasswordModal/ForgotPasswordModal.enums';
import { EProductAction } from '@/redux/actions/products/constants';
import { getListCartAction, getListProductSearchAction, getProfileAction } from '@/redux/actions';
import { ETypePage, ETypeNotification } from '@/utils/constants';
import { showNotification } from '@/utils/functions';

import './HeaderSearch.scss';

const HeaderSearch = () => {
  const dispatch = useDispatch();
  const windowType = useSelector((state) => state.uiState.device);
  const isMobile = windowType.type === EDeviceType.MOBILE;

  const atk = AuthHelpers.getAccessToken();

  const listCart = useSelector((state) => state.productState.carts) ?? [];
  const profile = useSelector((state) => state.profileState.profile) ?? {};
  const getListProductSearchLoading = useSelector((state) => state.loading[EProductAction.GET_LIST_PRODUCT_SEARCH]);

  const [authModalState, setAuthModalState] = useState({
    visible: false,
  });

  const [forgotPasswordModalState, setForgotPasswordModalState] = useState({
    visible: false,
  });

  const [visibleCartDropdown, setVisibleCartDropdown] = useState(false);
  const [visibleMenuDropdown, setVisibleMenuDropdown] = useState(false);

  const [getListProductSearchParamsRequest, setGetListProductSearchParamsRequest] = useState({
    page: ETypePage.DEFAULT_PAGE,
    pageSize: 500,
    name: '',
  });

  const handleChangeKeyword = (values) => {
    setGetListProductSearchParamsRequest({
      ...getListProductSearchParamsRequest,
      name: values,
    });
  };

  const handlerClickSearch = () => {
    handleCloseMenuDropdown();
    dispatch(getListProductSearchAction.request(getListProductSearchParamsRequest));
    navigate(`${Paths.SearchResult}?keyword=${getListProductSearchParamsRequest.name}`);
    setGetListProductSearchParamsRequest({
      ...getListProductSearchParamsRequest,
      name: '',
    });
  };

  const handleCartDropdownVisibleChange = (visible) => {
    setVisibleCartDropdown(visible);
  };

  const handleOpenCartDropdown = () => {
    if (atk) {
      setVisibleCartDropdown(true);
    } else {
      showNotification(ETypeNotification.WARNING, 'Vui lòng đăng nhập để tiếp tục thực hiện hành động này');
    }
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

  const handleOpenForgotPasswordModal = (defaultStep, prevAction, data) => {
    handleCloseAuthModal();
    setForgotPasswordModalState({ visible: true, defaultStep, prevAction, data });
  };

  const handleCloseForgotPasswordModal = (type) => {
    setForgotPasswordModalState({ visible: false });

    if (type) handleOpenAuthModal(type);
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

  const handleSignUpSuccess = (data) => {
    handleCloseAuthModal();
    handleOpenForgotPasswordModal(EKeyStepForgotPasswordModal.VETIFY_ACCOUNT, ETypeAuthModal.SIGN_UP, data);
  };

  const handleSignInSuccess = () => {
    getProfile();
    handleCloseAuthModal();
  };

  const renderDropdownMenuMobile = () => {
    return (
      <div className="HeaderSearch-menu-mobile">
        {!atk && (
          <>
            <div className="HeaderSearch-menu-mobile-item" onClick={() => handleOpenAuthModal(ETypeAuthModal.SIGN_UP)}>
              Đăng Ký
            </div>
            <div className="HeaderSearch-menu-mobile-item" onClick={() => handleOpenAuthModal(ETypeAuthModal.SIGN_IN)}>
              Đăng Nhập
            </div>
          </>
        )}

        <div className="HeaderSearch-menu-mobile-item">
          <Form className="HeaderSearch-menu-mobile-item-search flex items-center" onFinish={handlerClickSearch}>
            <Input
              placeholder="Tìm kiếm"
              value={getListProductSearchParamsRequest.name}
              onChange={handleChangeKeyword}
            />
            <Button
              type="primary"
              htmlType="submit"
              icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} loading={getListProductSearchLoading} />}
            />
          </Form>
        </div>
      </div>
    );
  };

  const getProfile = useCallback(() => {
    dispatch(getProfileAction.request());
  }, [dispatch]);

  const getListCart = useCallback(() => {
    dispatch(getListCartAction.request());
  }, [dispatch]);

  useEffect(() => {
    if (visibleCartDropdown) {
      getListCart();
    }
  }, [visibleCartDropdown]);

  useEffect(() => {
    if (atk) {
      getProfile();
      getListCart();
    }
  }, [atk]);

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
            <>
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
              {atk && (
                <Link to={LayoutPaths.Profile}>
                  <div className="HeaderSearch-avatar flex items-center">
                    <Avatar image={profile.avatar} />
                  </div>
                </Link>
              )}
            </>
          ) : (
            <>
              <Form className="HeaderSearch-search flex items-center" onFinish={handlerClickSearch}>
                <Input
                  placeholder="Tìm kiếm"
                  value={getListProductSearchParamsRequest.name}
                  onChange={handleChangeKeyword}
                />
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={getListProductSearchLoading}
                  icon={<Icon name={EIconName.Search} color={EIconColor.WHITE} />}
                />
              </Form>
              {atk ? (
                <Link to={LayoutPaths.Profile}>
                  <div className="HeaderSearch-avatar flex items-center">
                    <Avatar image={profile.avatar} />
                    <span>{profile.name}</span>
                  </div>
                </Link>
              ) : (
                <div className="HeaderSearch-account flex items-center">
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
          {atk ? (
            <DropdownCustom
              visible={visibleCartDropdown}
              onClose={handleCloseCartDropdown}
              maxWidth="63rem"
              placement="bottomRight"
              overlay={<CartDropdown onClose={handleCloseCartDropdown} />}
              onVisibleChange={handleCartDropdownVisibleChange}
            >
              <div className="HeaderSearch-cart" onClick={handleOpenCartDropdown}>
                <div className="HeaderSearch-cart-badge">{listCart?.length || 0}</div>
                <Icon name={EIconName.ShoppingBag} color={EIconColor.MAKO} />
              </div>
            </DropdownCustom>
          ) : (
            <div className="HeaderSearch-cart cursor-pointer" onClick={handleOpenCartDropdown}>
              <Icon name={EIconName.ShoppingBag} color={EIconColor.MAKO} />
            </div>
          )}
        </div>
      </div>

      <AuthModal
        {...authModalState}
        onClickForgotPassword={() =>
          handleOpenForgotPasswordModal(
            EKeyStepForgotPasswordModal.FIND_ACCOUNT,
            EKeyStepForgotPasswordModal.FIND_ACCOUNT,
          )
        }
        onClose={handleCloseAuthModal}
        onSignUpSuccess={handleSignUpSuccess}
        onSignInSuccess={handleSignInSuccess}
      />

      <ForgotPasswordModal {...forgotPasswordModalState} onClose={handleCloseForgotPasswordModal} />
    </div>
  );
};

export default HeaderSearch;
