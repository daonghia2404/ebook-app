import React from 'react';

import ImageBook from '@/assets/images/image-book-1.png';

import './OrdersList.scss';

const OrdersList = () => {
  return (
    <div className="OrdersList">
      {[1, 2, 3, 4].map((item) => (
        <div className="OrdersList-item flex" key={item}>
          <div className="OrdersList-item-image">
            <img src={ImageBook} alt="" />
          </div>
          <div className="OrdersList-item-info">
            <div className="OrdersList-item-info-title">
              <span>Sách giấy: </span>
              Đắc nhân tâm
            </div>
            <div className="OrdersList-item-info-amount">3 sản phẩm</div>
            <div className="OrdersList-item-info-time">Ngày đặt hàng: 4:00 11/9/2021</div>
            <div className="OrdersList-item-info-price">Giá: 600.000 đ</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersList;
