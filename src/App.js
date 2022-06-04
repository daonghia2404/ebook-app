import React, { useEffect } from 'react';
import { Redirect, Router } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import { AuthRoute, LayoutPaths, Pages, Paths, ProtectedRoute, PublicRoute } from '@/pages/routers';
import Guest from '@/layouts/Guest';
import Admin from '@/layouts/Admin';
import Auth from '@/layouts/Auth';
import Profile from '@/layouts/Profile';
import { uiActions } from '@/redux/actions';

import './App.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateSize = () => {
      dispatch(uiActions.setDevice(window.innerWidth));
    };
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [dispatch]);

  return (
    <div className="App">
      <Router primary={false}>
        <Guest path={LayoutPaths.Guest}>
          <PublicRoute path={Paths.Home} component={Pages.Home} />
          <PublicRoute path={Paths.SearchResult} component={Pages.SearchResult} />
          <PublicRoute path={Paths.BooksCategory} component={Pages.BooksCategory} />
          <PublicRoute path={Paths.BooksListenCategory} component={Pages.BooksListenCategory} />
          <PublicRoute path={Paths.NewDetail()} component={Pages.NewDetail} />
          <PublicRoute path={Paths.BookDetail()} component={Pages.BookDetail} />
          <PublicRoute path={Paths.PrivacyPolicy} component={Pages.PrivacyPolicyPage} />
          <PublicRoute path={Paths.News} component={Pages.News} />
          <PublicRoute path={Paths.About} component={Pages.About} />
          <PublicRoute path={Paths.PaymentResult} component={Pages.PaymentResult} />

          <ProtectedRoute path={Paths.Checkout} component={Pages.Checkout} />
          <ProtectedRoute path={Paths.MyBookDetail()} component={Pages.MyBookDetail} />
          <ProtectedRoute path={Paths.BookReader} component={Pages.BookReader} />
          <ProtectedRoute path={Paths.BookAudio} component={Pages.BookAudio} />
          <ProtectedRoute path={Paths.BookVideo} component={Pages.BookVideo} />

          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.Home}`} />
        </Guest>

        <Profile path={LayoutPaths.Profile}>
          <ProtectedRoute path={Paths.ProfileInfomation} component={Pages.ProfileInfomation} />
          <ProtectedRoute path={Paths.ProfileInfomationEdit} component={Pages.ProfileInfomationEdit} />
          <ProtectedRoute path={Paths.MyBooks} component={Pages.MyBooks} />
          <ProtectedRoute path={Paths.PrivacyPolicy} component={Pages.PrivacyPolicy} />
          <ProtectedRoute path={Paths.ChangePassword} component={Pages.ChangePassword} />
          <ProtectedRoute path={Paths.Questions} component={Pages.Questions} />
          <ProtectedRoute path={Paths.Commit} component={Pages.Commit} />
          <ProtectedRoute path={Paths.Contact} component={Pages.Contact} />
          <ProtectedRoute path={Paths.Feedback} component={Pages.Feedback} />
          <ProtectedRoute path={Paths.Orders} component={Pages.Orders} />
          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Profile}${Paths.ProfileInfomation}`} />
        </Profile>

        <Auth path={LayoutPaths.Auth}>
          <AuthRoute path={Paths.Login} component={Pages.Login} />
          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Auth}${Paths.Login}`} />
        </Auth>

        <Admin path={LayoutPaths.Admin}>
          <ProtectedRoute path={Paths.Dashboard} component={Pages.Dashboard} />
          <Redirect noThrow from={Paths.Rest} to={`${Paths.Admin}${Paths.Dashboard}`} />
        </Admin>
      </Router>
    </div>
  );
};

export default App;
