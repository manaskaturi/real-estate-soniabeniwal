import React, { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Fetch recommended properties from the backend
    fetch('https://your-backend-url.com/api/recommendations', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Pass user's token for personalization
      },
    })
      .then((res) => res.json())
      .then((data) => setRecommendations(data))
      .catch((err) => console.error('Error fetching recommendations:', err));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Recommended Properties for You
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.length > 0 ? (
          recommendations.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p className="text-center text-gray-600">Loading recommendations...</p>
        )}
      </div>
    </div>
  );
};

export default Recommendations;