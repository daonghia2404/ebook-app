import React, { useEffect } from 'react';

import { Paths } from '@/pages/routers';
import { decodeResultPayment, formatISODateToDateTime, formatMoneyVND } from '@/utils/functions';
import { navigate, useLocation } from '@reach/router';

import './PaymentResult.scss';
import { paymentMethod, paymentStatus } from '@/common/data';
import Button from '@/components/Button';

const PaymentResult = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const result = query.get('result');

  const resultData = JSON.parse(decodeResultPayment(result));

  console.log(resultData);

  useEffect(() => {
    if (!result) navigate(Paths.Home);
  }, [result]);

  return (
    <div className="PaymentResult">
      <div className="container">
        <div className="PaymentResult-wrapper">
          <div className="PaymentResult-title">Kết quả giao dịch</div>

          <div className="PaymentResult-table">
            <div className="PaymentResult-row flex justify-between">
              <div className="PaymentResult-text">Trạng thái</div>
              <div className="PaymentResult-text">
                {paymentStatus.find((item) => item.value === resultData.status)?.label || '-'}
              </div>
            </div>

            <div className="PaymentResult-row flex justify-between">
              <div className="PaymentResult-text">Tên</div>
              <div className="PaymentResult-text">{resultData.card_info?.card_name || '-'}</div>
            </div>

            <div className="PaymentResult-row flex justify-between">
              <div className="PaymentResult-text">Số tiền</div>
              <div className="PaymentResult-text">
                {resultData.amount ? formatMoneyVND({ amount: resultData.amount }) : '-'}
              </div>
            </div>

            <div className="PaymentResult-row flex justify-between">
              <div className="PaymentResult-text">Đơn vị</div>
              <div className="PaymentResult-text">{resultData.currency || '-'}</div>
            </div>

            <div className="PaymentResult-row flex justify-between">
              <div className="PaymentResult-text">Ngân hàng</div>
              <div className="PaymentResult-text">{resultData.bank || '-'}</div>
            </div>

            <div className="PaymentResult-row flex justify-between">
              <div className="PaymentResult-text">Loại thẻ</div>
              <div className="PaymentResult-text">{resultData.card_info?.card_brand || '-'}</div>
            </div>

            <div className="PaymentResult-row flex justify-between">
              <div className="PaymentResult-text">Số thẻ</div>
              <div className="PaymentResult-text">{resultData.card_info?.card_number || '-'}</div>
            </div>

            <div className="PaymentResult-row flex justify-between">
              <div className="PaymentResult-text">Phương thức thanh toán</div>
              <div className="PaymentResult-text">
                {paymentMethod.find((item) => item.value === resultData.method)?.label || '-'}
              </div>
            </div>

            <div className="PaymentResult-row flex justify-between">
              <div className="PaymentResult-text">Ngày thanh toán</div>
              <div className="PaymentResult-text">
                {resultData.created_at ? formatISODateToDateTime(resultData.created_at) : '-'}
              </div>
            </div>
          </div>

          <Button title="Quay về trang chủ" uppercase size="large" type="primary" link={Paths.Home} />
        </div>
      </div>
    </div>
  );
};

export default PaymentResult;
