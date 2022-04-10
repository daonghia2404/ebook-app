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
    link: `${LayoutPaths.Profile}${Paths.Orders}`,
  },
  {
    title: 'Sách của tôi',
    icon: <Icon name={EIconName.BookMark} />,
    link: `${LayoutPaths.Profile}${Paths.MyBooks}`,
  },
  {
    title: 'Điều khoản chính sách',
    icon: <Icon name={EIconName.Book} />,
    link: `${LayoutPaths.Profile}${Paths.PrivacyPolicy}`,
  },
  {
    title: 'Câu hỏi thường gặp',
    icon: <Icon name={EIconName.Question} />,
    link: `${LayoutPaths.Profile}${Paths.Questions}`,
  },
  {
    title: 'Pháp lý',
    icon: <Icon name={EIconName.L} />,
    link: `${LayoutPaths.Profile}${Paths.PrivacyPolicy}`,
  },
  {
    title: 'Cam kết',
    icon: <Icon name={EIconName.BookArrow} />,
    link: `${LayoutPaths.Profile}${Paths.Commit}`,
  },
  {
    title: 'Góp ý',
    icon: <Icon name={EIconName.Chat} />,
    link: `${LayoutPaths.Profile}${Paths.Feedback}`,
  },
  {
    title: 'Liên hệ',
    icon: <Icon name={EIconName.MailFill} />,
    link: `${LayoutPaths.Profile}${Paths.Contact}`,
  },
  {
    title: 'Đổi mật khẩu',
    icon: <Icon name={EIconName.Locked} />,
    link: `${LayoutPaths.Profile}${Paths.ChangePassword}`,
  },
  {
    title: 'Đăng xuất',
    isAction: true,
    key: 'logout',
    icon: <Icon name={EIconName.Logout} />,
  },
];
