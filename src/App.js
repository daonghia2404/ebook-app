import React from 'react';
import { Redirect, Router } from '@reach/router';

import { AuthRoute, LayoutPaths, Pages, Paths, ProtectedRoute, PublicRoute } from '@/pages/routers';
import Guest from '@/layouts/Guest';
import Admin from '@/layouts/Admin';
import Auth from '@/layouts/Auth';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Router primary={false}>
        <Guest path={LayoutPaths.Guest}>
          <PublicRoute path={Paths.Home} component={Pages.Home} />
          <PublicRoute path={Paths.SearchResult} component={Pages.SearchResult} />
          <PublicRoute path={Paths.BooksCategory} component={Pages.BooksCategory} />
          <PublicRoute path={Paths.NewDetail()} component={Pages.NewDetail} />
          <PublicRoute path={Paths.BookDetail()} component={Pages.BookDetail} />
          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.Home}`} />
        </Guest>

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
