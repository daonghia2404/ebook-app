import VideoFileCard from '@/components/VideoFileCard/VideoFileCard';
import classNames from 'classnames';
import React, { useState } from 'react';

import './BookListenListTab.scss';

const BookListenListTab = ({ file, video, voice }) => {
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
            {voice?.map((item) => (
              <VideoFileCard key={item} title={item.name} description={item.description} />
            ))}
          </>
        )}
        {keyTabList === 1 && (
          <>
            {file?.map((item) => (
              <VideoFileCard pdf key={item} title={item.name} description={item.description} />
            ))}
          </>
        )}
        {keyTabList === 2 && (
          <>
            <VideoFileCard video title={video.name} description="1:129:12" />
          </>
        )}
      </div>
    </div>
  );
};

export default BookListenListTab;
