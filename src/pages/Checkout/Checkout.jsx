import React, { useEffect } from 'react';

import ImageBook from '@/assets/images/image-book-1.png';
import { EAddressAction } from '@/redux/actions/auth/constants';
import './Checkout.scss';
import CheckoutCard from '@/containers/CheckoutCard';
import { useSelector } from 'react-redux';
import { caculateTotal, showNotification } from '@/utils/functions';

const Checkout = () => {
  const listCart = useSelector((state) => state.productState.carts) ?? [];
  return (
    <div className="Checkout">
      <div className="container">
        <div className="Checkout-wrapper flex justify-between">
          <div className="Checkout-wrapper-item">
            <div className="Checkout-title">Danh sách sản phẩm</div>
            <div className="Checkout-list">
              {listCart &&
                listCart.map((item) => (
                  <div key={item} className="Checkout-list-item flex">
                    <div className="Checkout-list-item-image">
                      <img src={item.product.image} alt="" />
                    </div>
                    <div className="Checkout-list-item-info flex flex-col">
                      <div className="Checkout-list-item-info-title">
                        {item.product.name} ({item.productType == 'AUDIO_BOOK' ? 'Sách nói' : 'Sách viết'}){' '}
                      </div>
                      <div className="Checkout-list-item-info-price">{item.product.price} đ</div>
                      <div className="Checkout-list-item-info-amount">Số lượng : {item.amount}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="Checkout-wrapper-item">
            <CheckoutCard countCart={listCart.length} subTotal={caculateTotal(listCart)} carts={listCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
