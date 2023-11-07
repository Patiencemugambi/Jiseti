import React, { useState } from 'react';
import NavbarLoggedIn from './Components/NavbarLoggedIn';
import NavbarNotLoggedIn from './Components/NavbarNotLoggedIn';
import Footer from './Components/Footer';
import HomePageLoggedIn from './Components/HomePageLoggedIn';
import HomePageNotLoggedIn from './Components/HomePageNotLoggedIn';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

const App = () => {
  // Determine the user's login status (you can set this up based on your authentication logic)
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div>
        {userIsLoggedIn ? <NavbarLoggedIn /> : <NavbarNotLoggedIn />}
        {userIsLoggedIn ? <HomePageLoggedIn /> : <HomePageNotLoggedIn />}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;