import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'user',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
 


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, role } = formData; 
    
  
    let endpoint = 'https://jisetidb.onrender.com/login';
    if (role === 'admin') {
      endpoint = 'https://jisetidb.onrender.com/admin/login'; // Specify the admin login endpoint
    }
  
    fetch(endpoint, {
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
        setMessage('Login successful.');
        setError('');
        // Clear form fields
        setFormData({ username: '', password: '', role: formData.role });

        if (role === 'admin') {
          // Redirect to the admin panel route
          navigate('/admin');
        } else {
          // Redirect to the user dashboard or any other appropriate route
          navigate('/');
        }
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
      <div className="hidden lg:flex flex-col justify-center items-center w-1/2 bg-gradient-to-r from-red-500 via-[#3d0e15] to-[#000000] text-white relative">
        <div className="absolute top-[1.75rem] left-[4.69rem] tracking-[0.05em] inline-block w-[6.13rem] text-2xl">
          Jiseti
        </div>
        <div className="text-lg text-center">
          <p> “Corruption is the mother of all poverty”</p>
          <p className="m-0">Desmond Tutu</p>
        </div>
        <img
          src="https://images.jacobinmag.com/wp-content/uploads/sites/4/2021/11/17095858/corruption-new.jpg"
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Right Section: Login Form */}
      <div className="w-full lg:w-1/2 p-8 flex justify-center items-center bg-white">
        <div className=" rounded-lg p-8 w-full max-w-md">
          <h1 className="text-4xl font-medium mb-7 " style={{ color: '#595656' }}>Log In</h1>
          <form onSubmit={handleSubmit}>
            {/* Username or Email Input */}
            <div className="mb-4">
              
              <input
                type="text"
                name="username"
                placeholder='Username'
                value={formData.username}
                onChange={handleChange}
                className="w-full  border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 shadow-lg mb-8"
                autoComplete="off"
              />
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
                autoComplete="off"
              />
            </div>
            {/* Role Selection Dropdown */}
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
    Role
  </label>
  <select
    name="role"
    value={formData.role}
    onChange={handleChange}
    className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 shadow-lg mb-8"
  >
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </select>
</div>

            {/* Remember Me Checkbox */}
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
              <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
            </div>
           
            {/* Login Button */}
            <button
              type="submit"
              className="border-2 border-red-500 bg-red-500 text-white hover:bg-white hover:text-red-500 py-2 px-4 rounded w-full transition duration-300"
              style={{
                borderRadius: "20px",
              }}
            >
              Log In
            </button>
          </form>
          {/* Messages */}
          {message && <p className="text-green-500 text-center mt-4">{message}</p>}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {/* Sign up Link */}
          <div className="mt-6 text-red-500 text-center">
            <Link to="/register" className="hover:underline" style={{ color: '#680853' }}>Sign up Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
