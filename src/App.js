import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Login from './pages/Login';
import Recommendations from './pages/Recommendations';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </Router>
  );
}

export default App;


