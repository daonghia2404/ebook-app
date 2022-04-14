import React, { useState } from 'react';

import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import AddressListModal from '@/containers/AddressListModal';
import ShippingTypeModal from '@/containers/ShippingTypeModal';
import CheckoutSuccessModal from '@/containers/CheckoutSuccessModal';

import './CheckoutCard.scss';

const CheckoutCard = ({ countCart, subTotal, total }) => {
  const [visibleAddressListModal, setVisibleAddressListModal] = useState(false);
  const [visibleShippingTypeModal, setVisibleShippingTypeModal] = useState(false);
  const [visibleCheckoutSuccessModal, setVisibleCheckoutSuccessModal] = useState(false);
  const [address, setAddress] = useState({});

  const handleOpenAddressListModal = () => {
    setVisibleAddressListModal(true);
  };
  const handleCloseAddressListModal = (item) => {
    setAddress(item);
    setVisibleAddressListModal(false);
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

  return (
    <div className="CheckoutCard">
      <div className="CheckoutCard-header flex items-center justify-center">Thanh toán</div>
      <div className="CheckoutCard-body">
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
                <div className="CheckoutCard-address-item-info-name">{address?.name}</div>
                <div className="CheckoutCard-address-item-info-description">{address?.phone}</div>
                <div className="CheckoutCard-address-item-info-description">{address?.detailAddress}</div>
                <div className="CheckoutCard-address-item-info-change" onClick={handleOpenAddressListModal}>
                  Thay đổi
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="CheckoutCard-group">
          <div className="CheckoutCard-row flex justify-between">
            <div className="CheckoutCard-row-label">Hình thức giao hàng</div>
            <div className="CheckoutCard-row-label flex" onClick={handleOpenShippingTypeModalModal}>
              Giao nhanh <span>10.000đ</span> <Icon name={EIconName.AngleRight} color={EIconColor.FUN_GREEN} />
            </div>
          </div>
        </div>

        <div className="CheckoutCard-group">
          <div className="CheckoutCard-note">
            Lưu ý: Bạn chỉ có thể thanh toán online khi mua 2 loại sách khách nhau
          </div>
          <div className="CheckoutCard-row flex justify-between">
            <div className="CheckoutCard-row-label">{countCart} sản phẩm</div>
            <div className="CheckoutCard-row-label">{subTotal} đ</div>
          </div>

          <div className="CheckoutCard-row flex justify-between">
            <div className="CheckoutCard-row-label">Phí vận chuyển</div>
            <div className="CheckoutCard-row-label">10.000 đ</div>
          </div>

          <div className="CheckoutCard-row flex justify-between">
            <div className="CheckoutCard-row-label">Tổng giá tiền</div>
            <div className="CheckoutCard-row-label">
              <strong>{subTotal + 10000} đ</strong>
            </div>
          </div>
        </div>

        <div className="CheckoutCard-group">
          <div className="CheckoutCard-actions flex justify-between">
            <Button
              type="primary"
              size="large"
              title={
                <div className="CheckoutCard-actions-btn-title">
                  THANH TOÁN COD
                  <span>Thanh toán khi nhận hàng</span>
                </div>
              }
              onClick={handleOpenCheckoutSuccessModal}
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
              onClick={handleOpenCheckoutSuccessModal}
            />
          </div>
        </div>
      </div>

      <AddressListModal visible={visibleAddressListModal} onClose={handleCloseAddressListModal} />

      <ShippingTypeModal visible={visibleShippingTypeModal} onClose={handleCloseShippingTypeModalModal} />

      <CheckoutSuccessModal visible={visibleCheckoutSuccessModal} onClose={handleCloseCheckoutSuccessModal} />
    </div>
  );
};

export default CheckoutCard;
