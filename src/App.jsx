

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Intervention from './Components/Intervention';
import InterventionList from './Components/InterventionList';
import Redflag from './Components/Redflag';
import RedflagList from './Components/RedflagList';






const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path = "/intervention" element = {<Intervention />}/>
        <Route path="/interventionlist" element={<InterventionList />} />
        <Route path="/redflag" element={<Redflag />} />
        <Route path="/redflaglist" element={<RedflagList />} />
        
       </Routes>
    </Router>
  );
};

export default App;

