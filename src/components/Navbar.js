import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Real Estate App</h1>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/properties" className="text-white hover:underline">
            Properties
          </Link>
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
