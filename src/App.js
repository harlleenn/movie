import React from 'react'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './loginPage';

function App() {
  return (
 <Router>
  <Routes>
<Route path="/"element={<LoginPage/>}/>
<Route path="/home" element={<HomePage/>}/>
  </Routes>
 </Router>
  );
}

export default App;
