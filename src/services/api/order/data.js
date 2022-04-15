import { EOrderType } from '@/services/api/order/enums';

export const dataOrderTypeOptions = [
  { title: 'Thanh toán COD', description: 'Thanh toán khi nhận hàng', value: EOrderType.COD_ORDER },
  { title: 'Thanh toán Online', description: 'Thanh toán điện tử', value: EOrderType.ONLINE_ORDER },
];
