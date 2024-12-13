import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/properties')  // Ensure the backend URL is correct
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error('Error fetching properties:', err));
  }, []);

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Property Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {properties.length > 0 ? (
          properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{property.title}</h2>
                <p className="text-gray-600">{property.description}</p>
                <p className="text-lg font-bold mt-2">Price: ${property.priceInUSD.toLocaleString()}</p>
                <div className="mt-4">
                  <Link
                    to={`/property/${property.id}`}
                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default Properties;
