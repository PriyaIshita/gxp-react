import React, { useEffect, useState } from 'react';
import Enquiryimg from './assests/aafbdb_f7869f4ddf734ea0b6a9562c2ebf1f6e~mv2.png';
import "./App.css";
import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, message, Space, Typography } from 'antd';
import axios from 'axios';
import { Router, useNavigate } from 'react-router-dom';
const Enquiry = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setformData] = useState
    ({
      name: '',
      email: '',
      mobileno: '',
      message: '',
    });
    const handleChange = (e) => {
    
    if (!e || !e.target) return;
    const { name, value } = e.target;
   
    
  
    // Block numbers in the name field
    if (name === 'name' && /[^a-zA-Z\s]/.test(value)) {
      return; // Prevent updating state with invalid value
    }
  
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ''
    }));
  };
  
  const validate = () => {
    const newErrors = {};
  
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
  
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
  
    if (!formData.mobileno) {
      newErrors.mobileno = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileno)) {
      newErrors.mobileno = 'Mobile number must be 10 digits';
    }
  
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  }
  
  const router = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('form data submitted:', formData);
    try {
      const response = await fetch('http://localhost/gxp_Partners/registeruser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      else {
        router('/users');
      }

      const result = await response.json();
      console.log('response:', result);

      alert('Data submitted successfully!');
      setformData({
        name: '', email: '', mobileno: '', message: ''
      });
      setShowPopup(false);


    } catch (error) {
      console.error('Fetch error:', error);
      alert('Submission failed. Check console for more info.');
    }
  };

  // Function to open popup
  const openPopup = () => {
    setShowPopup(true);
  };

  // Function to close popup
  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <div className="image-popup-container">
        {/* Clickable Image */}
        <img
          src={Enquiryimg}
          alt="Click to Enquire"
          className="clickable-image"
          onClick={openPopup}
        />

        {/* Overlay */}
        {showPopup && <div className="overlay" onClick={closePopup}></div>}

        {/* Popup Form */}
        {showPopup && (
          <div className="popup">
            <h2>Enquiry Form</h2>
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" required />
              {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}

              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" required />
              {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

              <label>Mobile no:</label>
              <input type="tel" name="mobileno" value={formData.mobileno} onChange={handleChange} placeholder="Enter Mobile no" required />
              {errors.mobileno && <span style={{ color: 'red' }}>{errors.mobileno}</span>}

              <label>Message</label>
              <input type="text" name="message" value={formData.message} onChange={handleChange} placeholder="Enter Message" required />
              {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
              <button type="submit">Submit</button>
              <button type="button" onClick={closePopup}>Close</button>
            </form>
          </div>

        )}
      </div>
     
    </>

  );
};

export default Enquiry;
