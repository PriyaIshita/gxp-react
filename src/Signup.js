import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signup from './assests/sign-up.png';

const Signup = () => {
  const navigate = useNavigate(); // fix for router
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPass: '',
    address: '',
    mobileno: '',
  });
  const [errors, setErrors] = useState({}); // new state for validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPass) newErrors.confirmPass = 'Passwords do not match';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.mobileno.trim()) newErrors.mobileno = 'Mobile number is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Form data submitted:', formData);

    try {
      const response = await fetch('http://localhost/gxp_Partners/signupuser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();
      console.log('Response:', result);
      alert('Data submitted successfully!');

      // Reset form
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmpass: '',
        address: '',
        mobileno: '',
      });
      setShowPopup(false);
      //navigate('/users');
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Submission failed. Check console for more info.');
    }
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className='image-popup-form'>
        <img
          src={signup}
          alt="Click to signup"
          className="clickable-image"
          onClick={openPopup}
        />

        {showPopup && <div className="overlay" onClick={closePopup}></div>}

        {showPopup && (
          <div className='popup'>
            <h1>For Registration Click Here</h1>
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Enter Name' />
              {errors.name && <p className="error">{errors.name}</p>}

              <label>Email</label>
              <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Enter Email ID' />
              {errors.email && <p className="error">{errors.email}</p>}

              <label>Password</label>
              <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Enter Password' />
              {errors.password && <p className="error">{errors.password}</p>}

              <label>Confirm Password</label>
              <input type='password' name='confirmPass' value={formData.confirmPass} onChange={handleChange} placeholder='Confirm your Password' />
              {errors.confirmPass && <p className="error">{errors.confirmPass}</p>}

              <label>Address</label>
              <input type='text' name='address' value={formData.address} onChange={handleChange} placeholder='Enter Address' />
              {errors.address && <p className="error">{errors.address}</p>}

              <label>Mobile Number</label>
              <input type='number' name='mobileno' value={formData.number} onChange={handleChange} placeholder='Enter Mobile Number' />
              {errors.number && <p className="error">{errors.number}</p>}

              <button type='submit'>Sign Up</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Signup;
