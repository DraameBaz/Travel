import React from 'react';
import './Home.css';  // Ensure your CSS file is correctly named and located
import p from '../assets/images/home-picture.jpg';  // Importing the image
import ImageSlider from './ImageSlider';

const Home = () => {
  return (
   
   
    <div className="main-content">
    <div className="text-content">
        <h1>DON'T WASTE <br />MAKE MEMORIES</h1>
        <p>In life, it's not where you go, but who you travel with that matters</p>
        <button className="shop-button">PLAN</button>
    </div>
    <div className="image-container">
        <img src={p} alt="PASO CONES" />
    </div>
    <ImageSlider/>
  </div>
  );
}

export default Home;
