import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import AddressListModal from '@/containers/AddressListModal';
import ShippingTypeModal from '@/containers/ShippingTypeModal';
import CheckoutSuccessModal from '@/containers/CheckoutSuccessModal';
import {
  caculateAction,
  createCodOrderAction,
  createOnlineOrderAction,
  getAddressDefaultAction,
} from '@/redux/actions';
import { ETypeNotification } from '@/utils/constants';
import { formatMoneyVND, showNotification } from '@/utils/functions';
import { ETypeBook } from '@/common/static';

import './CheckoutCard.scss';
import { navigate } from '@reach/router';
import { Paths } from '@/pages/routers';
import { EOrderAction } from '@/redux/actions/order/constants';

const CheckoutCard = ({ countCart, subTotal, carts = [] }) => {
  const dispatch = useDispatch();

  const feeship = useSelector((state) => state.addressState.feeShip);
  const addressDefault = useSelector((state) => state.addressState.addressDefault);

  const [visibleAddressListModal, setVisibleAddressListModal] = useState(false);
  const [visibleShippingTypeModal, setVisibleShippingTypeModal] = useState(false);
  const [visibleCheckoutSuccessModal, setVisibleCheckoutSuccessModal] = useState(false);
  const [currentAddress, setCurrentAddress] = useState({});

  const createOrderCodLoading = useSelector((state) => state.loading[EOrderAction.CREATE_COD_ORDER]);
  const createOrderOnlineLoading = useSelector((state) => state.loading[EOrderAction.CREATE_ONLINE_ORDER]);

  const isOnlyPayOnline = carts.some((item) => item.productType === ETypeBook.AUDIO_BOOK);
  const isExistedPaperBook = carts.some((item) => item.productType === ETypeBook.PAPER_BOOK);

  const handleOpenAddressListModal = () => {
    setVisibleAddressListModal(true);
  };

  const handleCloseAddressListModal = (item) => {
    setVisibleAddressListModal(false);
    getFeeShipData();
  };

  const handleCheckedAddress = (data) => {
    setCurrentAddress(data);
    handleCloseAddressListModal();
  };

  const handleOpenShippingTypeModalModal = () => {
    setVisibleShippingTypeModal(true);
  };

  const handleCloseShippingTypeModalModal = () => {
    setVisibleShippingTypeModal(false);
  };

  const handleOpenCheckoutSuccessModal = () => {
    setVisibleCheckoutSuccessModal(true);
  };

  const handleCloseCheckoutSuccessModal = () => {
    setVisibleCheckoutSuccessModal(false);
  };

  const getFeeShipData = useCallback(() => {
    if (isExistedPaperBook && currentAddress?._id) {
      const body = {
        carts: carts?.map((item) => item._id),
        addressId: currentAddress._id,
      };
      dispatch(caculateAction.request(body));
    }
  }, [dispatch, currentAddress]);

  const handleApplyAddress = (data) => {
    setCurrentAddress(data);
    handleCloseAddressListModal();
  };

  const handleCreateCodOrder = () => {
    if (currentAddress?._id) {
      const body = {
        carts: carts?.map((item) => item._id),
        addressId: currentAddress._id,
      };
      dispatch(createCodOrderAction.request(body, handleCreateCodOrderSuccess));
    }
  };

  const handleCreateCodOrderSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Tạo mới đơn hàng thành công');
    navigate(Paths.Home);
  };

  const handleCreateOnlineOrder = () => {
    if (currentAddress?._id) {
      const body = {
        carts: carts?.map((item) => item._id),
        addressId: currentAddress._id,
      };
      dispatch(createOnlineOrderAction.request(body, handleCreateOnlineOrderSuccess));
    }
  };

  const handleCreateOnlineOrderSuccess = (response) => {
    window.open(response.data.url);
  };

  const getDefaultAddress = useCallback(() => {
    dispatch(getAddressDefaultAction.request());
  }, [dispatch]);

  useEffect(() => {
    getFeeShipData();
  }, [getFeeShipData]);

  useEffect(() => {
    setCurrentAddress(addressDefault);
  }, [addressDefault]);

  useEffect(() => {
    getDefaultAddress();
  }, [getDefaultAddress]);

  return (
    <div className="CheckoutCard">
      <div className="CheckoutCard-header flex items-center justify-center">Thanh toán</div>
      <div className="CheckoutCard-body">
        {isExistedPaperBook && (
          <div className="CheckoutCard-group">
            <div className="CheckoutCard-row flex justify-between">
              <div className="CheckoutCard-row-label">Địa chỉ của bạn</div>
            </div>
            <div className="CheckoutCard-address flex">
              <div className="CheckoutCard-address-item">
                <div className="CheckoutCard-address-item-icon">
                  <Icon name={EIconName.MapMarkerFill} color={EIconColor.GRENADIER} />
                </div>
              </div>
              <div className="CheckoutCard-address-item">
                <div className="CheckoutCard-address-item-info">
                  <div className="CheckoutCard-address-item-info-name">
                    {currentAddress?.name || 'Không có địa chỉ mặc định'}
                  </div>
                  {currentAddress?.phone && (
                    <div className="CheckoutCard-address-item-info-description">{currentAddress.phone}</div>
                  )}
                  {currentAddress?.detailAddress && (
                    <div className="CheckoutCard-address-item-info-description">{currentAddress.detailAddress}</div>
                  )}
                  <div className="CheckoutCard-address-item-info-change" onClick={handleOpenAddressListModal}>
                    Thay đổi
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <div className="CheckoutCard-group">
          <div className="CheckoutCard-row flex justify-between">
            <div className="CheckoutCard-row-label">Hình thức giao hàng</div>
            <div className="CheckoutCard-row-label flex" onClick={handleOpenShippingTypeModalModal}>
              Giao nhanh <span>10.000đ</span> <Icon name={EIconName.AngleRight} color={EIconColor.FUN_GREEN} />
            </div>
          </div>
        </div> */}

        <div className="CheckoutCard-group">
          <div className="CheckoutCard-note">Lưu ý: Bạn chỉ có thể thanh toán COD khi mua ít nhất một sách giấy</div>
          <div className="CheckoutCard-row flex justify-between">
            <div className="CheckoutCard-row-label">{countCart} sản phẩm</div>
            <div className="CheckoutCard-row-label">{formatMoneyVND({ amount: subTotal, showSuffix: true })}</div>
          </div>

          <div className="CheckoutCard-row flex justify-between">
            <div className="CheckoutCard-row-label">Phí vận chuyển</div>
            <div className="CheckoutCard-row-label">{formatMoneyVND({ amount: feeship, showSuffix: true })}</div>
          </div>

          <div className="CheckoutCard-row flex justify-between">
            <div className="CheckoutCard-row-label">Tổng giá tiền</div>
            <div className="CheckoutCard-row-label">
              <strong>{formatMoneyVND({ amount: subTotal + feeship, showSuffix: true })}</strong>
            </div>
          </div>
        </div>

        <div className="CheckoutCard-group">
          <div className="CheckoutCard-actions flex justify-between">
            <Button
              type="primary"
              size="large"
              disabled={isOnlyPayOnline}
              title={
                <div className="CheckoutCard-actions-btn-title">
                  THANH TOÁN COD
                  <span>Thanh toán khi nhận hàng</span>
                </div>
              }
              onClick={handleCreateCodOrder}
              loading={createOrderCodLoading}
            />

            <Button
              type="primary"
              size="large"
              title={
                <div className="CheckoutCard-actions-btn-title">
                  THANH TOÁN ONLINE
                  <span>9PAY</span>
                </div>
              }
              onClick={handleCreateOnlineOrder}
              loading={createOrderOnlineLoading}
            />
          </div>
        </div>
      </div>

      <AddressListModal
        currentAddress={currentAddress}
        visible={visibleAddressListModal}
        onClose={handleCloseAddressListModal}
        onCheckedAddress={handleCheckedAddress}
        onSubmit={handleApplyAddress}
      />

      <ShippingTypeModal visible={visibleShippingTypeModal} onClose={handleCloseShippingTypeModalModal} />

      <CheckoutSuccessModal visible={visibleCheckoutSuccessModal} onClose={handleCloseCheckoutSuccessModal} />
    </div>
  );
};

export default CheckoutCard;
