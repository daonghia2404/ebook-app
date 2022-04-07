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

const Dashboard = lazy(() => retryLoadComponent(() => import('@/pages/Dashboard')));

export const LayoutPaths = {
  Auth: '/auth',
  Guest: '/',
  Admin: '/admin',
};

export const ModulePaths = {
  Book: '/sach',
  Rest: '*',
};

export const Paths = {
  Home: '/',
  SearchResult: '/ket-qua-tim-kiem',
  BookDetail: (id) => `${ModulePaths.Book}/chi-tiet/${id || ':id'}`,

  Auth: '/',

  Dashboard: '/',

  Rest: '*',
};

export const Pages = {
  Home,
  SearchResult,
  BookDetail,

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
