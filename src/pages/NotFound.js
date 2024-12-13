import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-4">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 mt-4 inline-block">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
