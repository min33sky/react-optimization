import React, { useEffect, useState } from 'react';
import video from '../assets/_banner-video.mp4';
import video_webm from '../assets/_banner-video.webm';
import FontFaceObserver from 'fontfaceobserver';

function BannerVideo() {
  const [isFontloaded, setIsFontloaded] = useState(false);
  const font = new FontFaceObserver('BMYEONSUNG');

  useEffect(() => {
    font.load().then(() => {
      console.log(`Font has loaded`);
      setIsFontloaded(true);
    });
  }, [font]);

  return (
    <div className="relative w-full h-screen overflow-hidden BannerVideo bg-texture">
      <div className="absolute w-full h-screen left-1/2">
        <video
          className="absolute h-screen min-w-full min-h-screen bg-black translateX--1/2 max-w-none min-w-screen -z-1"
          autoPlay
          loop
          muted
        >
          <source src={video_webm} type="video/webm" />
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div
        className={`flex items-center justify-center w-full h-full opacity-0 ${
          isFontloaded && `opacity-100`
        }`}
        style={{ transition: 'opacity 0.3s ease-in' }}
      >
        <div className="text-center text-white">
          <div className="text-6xl font-semibold leading-none">KEEP</div>
          <div className="text-6xl font-semibold leading-none">CALM</div>
          <div className="text-3xl leading-loose">AND</div>
          <div className="text-6xl font-semibold leading-none">RIDE</div>
          <div className="text-5xl font-semibold leading-tight">LONGBOARD</div>
        </div>
      </div>
    </div>
  );
}

export default BannerVideo;
