import React from 'react';

import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './BookBlock.scss';

const BookBlock = ({ image, title, price, oldPrice, onAddCart, onBuy }) => {
  return (
    <div className="BookBlock">
      <div className="BookBlock-image">
        <img src={image} alt="" />
      </div>
      <div className="BookBlock-title">{title}</div>
      <div className="BookBlock-price flex justify-center">
        <span>{price}</span>
        {oldPrice && <del>{oldPrice}</del>}
      </div>
      <div className="BookBlock-action flex justify-between">
        <Button size="large" type="primary" icon={<Icon name={EIconName.ShoppingBag} color={EIconColor.WHITE} />} />
        <Button size="large" className="outline-primary" title="Mua ngay" />
      </div>
    </div>
  );
};

export default BookBlock;
