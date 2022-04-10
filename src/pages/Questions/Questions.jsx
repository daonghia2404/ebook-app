import React from 'react';

import Logo from '@/assets/images/logo.svg';

import Collapse from '@/components/Collapse';
import { dataQuestionsList } from '@/pages/Questions/Questions.data';

import './Questions.scss';

const Questions = () => {
  return (
    <div className="Questions flex flex-col items-center justify-center">
      <div className="Questions-wrapper">
        <div className="Questions-logo">
          <img src={Logo} alt="" />
        </div>

        <div className="Questions-list">
          <Collapse defaultActiveKey={0} dataPanel={dataQuestionsList} />
        </div>
      </div>
    </div>
  );
};

export default Questions;
