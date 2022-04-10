import React, { lazy, Suspense } from 'react';
import { Redirect } from '@reach/router';

import AuthHelpers from '@/services/auth-helpers';

const retryLoadComponent = (fn, retriesLeft = 5, interval = 1000) =>
  new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error);
            return;
          }

          retryLoadComponent(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });

const Home = lazy(() => retryLoadComponent(() => import('@/pages/Home')));
const SearchResult = lazy(() => retryLoadComponent(() => import('@/pages/SearchResult')));
const BookDetail = lazy(() => retryLoadComponent(() => import('@/pages/BookDetail')));
const BookListenDetail = lazy(() => retryLoadComponent(() => import('@/pages/BookListenDetail')));
const BookListenControl = lazy(() => retryLoadComponent(() => import('@/pages/BookListenControl')));
const BooksCategory = lazy(() => retryLoadComponent(() => import('@/pages/BooksCategory')));
const NewDetail = lazy(() => retryLoadComponent(() => import('@/pages/NewDetail')));
const Checkout = lazy(() => retryLoadComponent(() => import('@/pages/Checkout')));

const ProfileInfomation = lazy(() => retryLoadComponent(() => import('@/pages/ProfileInfomation')));
const ProfileInfomationEdit = lazy(() => retryLoadComponent(() => import('@/pages/ProfileInfomation')));
const MyBooks = lazy(() => retryLoadComponent(() => import('@/pages/MyBooks')));
const BookReader = lazy(() => retryLoadComponent(() => import('@/pages/BookReader')));
const PrivacyPolicy = lazy(() => retryLoadComponent(() => import('@/pages/PrivacyPolicy')));
const ChangePassword = lazy(() => retryLoadComponent(() => import('@/pages/ChangePassword')));
const Questions = lazy(() => retryLoadComponent(() => import('@/pages/Questions')));
const Commit = lazy(() => retryLoadComponent(() => import('@/pages/Commit')));
const Contact = lazy(() => retryLoadComponent(() => import('@/pages/Contact')));
const Feedback = lazy(() => retryLoadComponent(() => import('@/pages/Feedback')));
const Orders = lazy(() => retryLoadComponent(() => import('@/pages/Orders')));

const Dashboard = lazy(() => retryLoadComponent(() => import('@/pages/Dashboard')));

export const LayoutPaths = {
  Auth: '/auth',
  Guest: '/',
  Admin: '/admin',
  Profile: '/thong-tin',
};

export const ModulePaths = {
  Book: '/sach',
  ListenBook: '/sach-noi',
  New: '/tin-tuc',
  Rest: '*',
};

export const Paths = {
  Home: '/',
  SearchResult: '/ket-qua-tim-kiem',
  BookDetail: (id) => `${ModulePaths.Book}/chi-tiet/${id || ':id'}`,
  BookListenDetail: (id) => `${ModulePaths.ListenBook}/chi-tiet/${id || ':id'}`,
  BookListenControl: (id) => `${ModulePaths.ListenBook}/xem/${id || ':id'}`,
  BooksCategory: '/danh-sach',
  NewDetail: (id) => `${ModulePaths.New}/chi-tiet/${id || ':id'}`,
  Checkout: '/thanh-toan',

  ProfileInfomation: '/thong-tin-ca-nhan',
  ProfileInfomationEdit: '/thong-tin-ca-nhan/chinh-sua',
  MyBooks: '/sach-cua-toi',
  BookReader: (id) => `${ModulePaths.Book}/doc-sach/${id || ':id'}`,
  PrivacyPolicy: '/dieu-khoan-chinh-sach',
  ChangePassword: '/doi-mat-khau',
  Questions: '/cau-hoi',
  Commit: '/cam-ket',
  Contact: '/lien-he',
  Feedback: '/gop-y',
  Orders: '/don-hang',

  Auth: '/',

  Dashboard: '/',

  Rest: '*',
};

export const Pages = {
  Home,
  SearchResult,
  BookDetail,
  BookListenDetail,
  BookListenControl,
  BooksCategory,
  NewDetail,
  Checkout,

  ProfileInfomation,
  ProfileInfomationEdit,
  MyBooks,
  BookReader,
  PrivacyPolicy,
  ChangePassword,
  Questions,
  Commit,
  Contact,
  Feedback,
  Orders,

  Dashboard,
};

export const AuthRoute = ({ component: Component, ...rest }) => {
  const loggedIn = AuthHelpers.getAccessToken();

  return loggedIn ? (
    <Redirect noThrow from={Paths.Rest} to={LayoutPaths.Admin} />
  ) : (
    <Suspense fallback={<div className="DOM-Loading" />}>
      <Component {...rest} />
    </Suspense>
  );
};

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const loggedIn = AuthHelpers.getAccessToken();

  return loggedIn ? (
    <Suspense fallback={<div className="DOM-Loading" />}>
      <Component {...rest} />
    </Suspense>
  ) : (
    <Redirect from="" to={LayoutPaths.Auth} noThrow />
  );
};

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Suspense fallback={<div className="DOM-Loading" />}>
    <Component {...rest} />
  </Suspense>
);
