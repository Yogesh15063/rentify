import React, { useState } from 'react';
import axios from 'axios';

const AddProperty = ({ token }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    location: '',
    bedrooms: 0,
    bathrooms: 0,
    rent: 0
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/properties', form, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        console.log('Property added!', response.data);
      })
      .catch(error => {
        console.error('There was an error adding the property!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Title:</label>
        <input type="text" name="title" value={form.title} onChange={handleChange} className="border p-2 w-full" />
      </div>
      <div>
        <label className="block">Description:</label>
        <input type="text" name="description" value={form.description} onChange={handleChange} className="border p-2 w-full" />
      </div>
      <div>
        <label className="block">Location:</label>
        <input type="text" name="location" value={form.location} onChange={handleChange} className="border p-2 w-full" />
      </div>
      <div>
        <label className="block">Bedrooms:</label>
        <input type="number" name="bedrooms" value={form.bedrooms} onChange={handleChange} className="border p-2 w-full" />
      </div>
      <div>
        <label className="block">Bathrooms:</label>
        <input type="number" name="bathrooms" value={form.bathrooms} onChange={handleChange} className="border p-2 w-full" />
      </div>
      <div>
        <label className="block">Rent:</label>
        <input type="number" name="rent" value={form.rent} onChange={handleChange} className="border p-2 w-full" />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Add Property</button>
    </form>
  );
};

export default AddProperty;
