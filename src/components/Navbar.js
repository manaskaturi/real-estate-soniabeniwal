import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">Home</Link>
        <div className="space-x-4">
          <Link to="/properties" className="text-white">Properties</Link>
          <Link to="/recommendations" className="text-white">Recommendations</Link>
          <Link to="/login" className="text-white">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
