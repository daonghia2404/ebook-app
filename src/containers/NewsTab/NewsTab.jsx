import React, { useState } from 'react';
import classNames from 'classnames';

import NewBlock from '@/components/NewBlock';
import { EKeyNewsTab } from '@/containers/NewsTab/NewsTab.enums';
import Loading from '@/containers/Loading/Loading';
import Empty from '@/components/Empty/Empty';

import './NewsTab.scss';

const NewsTab = ({ data = [], loading, onTabChange }) => {
  const dataNewsTab = [
    { key: EKeyNewsTab.LASTEST, title: 'Tin mới nhất' },
    { key: EKeyNewsTab.FEATURED, title: 'Tin tức nổi bật' },
  ];

  const [keyTab, setKeyTab] = useState(dataNewsTab[0]);

  const isEmpty = data.length === 0;

  const handleChangeTabKey = (data) => {
    setKeyTab(data);
    onTabChange?.(data.key);
  };

  return (
    <div className="NewsTab">
      <div className="container">
        <div className="NewsTab-wrapper">
          <div className="NewsTab-header flex items-center">
            {dataNewsTab.map((item, index) => (
              <div
                key={index}
                className={classNames('NewsTab-header-item', { active: keyTab.key === item.key })}
                onClick={() => handleChangeTabKey(item)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {loading ? (
            <Loading />
          ) : (
            <>
              {isEmpty ? (
                <Empty />
              ) : (
                <div className="NewsTab-list flex flex-wrap">
                  {data?.map((item, index) => (
                    <div key={index} className="NewsTab-list-item">
                      <NewBlock {...item} />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsTab;
