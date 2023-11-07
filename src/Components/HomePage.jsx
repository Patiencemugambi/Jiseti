import React, { useState } from 'react';
import HomePageLoggedIn from './HomePageLoggedIn';
import HomePageNotLoggedIn from './HomePageNotLoggedIn';

function HomePage() {
  // Determine if the user is initially logged in (set the state accordingly)
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  // Manage errors and error messages
  const [error, setError] = useState(null);

  // Function to handle user login
  const login = () => {
    // Simulate a login error for demonstration purposes
    if (password) {
      setError('Login failed. Please check your credentials.');
    } else {
      setError(null); // Clear any previous errors
      setUserIsLoggedIn(true);
      // Perform any other necessary tasks for user login
    }
  };

  // Function to handle user logout
  const logout = () => {
    setUserIsLoggedIn(false);
    // Perform any other necessary tasks for user logout
  };

  return (
    <div>
      {error && <p className="error-message">{error}</p>}
      {userIsLoggedIn ? <HomePageLoggedIn /> : <HomePageNotLoggedIn />}
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default HomePage;