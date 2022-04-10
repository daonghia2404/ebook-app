import Icon, { EIconName } from '@/components/Icon';
import { LayoutPaths, Paths } from '@/pages/routers';

export const dataMenuListProfile = [
  {
    title: 'Thông tin cá nhân',
    link: `${LayoutPaths.Profile}${Paths.ProfileInfomation}`,
    icon: <Icon name={EIconName.UserSquare} />,
  },
  {
    title: 'Quản lý đơn hàng',
    icon: <Icon name={EIconName.GridPlus} />,
  },
  {
    title: 'Sách của tôi',
    icon: <Icon name={EIconName.BookMark} />,
  },
  {
    title: 'Điều khoản chính sách',
    icon: <Icon name={EIconName.Book} />,
  },
  {
    title: 'Câu hỏi thường gặp',
    icon: <Icon name={EIconName.Question} />,
  },
  {
    title: 'Pháp lý',
    icon: <Icon name={EIconName.L} />,
  },
  {
    title: 'Cam kết',
    icon: <Icon name={EIconName.BookArrow} />,
  },
  {
    title: 'Góp ý',
    icon: <Icon name={EIconName.Chat} />,
  },
  {
    title: 'Liên hệ',
    icon: <Icon name={EIconName.MailFill} />,
  },
  {
    title: 'Đổi mật khẩu',
    icon: <Icon name={EIconName.Locked} />,
  },
  {
    title: 'Đăng xuất',
    isAction: true,
    key: 'logout',
    icon: <Icon name={EIconName.Logout} />,
  },
];
