import React, { useEffect } from 'react';
import { useAuth } from '../store/token';
import meadowImage from '../assets/images/meadow.jpeg';
import './Services.css'; // Import the CSS file

const Services = () => {
  const { getServices, services } = useAuth();

  useEffect(() => {
    getServices();
  }, [getServices]);

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
        <div className="grid grid-three-cols">
          {services.map((service) => (
            <div key={service._id} className="card">
              <div className="card-img">
                <img src={meadowImage} alt="our places" />
              </div>
              <div className="card-detail">
                <div className="grid grid-two-cols">
                  <p>{service.provider}</p>
                  <p>${service.price}</p>
                </div>
                <h2>{service.service}</h2>
                <p className="description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
