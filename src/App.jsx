import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Intervention from './Components/Intervention';
import InterventionList from './Components/InterventionList';
import Redflag from './Components/Redflag';
import RedflagList from './Components/RedflagList';
import Admin from './Components/Admin';
import Reports from './Components/Reports';
import Homepage from './Components/Homepage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await fetch('https://jisetidb.onrender.com/users/'); 
        const data = await response.json();
        setUsername(data.username);
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    if (isLoggedIn) {
      fetchUsername();
    }
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/intervention" element={<Intervention />} />
        <Route path="/interventionlist" element={<InterventionList />} />
        <Route path="/redflag" element={<Redflag />} />
        <Route path="/redflaglist" element={<RedflagList />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
};


export default App;
