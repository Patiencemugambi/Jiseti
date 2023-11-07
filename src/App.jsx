import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './Components/Adminpanel';
import AdminForm from './Components/Adminform'; // Import the AdminForm component
import AdminRedFlagForm from './Components/Adminredflagform';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/adminredflag' element = {<AdminRedFlagForm/>}/>
      </Routes>
    </Router>

  );
}

export default App;
