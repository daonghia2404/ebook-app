import React, { useEffect, useState } from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css';

import Loading from '@/containers/Loading/Loading';
import { navigate } from '@reach/router';
import { Paths } from '@/pages/routers';

import './BookVideo.scss';

const BookVideo = () => {
  const query = new URLSearchParams(location.search);
  const url = query.get('url');

  const [file, setFile] = useState(undefined);

  const getFileAudio = async (url) => {
    const file = await fetch(url);
    const fileBlob = await file.blob();
    setFile(window.URL.createObjectURL(fileBlob));
  };

  useEffect(() => {
    if (url) getFileAudio(url);
    else navigate(Paths.Home);
  }, [url]);

  return (
    <div className="BookVideo">
      <div className="container">
        <div className="BookVideo-wrapper">
          {!file && <Loading absolute />}
          <Plyr
            source={{
              type: 'video',
              sources: [
                {
                  src: file,
                  type: 'video/mp4',
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BookVideo;
