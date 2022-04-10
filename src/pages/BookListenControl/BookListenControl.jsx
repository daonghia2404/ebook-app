import React from 'react';

import ImageBookListenControl from '@/assets/images/image-listen-book-placeholder.png';
import VideoFileCard from '@/components/VideoFileCard/VideoFileCard';

import './BookListenControl.scss';

const BookListenControl = () => {
  return (
    <div className="BookListenControl">
      <div className="container">
        <div className="BookListenControl-wrapper">
          <div className="BookListenControl-control">
            <img src={ImageBookListenControl} alt="" />
          </div>
          <div className="BookListenControl-list">
            <div className="BookListenControl-list-title">Chương</div>
            <div className="BookListenControl-list-main">
              {[1, 2, 3, 4, 5].map((item) => (
                <VideoFileCard key={item} title="Chương 1: Introduction (Giới thiệu)" description="1:129:12" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookListenControl;
