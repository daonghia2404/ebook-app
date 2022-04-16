import ImageBook1 from '@/assets/images/image-book-1.png';
import ImageBook2 from '@/assets/images/image-book-2.png';
import ImageBook3 from '@/assets/images/image-book-3.png';
import ImageNew from '@/assets/images/image-new.png';

export const dataBookCarousel = [
  { title: 'Đắc nhân tâm', image: ImageBook1, price: '150.000đ', oldPrice: '150.000đ' },
  { title: 'Yêu trên từng ngón tay', image: ImageBook2, price: '150.000đ', oldPrice: '150.000đ' },
  { title: 'Tiểu thuyết lịch sử', image: ImageBook3, price: '150.000đ', oldPrice: '150.000đ' },
  { title: 'Đắc nhân tâm', image: ImageBook1, price: '150.000đ', oldPrice: '150.000đ' },
  { title: 'Yêu trên từng ngón tay', image: ImageBook2, price: '150.000đ', oldPrice: '150.000đ' },
  { title: 'Tiểu thuyết lịch sử', image: ImageBook3, price: '150.000đ', oldPrice: '150.000đ' },
  { title: 'Đắc nhân tâm', image: ImageBook1, price: '150.000đ', oldPrice: '150.000đ' },
  { title: 'Yêu trên từng ngón tay', image: ImageBook2, price: '150.000đ', oldPrice: '150.000đ' },
  { title: 'Tiểu thuyết lịch sử', image: ImageBook3, price: '150.000đ', oldPrice: '150.000đ' },
];

export const dataNewsList = [
  {
    title: 'Sách không chỉ là chữ Sách không chỉ là chữ ...',
    image: ImageNew,
    description: 'Đã qua rồi cái thời giấy in sách vàng ố, bìa sách được thiết kế đơn điệu với tên ...',
    date: '16 Thg 10 2021',
  },
  {
    title: 'Sách không chỉ là chữ Sách không chỉ là chữ ...',
    image: ImageNew,
    description: 'Đã qua rồi cái thời giấy in sách vàng ố, bìa sách được thiết kế đơn điệu với tên ...',
    date: '16 Thg 10 2021',
  },
  {
    title: 'Sách không chỉ là chữ Sách không chỉ là chữ ...',
    image: ImageNew,
    description: 'Đã qua rồi cái thời giấy in sách vàng ố, bìa sách được thiết kế đơn điệu với tên ...',
    date: '16 Thg 10 2021',
  },
  {
    title: 'Sách không chỉ là chữ Sách không chỉ là chữ ...',
    image: ImageNew,
    description: 'Đã qua rồi cái thời giấy in sách vàng ố, bìa sách được thiết kế đơn điệu với tên ...',
    date: '16 Thg 10 2021',
  },
];

export const paymentStatus = [
  { value: 2, label: 'Giao dịch đang xử lý' },
  { value: 3, label: 'Giao dịch đang chờ kiểm tra' },
  { value: 5, label: 'Giao dịch thành công' },
  { value: 6, label: 'Giao dịch thất bại' },
  { value: 8, label: 'Giao dịch bị hủy' },
  { value: 9, label: 'Giao dịch bị từ chối' },
  { value: 16, label: 'Giao dịch đã nhận tiền' },
];

export const paymentMethod = [
  { value: 'ATM_CARD', label: 'Thẻ ATM' },
  { value: 'CREDIT_CARD', label: 'Thẻ tín dụng' },
  { value: '9PAY', label: '9Pay' },
  { value: 'COLLECTION', label: 'Collection' },
];
