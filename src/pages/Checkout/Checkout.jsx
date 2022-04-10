import React from 'react';

import ImageBook from '@/assets/images/image-book-1.png';

import './Checkout.scss';
import CheckoutCard from '@/containers/CheckoutCard';

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="container">
        <div className="Checkout-wrapper flex justify-between">
          <div className="Checkout-wrapper-item">
            <div className="Checkout-title">Danh sách sản phẩm</div>
            <div className="Checkout-list">
              {[1, 2, 3].map((item) => (
                <div key={item} className="Checkout-list-item flex">
                  <div className="Checkout-list-item-image">
                    <img src={ImageBook} alt="" />
                  </div>
                  <div className="Checkout-list-item-info flex flex-col">
                    <div className="Checkout-list-item-info-title">Tư Duy Tích Cực (Ebook) </div>
                    <div className="Checkout-list-item-info-price">99.500 đ</div>
                    <div className="Checkout-list-item-info-amount">Số lượng : 1</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="Checkout-wrapper-item">
            <CheckoutCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
