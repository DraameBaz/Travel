import React from 'react';
import './Home.css';  // Ensure your CSS file is correctly named and located
import p from '../assets/images/home-picture.jpg';  // Importing the image

const Home = () => {
  return (
    <>
      <div className="container1">
        <h1 className="heading">Explore the North</h1>
        <div className="image-container">
          <img src={p} alt="Explore the North" className="image" />
        </div>
      </div>
    </>
  );
}

export default Home;
