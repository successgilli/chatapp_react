import React from 'react';

import './homeVideo.styles.scss';

const HomeVideo = () => (
  <div className="homeVideo">
    <video src="https://dasa7d6hxd0bp.cloudfront.net/video/video-full-width.mp4" width="100%" type="video/mp4" loop autoPlay muted preload="auto ">
            Your browser does not support video tag
    </video>
  </div>
);

export default HomeVideo;
