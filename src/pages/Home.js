import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center p-6 max-w-lg bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to Real Estate App By Sonia Beniwal (21BCS9782) </h1>
        <p className="text-gray-600 mb-6">
          Find your dream property with our wide range of options. Explore luxury villas, urban apartments, and cozy cottages.
        </p>
        <div className="flex space-x-4 justify-center">
          <Link
            to="/properties"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View Properties
          </Link>
          <Link
            to="/login"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
