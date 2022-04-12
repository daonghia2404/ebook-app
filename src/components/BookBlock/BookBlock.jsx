import React from 'react';

import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { navigate } from '@reach/router';
import { Paths } from '@/pages/routers';

import './BookBlock.scss';

const BookBlock = ({ image, owner, name, price, prePrice, onAddCart, onBuy }) => {
  return (
    <div className="BookBlock" onClick={() => navigate(Paths.BookDetail(1))}>
      <div className="BookBlock-image">
        <img src={image} alt="" />
      </div>
      <div className="BookBlock-title">{name}</div>
      {!owner && (
        <>
          <div className="BookBlock-price flex justify-center">
            <span>{price}</span>
            {prePrice && <del>{prePrice}</del>}
          </div>
          <div className="BookBlock-action flex justify-between">
            <Button
              size="large"
              type="primary"
              icon={<Icon name={EIconName.ShoppingBag} color={EIconColor.WHITE} />}
              onClick={onAddCart}
            />
            <Button size="large" className="outline-primary" title="Mua ngay" onClick={onBuy} />
          </div>
        </>
      )}
    </div>
  );
};

export default BookBlock;
