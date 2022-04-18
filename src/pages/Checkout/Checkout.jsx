import React, { useEffect } from 'react';
import { navigate, useLocation } from '@reach/router';

import CheckoutCard from '@/containers/CheckoutCard';
import { caculateTotal, formatMoneyVND, showNotification } from '@/utils/functions';
import { Paths } from '@/pages/routers';
import { ETypeNotification } from '@/utils/constants';
import { ETypeBook } from '@/common/static';

import './Checkout.scss';

const Checkout = () => {
  const location = useLocation();
  const { checkedCartData } = location.state;

  useEffect(() => {
    if (!checkedCartData || (checkedCartData && checkedCartData.length === 0)) {
      navigate(Paths.Home);
      showNotification(ETypeNotification.WARNING, 'Vui lòng chọn mua sản phẩm để thực hiện thanh toán');
    }
  }, [checkedCartData]);

  return (
    <div className="Checkout">
      <div className="container">
        <div className="Checkout-wrapper flex justify-between">
          <div className="Checkout-wrapper-item">
            <div className="Checkout-title">Danh sách sản phẩm</div>
            <div className="Checkout-list">
              {checkedCartData.map((item) => (
                <div key={item} className="Checkout-list-item flex">
                  <div className="Checkout-list-item-image">
                    <img src={item.product?.image} alt="" />
                  </div>
                  <div className="Checkout-list-item-info flex flex-col">
                    <div className="Checkout-list-item-info-title">
                      {item.product?.name} ({item.productType === ETypeBook.AUDIO_BOOK ? 'Ebook' : 'Sách giấy'}){' '}
                    </div>
                    <div className="Checkout-list-item-info-price">
                      {formatMoneyVND({ amount: item.product?.price, showSuffix: true })}
                    </div>
                    <div className="Checkout-list-item-info-amount">Số lượng : {item.amount}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="Checkout-wrapper-item">
            <CheckoutCard
              countCart={checkedCartData.length}
              subTotal={caculateTotal(checkedCartData)}
              carts={checkedCartData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
