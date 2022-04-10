import VideoFileCard from '@/components/VideoFileCard/VideoFileCard';
import classNames from 'classnames';
import React, { useState } from 'react';

import './BookListenListTab.scss';

const BookListenListTab = () => {
  const [keyTabList, setKeyTabList] = useState(0);

  return (
    <div className="BookListenListTab">
      <div className="BookListenListTab-tabs flex">
        {['Nghe sách nói', 'File sách', 'Video'].map((item, index) => (
          <div
            className={classNames('BookListenListTab-tabs-item', { active: index === keyTabList })}
            onClick={() => setKeyTabList(index)}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="BookListenListTab-tabs-main">
        {keyTabList === 0 && (
          <>
            {[1, 2, 3, 4, 5].map((item) => (
              <VideoFileCard key={item} title="Chương 1: Introduction (Giới thiệu)" description="1:129:12" />
            ))}
          </>
        )}
        {keyTabList === 1 && (
          <>
            {[1, 2, 3, 4, 5].map((item) => (
              <VideoFileCard pdf key={item} title="Chương 1: Introduction (Giới thiệu)" description="1:129:12" />
            ))}
          </>
        )}
        {keyTabList === 2 && (
          <>
            {[1, 2, 3, 4, 5].map((item) => (
              <VideoFileCard video key={item} title="Chương 1: Introduction (Giới thiệu)" description="1:129:12" />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default BookListenListTab;
