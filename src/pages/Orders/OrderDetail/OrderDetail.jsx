import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToCartAction, cancelOrderAction, getOrderAction } from '@/redux/actions';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import ConfirmModal from '@/containers/ConfirmModal/ConfirmModal';
import { EOrderAction } from '@/redux/actions/order/constants';
import Loading from '@/containers/Loading/Loading';
import { formatISODateToDateTime, formatMoneyVND, showNotification } from '@/utils/functions';
import { dataStatusOrdersTab } from '@/pages/Orders/Orders.data';
import { dataOrderTypeOptions } from '@/services/api/order/data';
import { EOrderStatus, EOrderType } from '@/services/api/order/enums';
import { ETypeNotification } from '@/utils/constants';
import { ETypeBook } from '@/common/static';
import ReviewBookModal from '@/containers/ReviewBookModal';
import { EProductAction } from '@/redux/actions/products/constants';

import './OrderDetail.scss';

const OrderDetail = ({ data, onCancelOrder }) => {
  const dispatch = useDispatch();

  const [visibleCancelOrderModal, setVisibleCancelOrderModal] = useState(false);
  const [reviewBookModalState, setReviewBookModalState] = useState({
    visible: false,
    data: undefined,
  });
  const [disabledRebuy, setDisabledRebuy] = useState(false);

  const orderState = useSelector((state) => state.orderState.order) || {};
  const getOrderLoading = useSelector((state) => state.loading[EOrderAction.GET_ORDER]);
  const cancelOrderLoading = useSelector((state) => state.loading[EOrderAction.CANCEL_ORDER]);
  const addCartLoading = useSelector((state) => state.loading[EProductAction.ADD_TO_CART_PRODUCT]);

  const orderType = dataOrderTypeOptions.find((item) => item.value === orderState.orderType);

  const handleOpenCancelOrder = () => {
    setVisibleCancelOrderModal(true);
  };
  const handleCloseCancelOrder = () => {
    setVisibleCancelOrderModal(false);
  };
  const handleSubmitCancelOrder = () => {
    dispatch(cancelOrderAction.request(data._id, handleCancelOrderSuccess));
  };
  const handleOpenReviewBookModal = (data) => {
    setReviewBookModalState({ visible: true, data });
  };
  const handleCloseReviewBookModal = () => {
    setReviewBookModalState({ visible: false });
  };

  const handleCancelOrderSuccess = () => {
    showNotification(ETypeNotification.SUCCESS, 'Hu??? ????n h??ng th??nh c??ng');
    handleCloseCancelOrder();
    onCancelOrder?.();
  };

  const handleClickRebuy = () => {
    orderState.products.forEach((item) => {
      const body = { product: item.product, amount: 1 };
      dispatch(addToCartAction.request(body, handleAddBookToCartSuccess));
    });
  };

  const handleAddBookToCartSuccess = () => {
    setDisabledRebuy(true);
    showNotification(ETypeNotification.SUCCESS, '???? th??m t???t c??? s???n ph???m mua l???i v??o gi??? h??ng');
  };

  const getOrderData = useCallback(() => {
    if (data._id) dispatch(getOrderAction.request(data._id));
  }, [dispatch, data]);

  useEffect(() => {
    getOrderData();
  }, [getOrderData]);

  return (
    <div className="OrderDetail">
      {getOrderLoading ? (
        <Loading />
      ) : (
        <>
          <div className="OrderDetail-overview flex flex-wrap">
            <div className="OrderDetail-overview-item flex">
              <div className="OrderDetail-overview-item-title">M?? ????n h??ng:</div>
              <div className="OrderDetail-overview-item-description">{orderState.orderCode}</div>
            </div>
            <div className="OrderDetail-overview-item flex">
              <div className="OrderDetail-overview-item-title">Ng??y ?????t h??ng:</div>
              <div className="OrderDetail-overview-item-description">
                {formatISODateToDateTime(orderState.createdAt)}
              </div>
            </div>
            <div className="OrderDetail-overview-item flex">
              <div className="OrderDetail-overview-item-title">????n h??ng:</div>
              <div className="OrderDetail-overview-item-description">
                {dataStatusOrdersTab.find((item) => item.value === orderState.status)?.label}
              </div>
            </div>
          </div>

          <div className="OrderDetail-main">
            {orderState?.products?.map((item) => {
              return (
                <div className="OrdersList-item flex" key={item._id} onClick={() => onClickOrderItem?.(item)}>
                  <div className="OrdersList-item-image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="OrdersList-item-info">
                    <div className="OrdersList-item-info-title">
                      <span>{item.type === ETypeBook.PAPER_BOOK ? 'S??ch gi???y' : 'Ebook'}: </span>
                      {item.name}
                    </div>
                    <div className="OrdersList-item-info-amount">S??? l?????ng: {item.amount}</div>
                    <div className="OrdersList-item-info-price">
                      Gi??: {formatMoneyVND({ amount: item.price, showSuffix: true })}
                    </div>
                    {orderState.status === EOrderStatus.HOAN_THANH && !item.isRated && (
                      <div className="OrdersList-item-info-review flex justify-end">
                        <Button
                          type="primary"
                          title="????NH GI??"
                          uppercase
                          size="small"
                          onClick={() => handleOpenReviewBookModal(item)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="OrderDetail-address">
              <div className="OrderDetail-address-title">?????a ch??? c???a b???n</div>
              <div className="OrderDetail-address-card flex">
                <div className="OrderDetail-address-card-icon">
                  <Icon name={EIconName.MapMarkerFill} color={EIconColor.GRENADIER} />
                </div>
                <div className="OrderDetail-address-card-info flex flex-wrap">
                  <div className="OrderDetail-address-card-info-item name">{orderState?.address?.name}</div>
                  <div className="OrderDetail-address-card-info-item">{orderState?.address?.phone}</div>
                  <div className="OrderDetail-address-card-info-item">
                    {orderState?.address?.detailAddress} {orderState?.address?.ward} {orderState?.address?.district}{' '}
                    {orderState?.address?.province}
                  </div>
                </div>
              </div>
            </div>

            <div className="OrderDetail-table">
              {/* <div className="OrderDetail-table-row header flex justify-between">
                <div className="OrderDetail-table-row-text">
                  <strong>H??nh th???c giao h??ng</strong>
                </div>
                <div className="OrderDetail-table-row-text">
                  <small>
                    Giao nhanh <span>10.000??</span>
                  </small>
                </div>
              </div> */}
              <div className="OrderDetail-table-row flex justify-between">
                <div className="OrderDetail-table-row-text">{orderState?.products?.length} s???n ph???m</div>
                <div className="OrderDetail-table-row-text">
                  {formatMoneyVND({ amount: orderState.totalPriceProduct, showSuffix: true })}
                </div>
              </div>
              <div className="OrderDetail-table-row flex justify-between">
                <div className="OrderDetail-table-row-text">Ph?? v???n chuy???n</div>
                <div className="OrderDetail-table-row-text">
                  {formatMoneyVND({ amount: orderState.totalFee, showSuffix: true })}
                </div>
              </div>
              <div className="OrderDetail-table-row flex justify-between">
                <div className="OrderDetail-table-row-text">T???ng gi?? ti???n</div>
                <div className="OrderDetail-table-row-text">
                  <strong>{formatMoneyVND({ amount: orderState.totalPrice, showSuffix: true })}</strong>
                </div>
              </div>

              <div className="OrderDetail-table-row shipping-type flex justify-between">
                <div className="OrderDetail-table-row-text">
                  <span>
                    <strong className="uppercase">{orderType?.title}</strong>
                  </span>
                </div>
                <div className="OrderDetail-table-row-text">
                  <span>
                    <small>{orderType?.description}</small>
                  </span>
                </div>
              </div>
              {orderState.status === EOrderStatus.DANG_XY_LY && orderState.orderType !== EOrderType.ONLINE_ORDER && (
                <div className="OrderDetail-table-row cancel">
                  <Button type="primary" title="Hu??? ????n" uppercase size="large" onClick={handleOpenCancelOrder} />
                </div>
              )}
              {[EOrderStatus.HOAN_THANH, EOrderStatus.DA_HUY, EOrderStatus.THAT_BAI].includes(orderState.status) && (
                <div className="OrderDetail-table-row cancel">
                  <Button
                    type="primary"
                    title="Mua l???i"
                    uppercase
                    size="large"
                    loading={addCartLoading}
                    onClick={handleClickRebuy}
                    disabled={disabledRebuy}
                  />
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <ReviewBookModal {...reviewBookModalState} onClose={handleCloseReviewBookModal} />

      <ConfirmModal
        visible={visibleCancelOrderModal}
        onClose={handleCloseCancelOrder}
        loading={cancelOrderLoading}
        onSubmit={handleSubmitCancelOrder}
        title="X??C NH???N HU??? ????N H??NG"
      />
    </div>
  );
};

export default OrderDetail;
