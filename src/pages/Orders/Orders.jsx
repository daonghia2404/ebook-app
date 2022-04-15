import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OrdersList from '@/pages/Orders/OrdersList';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import OrdersDetail from '@/pages/Orders/OrderDetail';
import ReviewBookModal from '@/containers/ReviewBookModal';
import { ETypePage } from '@/utils/constants';

import './Orders.scss';
import { getOrdersAction } from '@/redux/actions';
import { EOrderStatus } from '@/services/api/order/enums';
import { EOrderAction } from '@/redux/actions/order/constants';
import { dataStatusOrdersTab } from '@/pages/Orders/Orders.data';
import classNames from 'classnames';
import Loading from '@/containers/Loading/Loading';
import Empty from '@/components/Empty/Empty';

const Orders = () => {
  const dispatch = useDispatch();

  const [getOrdersParamsRequest, setGetOrdersParamsRequest] = useState({
    page: ETypePage.DEFAULT_PAGE,
    pageSize: ETypePage.DEFAULT_PAGE_SIZE,
    status: EOrderStatus.DANG_XY_LY,
  });

  const gerOrdersLoading = useSelector((state) => state.loading[EOrderAction.GET_ORDERS]);
  const ordersState = useSelector((state) => state.orderState.orders?.records);
  const isEmpty = ordersState?.length === 0;

  const [orderDetailState, setOrderDetailState] = useState({
    data: null,
  });

  const handleClickOrderItem = (data) => {
    setOrderDetailState({ data });
  };

  const handleChangeOrderStatus = (status) => {
    setOrderDetailState({ data: null });
    setGetOrdersParamsRequest({
      ...getOrdersParamsRequest,
      page: ETypePage.DEFAULT_PAGE,
      status,
    });
  };

  const handleCancelOrderState = () => {
    handleChangeOrderStatus(EOrderStatus.DA_HUY);
  };

  const getOrdersData = useCallback(() => {
    dispatch(getOrdersAction.request(getOrdersParamsRequest));
  }, [dispatch, getOrdersParamsRequest]);

  useEffect(() => {
    getOrdersData();
  }, [getOrdersData]);

  return (
    <div className="Orders">
      <div className="Orders-steps flex">
        {dataStatusOrdersTab.map((item) => (
          <div
            className={classNames('Orders-steps-item', { active: item.value === getOrdersParamsRequest.status })}
            onClick={() => handleChangeOrderStatus(item.value)}
          >
            <div className="Orders-steps-item-icon">
              <Icon name={EIconName.Check} color={EIconColor.WHITE} />
            </div>
            <div className="Orders-steps-item-title">{item.label}</div>
            {/* <div className="Orders-steps-item-description">4:00 11/9/2021</div> */}
          </div>
        ))}
      </div>
      {orderDetailState.data ? (
        <OrdersDetail data={orderDetailState.data} />
      ) : (
        <>
          {gerOrdersLoading ? (
            <Loading />
          ) : (
            <>
              {isEmpty ? (
                <Empty />
              ) : (
                <OrdersList
                  data={ordersState}
                  onClickOrderItem={handleClickOrderItem}
                  onCancelOrder={handleCancelOrderState}
                />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Orders;
