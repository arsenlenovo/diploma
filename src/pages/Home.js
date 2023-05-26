import React, { useState } from "react";
import "./Home.css";
import watch from "../assets/watch.mp4";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://swisstime-exclusive.kg/wp-content/uploads/2020/02/banner-ulysse-nardin.jpg",
    "https://www.pngplay.com/wp-content/uploads/9/Casio-Transparent-Background.png",
    "https://wallpapercave.com/wp/wp2009866.jpg",
    "https://static.tildacdn.com/tild3932-6330-4530-b730-653361616632/casio-gshock-slide.jpeg",
    "https://www.casio-europe.com/resource/images/panel-brands/watches_gshock.jpg",
    "https://media.gq.com/photos/64554fb91cd547b0719a48a6/16:9/w_2560%2Cc_limit/watches.jpg",
    "https://static.independent.co.uk/2022/05/04/11/watch%20copy.jpg",
    // Replace this URL with the URL of the next image
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
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="Home" onWheel={handleScroll}>
      <div className="slider-container">
        {images.map((image, index) => (
          <img
            key={index}
            className={`slider-image ${
              index === currentImageIndex ? "active-in-home" : ""
            }`}
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
            className={`dot ${
              index === currentImageIndex ? "active-in-home" : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
      <h1 className="h1-for-the-card">New branded watches</h1>
      <div className="div-for-the-card">
        <div className="video">
          <video width="1000" height="650" src={watch} controls></video>
        </div>
      </div>
    </div>
  );
}
