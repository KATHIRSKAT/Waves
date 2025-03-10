import React from 'react';
import './Background.css'; // Styles for the video background

const Background = () => {
  return (
    <div className="video-background-container">
      <video
        autoPlay
        loop
        muted
        className="video-background"
        playsInline
        preload="auto"
      >
        <source src={`${process.env.PUBLIC_URL}/Background.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>  {/* Optional dark overlay */}
    </div>
  );
};

export default Background;
