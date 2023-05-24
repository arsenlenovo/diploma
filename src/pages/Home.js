import React, { useState } from 'react';
import './Home.css';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://swisstime-exclusive.kg/wp-content/uploads/2020/02/banner-ulysse-nardin.jpg',
    'https://www.pngplay.com/wp-content/uploads/9/Casio-Transparent-Background.png',
    'https://wallpapercave.com/wp/wp2009866.jpg',
    'https://static.tildacdn.com/tild3932-6330-4530-b730-653361616632/casio-gshock-slide.jpeg', // Replace this URL with the URL of the next image
    // Add other image URLs as needed
  ];

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      // Scroll down, go to the next image or loop back to the first image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (delta < 0) {
      // Scroll up, go to the previous image or loop back to the last image
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="Home" onWheel={handleScroll}>
      <h1>Home</h1>
      <div className="slider-container">
        {images.map((image, index) => (
          <img
            key={index}
            className={`slider-image ${index === currentImageIndex ? 'active-in-home' : ''}`}
            src={image}
            alt="background"
          />
        ))}
        <button className="arrow prev" onClick={goToPreviousImage}>
          &lt;
        </button>
        <button className="arrow next" onClick={goToNextImage}>
          &gt;
        </button>
      </div>
      <div className="div-of-dots">
        {images.map((image, index) => (
          <button
            key={index}
            className={`dot ${index === currentImageIndex ? 'active-in-home' : ''}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
