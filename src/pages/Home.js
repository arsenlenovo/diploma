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

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="Home">
      <h1>Home</h1>
      <img className="img-in-Home" src={images[currentImageIndex]} alt="background" />
      <div className="div-of-two-buttons">
      <button className="button2-in-home" onClick={handlePreviousImage}>&#8592;</button> {/* Стрелка влево */}
      <button className="button-in-home" onClick={handleNextImage}>&#8594;</button> {/* Стрелка вправо */}
      </div>
    </div>
  );
}
