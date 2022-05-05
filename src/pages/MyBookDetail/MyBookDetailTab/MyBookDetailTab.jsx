import React, { useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import VideoFileCard from '@/components/VideoFileCard/VideoFileCard';
import { dataTabMyBookDetail } from '@/pages/MyBookDetail/MyBookDetailTab/MyBookDetailTab.data';
import { EKeyTabMyBookDetail } from '@/pages/MyBookDetail/MyBookDetailTab/MyBookDetailTab.enums';
import { formatDuration } from '@/utils/functions';
import { Paths } from '@/pages/routers';
import Empty from '@/components/Empty/Empty';

import './MyBookDetailTab.scss';

const MyBookDetailTab = () => {
  const [keyTabList, setKeyTabList] = useState(dataTabMyBookDetail[0]);
  const bookData = useSelector((state) => state.productState.book) ?? {};

  const handleReadBook = (id) => {
    navigate(`${Paths.BookReader}?voice=${id}&product=${bookData._id}`);
  };
  const handleListenBook = (id) => {
    navigate(`${Paths.BookAudio}?voice=${id}&product=${bookData._id}`);
  };
  const handleVideoBook = (url) => {
    navigate(`${Paths.BookVideo}?url=${url}`);
  };

  const renderMyBookDetailTab = () => {
    switch (keyTabList.value) {
      case EKeyTabMyBookDetail.VOICE: {
        const isEmpty = bookData?.voice?.length === 0;

        return isEmpty ? (
          <Empty />
        ) : (
          <>
            {bookData.voice?.map((item) => (
              <VideoFileCard
                key={item._id}
                title={`Nghe sách: ${item.name || bookData?.name}`}
                description={item.description || 'Bấm vào đây để nghe sách'}
                onClick={() => handleListenBook(item._id)}
              />
            ))}
          </>
        );
      }

      case EKeyTabMyBookDetail.FILE: {
        const isEmpty = bookData?.file?.length === 0;
        return isEmpty ? (
          <Empty />
        ) : (
          <>
            {bookData.file?.map((item) => (
              <VideoFileCard
                key={item._id}
                title={`Đọc sách: ${item.name || bookData?.name}`}
                description={item.description || 'Bấm vào đây để đọc sách'}
                pdf
                onClick={() => handleReadBook(item._id)}
              />
            ))}
          </>
        );
      }

      case EKeyTabMyBookDetail.VIDEO:
        return (
          <>
            <VideoFileCard
              video
              image=""
              title={`Video giới thiệu: ${bookData?.video?.name || bookData?.name}`}
              description={formatDuration(bookData?.video?.duration || 0)}
              onClick={() => handleVideoBook(bookData?.video?.src)}
            />
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="MyBookDetailTab">
      <div className="MyBookDetailTab-tabs flex">
        {dataTabMyBookDetail.map((item, index) => (
          <div
            key={index}
            className={classNames('MyBookDetailTab-tabs-item', { active: item.value === keyTabList.value })}
            onClick={() => setKeyTabList(item)}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div className="MyBookDetailTab-tabs-main">{renderMyBookDetailTab()}</div>
    </div>
  );
};

export default MyBookDetailTab;
