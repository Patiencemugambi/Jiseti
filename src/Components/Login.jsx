import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData; 

    fetch('https://jisetidb.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse the JSON response when the status is OK
        }
        throw new Error('Invalid credentials'); // Throw an error for non-OK responses
      })
      .then((data) => {
        // Handle successful login
        setMessage('Login successful.' );
        setError('');
        // Clear form fields
        setFormData({ username: '', password: '' });
      })
      .catch((error) => {
        setError('Invalid credentials. Please try again.');
        setMessage('');
        console.error('Error:', error);
      });
  };

  return (
    <div className="bg-gray-100 flex h-screen">
      {/* Left Section: Background Image and Text */}
      <div className="hidden lg:flex flex-col justify-center items-center w-1/2 bg-gradient-to-r from-red-500 to-[#3d0e15] text-white">
        <div className="absolute top-[1.75rem] left-[4.69rem] tracking-[0.05em] inline-block w-[6.13rem]">
          Jiseti
        </div>
        <div className="text-lg text-center">
          <p> “Corruption is the mother of all poverty”</p>
          <p className="m-0">Desmond Tutu</p>
        </div>
      </div>

      {/* Right Section: Login Form */}
      <div className="w-full lg:w-1/2 p-8 flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
          <form onSubmit={handleSubmit}>
            {/* Username or Email Input */}
            <div className="mb-4">
              <label className="block text-gray-600">Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
            </div>
            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-gray-600">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
            </div>
            {/* Remember Me Checkbox */}
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
              <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
            </div>
            {/* Forgot Password Link */}
            <div className="mb-6 text-blue-500">
              <a href="#" className="hover:underline">Forgot Password?</a>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="border-2 border-red-500 bg-white text-red-500 hover:bg-red-500 hover:text-white py-2 px-4 rounded w-full transition duration-300"
            >
              Login
            </button>
          </form>
          {/* Messages */}
          {message && <p className="text-green-500 text-center mt-4">{message}</p>}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {/* Sign up Link */}
          <div className="mt-6 text-red-500 text-center">
            <Link to="/register" className="hover:underline">Sign up Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
