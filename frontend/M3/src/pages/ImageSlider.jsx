import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

// Import images directly
import image1 from '../assets/Home_Pictures/1.jpg';
import image2 from '../assets/Home_Pictures/2.jpg';
import image3 from '../assets/Home_Pictures/3.jpg';
import image4 from '../assets/Home_Pictures/4.jpg';
import image5 from '../assets/Home_Pictures/5.jpg';
import image6 from '../assets/Home_Pictures/6.jpg';
import image7 from '../assets/Home_Pictures/7.jpg';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slide" key={currentIndex}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slide-image" />
      </div>
    </div>
  );
};

export default ImageSlider;
