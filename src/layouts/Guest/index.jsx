import React from 'react';

import Footer from '@/containers/Footer';
import Header from '@/containers/Header';
import HeaderSearch from '@/containers/HeaderSearch/HeaderSearch';

const Guest = ({ children }) => {
  return (
    <div className="Guest">
      <div className="Guest-header">
        <Header />
        <HeaderSearch />
      </div>
      <div className="Guest-body">{children}</div>
      <div className="Guest-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Guest;
