import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import loginImage from '../assets/images/london.jpg'; // Import your image
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../store/token"; // Import the useAuth hook

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth(); // Use the storeTokenInLS function from the Auth context

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", user);

    try {
      const response = await fetch(`http://localhost:8080/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
      }

      const data = await response.json();
      console.log('Login successful:', data);
      alert('Login successful');

      // Save token to local storage and context state
      storeTokenInLS(data.token);
      navigate('/'); // Redirect to the homepage or another route after login

    } catch (error) {
      console.error('Fetch error:', error);
      setError('Login failed. Please try again.');
      alert('Login failed. Please try again.'); // Display user-friendly message
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={loginImage} alt="Login" />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInput}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleInput}
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="btn-submit" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
