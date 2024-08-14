import React, { useState } from 'react';
import './App.css';

function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    "WhatsApp Video 2024-08-11 at 17.41.04.mp4",
    "WhatsApp Video 2024-08-11 at 17.41.08.mp4"
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="video-slider">
      <button className="slider-button prev" onClick={goToPrevious}>‹</button>
      <div className="video-wrapper">
        <video key={currentIndex} controls className="video">
          <source src={videos[currentIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button className="slider-button next" onClick={goToNext}>›</button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="fade-in-text">I’m Sorry, Ambika</h1>
        <p className="fade-in-text">
          Words can't fully express how deeply I regret my actions. I know I hurt you, and I want you to know that I am genuinely sorry. You mean everything to me, and I am committed to making things right.</p>
      </header>

      <section className="gallery">
        <div className="gallery-grid">
          <img src="WhatsApp Image 2024-08-11 at 17.40.55 (2).jpeg" alt="Memory 1" className="gallery-img" />
          <img src="WhatsApp Image 2024-08-11 at 17.40.55.jpeg" alt="Memory 2" className="gallery-img" />
          <img src="WhatsApp Image 2024-08-11 at 17.41.04 (1).jpeg" alt="Memory 3" className="gallery-img" />
          {/* <img src="WhatsApp Image 2024-08-11 at 17.41.09 (1).jpeg" alt="Memory 4" className="gallery-img" /> */}
          <img src="WhatsApp Image 2024-08-11 at 17.41.10 (1).jpeg" alt="Memory 7" className="gallery-img" />
          <img src="WhatsApp Image 2024-08-11 at 17.41.10 (2).jpeg" alt="Memory 8" className="gallery-img" />
          <img src="WhatsApp Image 2024-08-11 at 17.41.10 (3).jpeg" alt="Memory 9" className="gallery-img" />
          <img src="WhatsApp Image 2024-08-11 at 17.41.10 (4).jpeg" alt="Memory 10" className="gallery-img" />
            <img src="WhatsApp Image 2024-08-15 at 00.56.12.jpeg" alt="Memory 14" className="gallery-img" /> 
          <img src="WhatsApp Image 2024-08-11 at 17.41.14.jpeg" alt="Memory 14" className="gallery-img" />
          <img src="WhatsApp Image 2024-08-11 at 17.41.10 (2).jpeg" alt="Memory 6" className="gallery-img" />
          <img src="WhatsApp Image 2024-08-11 at 17.41.13 (1).jpeg" alt="Memory 12" className="gallery-img" />
              <img src="WhatsApp Image 2024-08-15 at 00.56.13.jpeg" alt="Memory 14" className="gallery-img" />  
          <img src="WhatsApp Image 2024-08-11 at 17.41.13 (2).jpeg" alt="Memory 13" className="gallery-img" />

          <img src="WhatsApp Image 2024-08-15 at 00.56.07.jpeg" alt="Memory 14" className="gallery-img" /> 
               <img src="WhatsApp Image 2024-08-15 at 00.56.15.jpeg" alt="Memory 14" className="gallery-img" />
        </div>
      </section>

      <section className="animated-text">
        <p className="fade-in">I’m sorry for what happened.</p>
        <p className="fade-in">You deserve better.</p>
        <p className="fade-in">I promise to make it up to you.</p>
        <p className="fade-in">Can we start fresh?</p>
      </section>

      <section className="video-section">
        <h2 className="fade-in-text">Special Moments</h2>
        <VideoSlider />
      </section>

      <footer className="footer">
        <p className="fade-in-text">Let’s do something fun together and make new memories. I love you!</p>
      </footer>
    </div>
  );
}

export default App;
