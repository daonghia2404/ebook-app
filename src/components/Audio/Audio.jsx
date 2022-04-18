import React, { useEffect, useRef, useState } from 'react';
import TimeSlider from 'react-input-slider';

import ImagePlay from '@/assets/icons/icon-audio-play.svg';
import ImagePause from '@/assets/icons/icon-audio-pause.png';
import ImagePrev from '@/assets/icons/icon-audio-prev.svg';
import ImageNext from '@/assets/icons/icon-audio-next.svg';
import { formatDuration } from '@/utils/functions';

import SampleAudio from './sample-mp3.mp3';
import Loading from '@/containers/Loading/Loading';

import './Audio.scss';
import { Paths } from '@/pages/routers';

const Audio = ({ image, title, src, id, productId, list = [] }) => {
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const [file, setFile] = useState(undefined);

  const getFileAudio = async () => {
    if (src) {
      const file = await fetch(src);
      const fileBlob = await file.blob();
      setFile(window.URL.createObjectURL(fileBlob));
    }
  };

  const isLoading = duration === 0;

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };

  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  const handleClickAudioPrev = () => {
    const currentIndex = list.map((item) => item._id).indexOf(id);
    const prevAudio = list?.[currentIndex - 1];
    if (prevAudio) {
      window.location.href = `${Paths.BookAudio}?voice=${prevAudio._id}&product=${productId}`;
    }
  };

  const handleClickAudioNext = () => {
    const currentIndex = list.map((item) => item._id).indexOf(id);
    const nextAudio = list?.[currentIndex + 1];
    if (nextAudio) {
      window.location.href = `${Paths.BookAudio}?voice=${nextAudio._id}&product=${productId}`;
    }
  };

  useEffect(() => {
    setDuration(0);
    getFileAudio();
  }, [src]);

  return (
    <div className="Audio">
      {isLoading && <Loading absolute />}
      <div className="Audio-image">
        <img src={image} alt="" />
      </div>
      <div className="Audio-title">{title}</div>
      <div className="Audio-control">
        <div className="Audio-control-bars">
          <TimeSlider
            axis="x"
            xmax={duration}
            x={currentTime}
            onChange={handleTimeSliderChange}
            styles={{
              track: {
                backgroundColor: 'rgba(255,255,255,0.8)',
                height: '7px',
                borderRadius: '0%',
              },
              active: {
                backgroundColor: '#fff',
                height: '7px',
              },
              thumb: {
                width: '20px',
                height: '20px',
                backgroundColor: '#fff',
                borderRadius: '50%',
              },
            }}
          />
          <div className="Audio-control-bars-current">
            {audioRef?.current?.currentTime ? formatDuration(audioRef?.current?.currentTime) : '00:00:00'}
          </div>
          <div className="Audio-control-bars-total">{duration ? formatDuration(duration) : '00:00:00'}</div>
        </div>
        <div className="Audio-control-actions flex justify-center items-center">
          <div className="Audio-control-actions-prev" onClick={handleClickAudioPrev}>
            <img src={ImagePrev} alt="" />
          </div>
          <div className="Audio-control-actions-play" onClick={handlePausePlayClick}>
            <img src={isPlay ? ImagePause : ImagePlay} alt="" />
          </div>
          <div className="Audio-control-actions-next" onClick={handleClickAudioNext}>
            <img src={ImageNext} alt="" />
          </div>
        </div>
      </div>

      {file && (
        <audio
          ref={audioRef}
          src={file}
          onLoadedData={handleLoadedData}
          onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
          onEnded={() => setPlay(false)}
        />
      )}
    </div>
  );
};

export default Audio;
