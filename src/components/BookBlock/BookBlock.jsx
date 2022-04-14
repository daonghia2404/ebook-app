import React from 'react';

import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { navigate } from '@reach/router';
import { Paths } from '@/pages/routers';
import { ETypeBook } from '@/common/static';
import { formatMoneyVND } from '@/utils/functions';

import './BookBlock.scss';

const BookBlock = ({ image, type, owner, name, price, prePrice, onAddCart, onBuy, _id }) => {
  const handleClickBookBlock = () => {
    const isPaperBook = type === ETypeBook.PAPER_BOOK;
    if (isPaperBook) {
      navigate(Paths.BookDetail(_id));
    } else {
      navigate(Paths.BookListenDetail(_id));
    }
  };

  return (
    <div className="BookBlock">
      <div className="BookBlock-image" onClick={handleClickBookBlock}>
        <img src={image} alt="" />
      </div>
      <div className="BookBlock-title" onClick={handleClickBookBlock}>
        {name}
      </div>
      {!owner && (
        <>
          <div className="BookBlock-price flex justify-center">
            <span>{formatMoneyVND({ amount: price, showSuffix: true })}</span>
            {prePrice && <del>{formatMoneyVND({ amount: prePrice, showSuffix: true })}</del>}
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
