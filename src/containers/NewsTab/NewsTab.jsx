import React, { useState } from 'react';
import classNames from 'classnames';

import NewBlock from '@/components/NewBlock';

import './NewsTab.scss';

const NewsTab = ({ data }) => {
  const [keyTab, setKeyTab] = useState(0);

  const handleChangeTabKey = (index) => {
    setKeyTab(index);
  };
  return (
    <div className="NewsTab">
      <div className="container">
        <div className="NewsTab-wrapper">
          <div className="NewsTab-header flex items-center">
            {['Tin mới nhất', 'Tin tức nổi bật'].map((item, index) => (
              <div
                className={classNames('NewsTab-header-item', { active: keyTab === index })}
                onClick={() => handleChangeTabKey(index)}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="NewsTab-list flex flex-wrap">
            {data?.map((item, index) => (
              <div key={index} className="NewsTab-list-item">
                <NewBlock {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTab;
