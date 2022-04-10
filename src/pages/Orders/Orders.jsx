import React, { useState } from 'react';

import OrdersList from '@/pages/Orders/OrdersList';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import OrdersDetail from '@/pages/Orders/OrderDetail';

import './Orders.scss';

const Orders = () => {
  const [orderDetailState, setOrderDetailState] = useState({
    data: null,
  });

  const handleClickOrderItem = (data) => {
    setOrderDetailState({ data });
  };

  return (
    <div className="Orders">
      <div className="Orders-steps flex">
        <div className="Orders-steps-item active">
          <div className="Orders-steps-item-icon">
            <Icon name={EIconName.Check} color={EIconColor.WHITE} />
          </div>
          <div className="Orders-steps-item-title">Đang xử lý</div>
          <div className="Orders-steps-item-description">4:00 11/9/2021</div>
        </div>

        <div className="Orders-steps-item">
          <div className="Orders-steps-item-icon">
            <Icon name={EIconName.Check} color={EIconColor.Check} />
          </div>
          <div className="Orders-steps-item-title">Đang giao</div>
        </div>

        <div className="Orders-steps-item">
          <div className="Orders-steps-item-icon">
            <Icon name={EIconName.Check} color={EIconColor.Check} />
          </div>
          <div className="Orders-steps-item-title">Đã hoàn thành</div>
        </div>

        <div className="Orders-steps-item">
          <div className="Orders-steps-item-icon">
            <Icon name={EIconName.Check} color={EIconColor.Check} />
          </div>
          <div className="Orders-steps-item-title">Đã hủy</div>
        </div>
      </div>
      {orderDetailState.data ? <OrdersDetail /> : <OrdersList onClickOrderItem={handleClickOrderItem} />}
    </div>
  );
};

export default Orders;
