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
          <PublicRoute path={Paths.NewDetail()} component={Pages.NewDetail} />
          <PublicRoute path={Paths.BookDetail()} component={Pages.BookDetail} />
          <PublicRoute path={Paths.BookListenDetail()} component={Pages.BookListenDetail} />
          <PublicRoute path={Paths.BookListenControl()} component={Pages.BookListenControl} />
          <PublicRoute path={Paths.Checkout} component={Pages.Checkout} />

          <PublicRoute path={Paths.BookReader()} component={Pages.BookReader} />

          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.Home}`} />
        </Guest>

        <Profile path={LayoutPaths.Profile}>
          <PublicRoute path={Paths.ProfileInfomation} component={Pages.ProfileInfomation} />
          <PublicRoute path={Paths.ProfileInfomationEdit} component={Pages.ProfileInfomationEdit} />
          <PublicRoute path={Paths.MyBooks} component={Pages.MyBooks} />
          <PublicRoute path={Paths.PrivacyPolicy} component={Pages.PrivacyPolicy} />
          <PublicRoute path={Paths.ChangePassword} component={Pages.ChangePassword} />
          <PublicRoute path={Paths.Questions} component={Pages.Questions} />
          <PublicRoute path={Paths.Commit} component={Pages.Commit} />
          <PublicRoute path={Paths.Contact} component={Pages.Contact} />
          <PublicRoute path={Paths.Feedback} component={Pages.Feedback} />
          <PublicRoute path={Paths.Orders} component={Pages.Orders} />
          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Profile}${Paths.ProfileInfomation}`} />
        </Profile>

        <Auth path={LayoutPaths.Auth}>
          {/* <AuthRoute path={Paths.Login} component={Pages.Login} /> */}
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
