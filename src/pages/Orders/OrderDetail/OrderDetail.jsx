import React, { useState } from 'react';

import OrdersList from '@/pages/Orders/OrdersList';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import ConfirmModal from '@/containers/ConfirmModal/ConfirmModal';

import './OrderDetail.scss';

const OrderDetail = () => {
  const [visibleCancelOrderModal, setVisibleCancelOrderModal] = useState(false);

  const handleOpenCancelOrder = () => {
    setVisibleCancelOrderModal(true);
  };
  const handleCloseCancelOrder = () => {
    setVisibleCancelOrderModal(false);
  };
  const handleSubmitCancelOrder = () => {
    handleCloseCancelOrder();
  };
  return (
    <div className="OrderDetail">
      <div className="OrderDetail-overview flex flex-wrap">
        <div className="OrderDetail-overview-item flex">
          <div className="OrderDetail-overview-item-title">Mã đơn hàng:</div>
          <div className="OrderDetail-overview-item-description">102949HG</div>
        </div>
        <div className="OrderDetail-overview-item flex">
          <div className="OrderDetail-overview-item-title">Ngày đặt hàng:</div>
          <div className="OrderDetail-overview-item-description">4:30 29/10/2020</div>
        </div>
        <div className="OrderDetail-overview-item flex">
          <div className="OrderDetail-overview-item-title">Đơn hàng:</div>
          <div className="OrderDetail-overview-item-description">Đang xử lý</div>
        </div>
      </div>

      <div className="OrderDetail-main">
        <OrdersList />

        <div className="OrderDetail-address">
          <div className="OrderDetail-address-title">Địa chỉ của bạn</div>
          <div className="OrderDetail-address-card flex">
            <div className="OrderDetail-address-card-icon">
              <Icon name={EIconName.MapMarkerFill} color={EIconColor.GRENADIER} />
            </div>
            <div className="OrderDetail-address-card-info flex flex-wrap">
              <div className="OrderDetail-address-card-info-item name">Hoang Huy</div>
              <div className="OrderDetail-address-card-info-item">0966 123 456</div>
              <div className="OrderDetail-address-card-info-item">Số 123 Nguyễn Trãi, Thanh Xuân, Hà Nội</div>
            </div>
          </div>
        </div>

        <div className="OrderDetail-table">
          <div className="OrderDetail-table-row header flex justify-between">
            <div className="OrderDetail-table-row-text">
              <strong>Hình thức giao hàng</strong>
            </div>
            <div className="OrderDetail-table-row-text">
              <small>
                Giao nhanh <span>10.000đ</span>
              </small>
            </div>
          </div>
          <div className="OrderDetail-table-row flex justify-between">
            <div className="OrderDetail-table-row-text">2 sản phẩm</div>
            <div className="OrderDetail-table-row-text">2.000.000 đ</div>
          </div>
          <div className="OrderDetail-table-row flex justify-between">
            <div className="OrderDetail-table-row-text">Phí vận chuyển</div>
            <div className="OrderDetail-table-row-text">10.000 đ</div>
          </div>
          <div className="OrderDetail-table-row flex justify-between">
            <div className="OrderDetail-table-row-text">Tổng giá tiền</div>
            <div className="OrderDetail-table-row-text">
              <strong>1.900.000 đ</strong>
            </div>
          </div>

          <div className="OrderDetail-table-row shipping-type flex justify-between">
            <div className="OrderDetail-table-row-text">
              <span>
                <strong>THANH TOÁN COD</strong>
              </span>
            </div>
            <div className="OrderDetail-table-row-text">
              <span>
                <small>Thanh toán khi nhận hàng</small>
              </span>
            </div>
          </div>
          <div className="OrderDetail-table-row cancel">
            <Button type="primary" title="HỦY ĐƠN" uppercase size="large" onClick={handleOpenCancelOrder} />
          </div>
        </div>
      </div>

      <ConfirmModal
        visible={visibleCancelOrderModal}
        onClose={handleCloseCancelOrder}
        onSubmit={handleSubmitCancelOrder}
        title="XÁC NHẬN HUỶ ĐƠN HÀNG"
      />
    </div>
  );
};

export default OrderDetail;
