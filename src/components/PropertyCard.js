import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{property.title}</h2>
        <p className="text-gray-600">{property.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-500">
            ${property.price}
          </span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
