import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import About from './pages/About';
import Logout from './pages/Logout';
import Services from './pages/Services';
import Pay from './pages/pay'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay " element={<Pay />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
