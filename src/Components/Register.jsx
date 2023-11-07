import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length === 0) {
      // Send form data to your Flask API endpoint using fetch
      fetch('https://jisetidb.onrender.com/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          
          if (data.message === 'User created successfully') {
            setSuccessMessage('User successfully created'); // Set success message
            // Clear the form fields and errors after success
            setFormData({
              username: '',
              email: '',
              password: '',
              confirmPassword: '',
            });
            setMessage('Login successful. Token ');
        setError('');
            setErrors({});
          } else {
            setErrors({ server: data.message });
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      setErrors(newErrors);
    }
  };

 


  return (
    <div className="bg-gray-100 flex h-screen">
  
      {/* Left Section: Background Image and Text */}
      <div className="hidden lg:flex flex-col justify-center items-center w-1/2 bg-gradient-to-r from-red-500 via-[#3d0e15] to-[#000000] text-white relative">
        <div className="absolute top-[1.75rem] left-[4.69rem] tracking-[0.05em] inline-block w-[6.13rem] text-2xl">
          Jiseti
        </div>
        <div className="text-lg text-center text-white">
          <p>"Corruption is the enemy of development, and it undermines democratic institutions, social cohesion, and economic growth."</p>
          <p>- Kofi Annan</p>
        </div>
        <img
          src="https://images.jacobinmag.com/wp-content/uploads/sites/4/2021/11/17095858/corruption-new.jpg"
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
      </div>
  
      {/* Right Section: Sign Up Form */}
      <div className="w-full lg:w-1/2 p-8 flex justify-center items-center bg-white">
        <div className=" rounded-lg p-8 w-full max-w-md">
          <h1 className="text-4xl font-medium mb-7 " style={{ color: '#595656' }}>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            {/* Username Input */}
            <div className="mb-4">
             
              <input
                type="text"
                name="username"
                placeholder='Username'
                value={formData.username}
                onChange={handleChange}
                className="w-full  border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 shadow-lg mb-8"
              />
              {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
            </div>
            {/* Email Input */}
            <div className="mb-4">
              
              <input
                type="email"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                className="w-full  border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 shadow-lg mb-8"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>
            {/* Password Input */}
            <div className="mb-4">
             
              <input
                type="password"
                name="password"
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
                className="w-full  border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 shadow-lg mb-8"
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
            </div>
            {/* Confirm Password Input */}
            <div className="mb-4">
             
              <input
                type="password"
                name="confirmPassword"
                placeholder='Confirm password'
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 shadow-lg mb-8"
              />
              {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
            </div>
            {/* Sign Up Button */}
            <button
              type="submit"
              className="border-2 border-red-500 bg-red-500 text-white hover:bg-white hover:text-red-500 py-2 px-4 rounded w-full transition duration-300"
              style={{
                borderRadius: "20px",
              }}
            >
              Sign Up
            </button>
          </form>
          {/* Success Message */}
          {message && <p className="text-green-500 text-center mt-4">{message}</p>}
          {/* Login Link */}
          <p className="text-center mt-4">
            Already have an account? <Link to="/login" className=" hover:underline" style={{ color: '#680853' }}>Log in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
  
  
};

export default SignUp;
