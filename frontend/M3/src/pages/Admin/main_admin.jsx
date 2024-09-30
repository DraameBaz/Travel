import React from 'react';
import './Admin_css/main_admin.css'
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing tokens)
    navigate('/login');
  };

  return (
    <div className="admin-container">
      <div className="header">
        <h1>Admin Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="admin-options">
        <div className="option" onClick={() => navigate('/add-trip')}>
          <img src="/images/add_trip.jpg" alt="Add New Trip" />
          <p>Add New Trip</p>
        </div>
        <div className="option" onClick={() => navigate('/update-trip')}>
          <img src="/images/update_trip.jpg" alt="Update Trip" />
          <p>Update Trip</p>
        </div>
        <div className="option" onClick={() => navigate('/delete-trip')}>
          <img src="/images/delete_trip.jpg" alt="Delete Trip" />
          <p>Delete Trip</p>
        </div>
        <div className="option" onClick={() => navigate('/weather-report')}>
          <img src="/images/weather_report.jpg" alt="Weather Report" />
          <p>Weather Report</p>
        </div>
        <div className="option" onClick={() => navigate('/manage-accessories')}>
          <img src="/images/accessories.jpg" alt="Manage Accessories" />
          <p>Manage Accessories</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
