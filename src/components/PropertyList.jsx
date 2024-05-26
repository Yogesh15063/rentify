import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/properties')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the properties!', error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {properties.map(property => (
        <div key={property._id} className="border p-4 rounded">
          <h3 className="text-xl font-bold">{property.title}</h3>
          <p>{property.description}</p>
          <p>Location: {property.location}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          <p>Rent: ${property.rent}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
