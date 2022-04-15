import { EOrderStatus } from '@/services/api/order/enums';

export const dataStatusOrdersTab = [
  { value: EOrderStatus.DANG_XY_LY, label: 'Đang xử lý' },
  { value: EOrderStatus.DANG_GIAO, label: 'Đang giao' },
  { value: EOrderStatus.HOAN_THANH, label: 'Hoàn thành' },
  { value: EOrderStatus.DA_HUY, label: 'Đã huỷ' },
  { value: EOrderStatus.THAT_BAI, label: 'Thất bại' },
];
