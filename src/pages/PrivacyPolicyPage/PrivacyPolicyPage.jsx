import React, { useEffect } from 'react';

import PrivacyPolicy from '@/pages/PrivacyPolicy/PrivacyPolicy';
import { scrollToTop } from '@/utils/functions';

import './PrivacyPolicyPage.scss';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="PrivacyPolicyPage">
      <div className="container">
        <div className="PrivacyPolicyPage-wrapper">
          <PrivacyPolicy />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
