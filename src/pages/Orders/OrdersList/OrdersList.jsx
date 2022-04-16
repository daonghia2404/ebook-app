import React from 'react';

import { formatISODateToDateTime, formatMoneyVND } from '@/utils/functions';
import { ETypeBook } from '@/common/static';

import './OrdersList.scss';

const OrdersList = ({ data = [], onClickOrderItem }) => {
  return (
    <div className="OrdersList">
      {data.map((item) => {
        const firstProduct = item.products[0];
        return (
          <div className="OrdersList-item flex" key={item} onClick={() => onClickOrderItem?.(item)}>
            <div className="OrdersList-item-image">
              <img src={firstProduct.image} alt="" />
            </div>
            <div className="OrdersList-item-info">
              <div className="OrdersList-item-info-title">
                {item.products.map((product, productIndex) => {
                  const isNotLastItem = productIndex !== item.products.length - 1;
                  return (
                    <>
                      <span>{product.type === ETypeBook.PAPER_BOOK ? 'Sách giấy' : 'Ebook'}: </span>
                      {product.name}
                      {isNotLastItem && ', '}
                    </>
                  );
                })}
              </div>
              <div className="OrdersList-item-info-amount">{item.products.length} sản phẩm</div>
              <div className="OrdersList-item-info-time">Ngày đặt hàng: {formatISODateToDateTime(item.createdAt)}</div>
              <div className="OrdersList-item-info-price">
                Giá: {formatMoneyVND({ amount: item.totalPrice, showSuffix: true })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrdersList;
