import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Recommendations = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch properties from the backend
    fetch('http://localhost:5000/api/properties') // Ensure backend is running at this URL
      .then((res) => res.json())
      .then((data) => {
        setProperties(data); // Update the state with fetched properties
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.error('Error fetching properties:', err);
        setLoading(false); // Set loading to false even if an error occurs
      });
  }, []);

  // Limiting recommendations to the first 3 properties for now
  const recommendedProperties = properties.slice(0, 3);

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">AI Property Recommendations</h1>

      {/* Show loading message while fetching data */}
      {loading && <div className="text-center">Loading recommendations...</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {recommendedProperties.length > 0 ? (
          recommendedProperties.map((property) => (
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
          <div className="text-center">No recommendations found.</div>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
