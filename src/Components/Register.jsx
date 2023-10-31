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
  const [successMessage, setSuccessMessage] = useState('');

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
      fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === 'User created successfully') {
            setSuccessMessage(data.message); // Set success message
            // Clear the form fields and errors after success
            setFormData({
              username: '',
              email: '',
              password: '',
              confirmPassword: '',
            });
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
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src=''o
          
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>
      {/* Right: Sign Up Form */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-input mt-1 p-2 w-full rounded-md"
            />
            {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input mt-1 p-2 w-full rounded-md"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input mt-1 p-2 w-full rounded-md"
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
          </div>
          {/* Confirm Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-input mt-1 p-2 w-full rounded-md"
            />
            {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
          </div>
          {/* Sign Up Button */}
          <button
  type="submit"
  className="border-2 border-red-500 bg-white text-red-500 hover:bg-red-500 hover:text-white py-2 px-4 rounded w-full transition duration-300"
>
  Sign Up
</button>

        </form>
        {/* Success Message */}
        {successMessage && <p className="text-green-500 text-sm mt-4">{successMessage}</p>}
        {/* Login Link */}
        <p className="text-center mt-4">
          Already have an account? <Link to="/login" className="text-red-500 hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
