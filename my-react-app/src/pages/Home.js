// In src/pages/Home.js
import React from 'react';
import './Home.css'; // Ensure this points to your Home.css file

const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-video-container">
        <iframe
          src="https://www.youtube.com/embed/oASvYV9Ee8U"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <a href="https://www.youtube.com/@OutwardOutdoors" target="_blank" rel="noopener noreferrer" className="hero-button">Subscribe Now</a>
      </div>
    </div>
  );
};

export default Home;
