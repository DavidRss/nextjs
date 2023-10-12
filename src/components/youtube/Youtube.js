import React from 'react';

function YouTubeVideo() {
  return (
      <iframe
        width="631"
        height="340"
        className="youtube-video-iframe"
        src="https://www.youtube.com/embed/ВАШ_КОД_ВИДЕО"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
  );
}

export default YouTubeVideo;