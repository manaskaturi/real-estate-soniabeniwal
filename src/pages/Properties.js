import React from 'react';
import PropertyCard from '../components/PropertyCard';

const mockProperties = [
  {
    id: 1,
    title: 'Luxury Villa',
    description: 'A beautiful villa with sea views.',
    price: 1200000,
    image: 'https://via.placeholder.com/300x200.png?text=Luxury+Villa',
  },
  {
    id: 2,
    title: 'Urban Apartment',
    description: 'Modern apartment in the city center.',
    price: 350000,
    image: 'https://via.placeholder.com/300x200.png?text=Urban+Apartment',
  },
  {
    id: 3,
    title: 'Cozy Cottage',
    description: 'A charming cottage in the countryside.',
    price: 250000,
    image: 'https://via.placeholder.com/300x200.png?text=Cozy+Cottage',
  },
];

const Properties = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Property Listings
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
