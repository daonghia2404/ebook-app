import React, { useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import VideoFileCard from '@/components/VideoFileCard/VideoFileCard';
import { dataTabMyBookDetail } from '@/pages/MyBookDetail/MyBookDetailTab/MyBookDetailTab.data';
import { EKeyTabMyBookDetail } from '@/pages/MyBookDetail/MyBookDetailTab/MyBookDetailTab.enums';
import { formatDuration, getFullPathUrl } from '@/utils/functions';
import { Paths } from '@/pages/routers';

import './MyBookDetailTab.scss';

const MyBookDetailTab = () => {
  const [keyTabList, setKeyTabList] = useState(dataTabMyBookDetail[0]);
  const bookData = useSelector((state) => state.productState.book) ?? {};

  // const getVoiceMyBookData = useCallback(() => {
  //   if (id && keyTabList.value === EKeyTabMyBookDetail.VOICE) {
  //     dispatch(getVoiceMyBookAction.request({ product: id, voice: id }));
  //   }
  // }, [keyTabList, dispatch, id]);

  const handleReadBook = (id) => {
    navigate(`${Paths.BookReader}?voice=${id}&product=${bookData._id}`);
  };
  const handleListenBook = (id) => {
    navigate(`${Paths.BookAudio}?voice=${id}&product=${bookData._id}`);
  };

  const renderMyBookDetailTab = () => {
    switch (keyTabList.value) {
      case EKeyTabMyBookDetail.VOICE:
        return (
          <>
            {bookData.voice?.map((item) => (
              <VideoFileCard
                key={item._id}
                title={`Nghe sách: ${bookData.name}`}
                description="Bấm vào đây để nghe sách"
                onClick={() => handleListenBook(item._id)}
              />
            ))}
          </>
        );
      case EKeyTabMyBookDetail.FILE:
        return (
          <>
            {bookData.file?.map((item, index) => (
              <VideoFileCard
                key={item._id}
                title={`Đọc sách: ${bookData.name}`}
                description="Bấm vào đây để đọc sách"
                pdf
                onClick={() => handleReadBook(item._id)}
              />
            ))}
          </>
        );
      case EKeyTabMyBookDetail.VIDEO:
        return (
          <>
            <VideoFileCard
              video
              image={getFullPathUrl(bookData.video.src)}
              title={`Video giới thiệu: ${bookData.video.name}`}
              description={formatDuration(bookData.video.duration)}
            />
          </>
        );
      default:
        return <></>;
    }
  };

  // useEffect(() => {
  //   getVoiceMyBookData();
  // }, [getVoiceMyBookData]);

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
