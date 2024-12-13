import React, { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const userPreferences = ['luxury', 'urban'];  // Example user preferences

    fetch('http://localhost:5000/api/recommendations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tags: userPreferences }),
    })
      .then((res) => res.json())
      .then((data) => setRecommendations(data))
      .catch((err) => console.error('Error fetching recommendations:', err));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Recommended Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
