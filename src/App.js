import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';      // Import Navbar component
import Home from './pages/Home';              // Import Home page
import Properties from './pages/Properties'; // Import Properties page
import Login from './pages/Login';           // Import Login page
import Recommendations from './pages/Recommendations'; // Import Recommendations page
import PropertyDetails from './pages/PropertyDetails'; // Property details page
import NotFound from './pages/NotFound';    // 404 page for invalid routes

function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar placed outside Routes so it shows on every page */}
      <div className="container mx-auto p-6">
        <Routes>
          {/* Define routes for the application */}
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
