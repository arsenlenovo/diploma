import React, { useState } from 'react';
import './Home.css';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://swisstime-exclusive.kg/wp-content/uploads/2020/02/banner-ulysse-nardin.jpg',
    'https://www.pngplay.com/wp-content/uploads/9/Casio-Transparent-Background.png',
    'https://wallpapercave.com/wp/wp2009866.jpg',
    'https://static.tildacdn.com/tild3932-6330-4530-b730-653361616632/casio-gshock-slide.jpeg', // Замените эту ссылку на URL следующего изображения
    // Добавьте другие ссылки на изображения по мере необходимости
  ];

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="Home">
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
