import React, { useState } from 'react';


const InterventionForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    county: '',
    location: '',
    additionalDetails: '',
    files: [],
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
       
    // Handle form submission logic here
    fetch('https://jisetidb.onrender.com/interventions/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle API response (data from the server) here
        console.log(data); 
        setSuccessMessage('Intervention created successfully'); 
        // You can update this part based on your API response format
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="w-3/5 mx-auto p-8 border border-gray-300 rounded-lg"> {/* Tailwind CSS classes */}
      <h2 className="text-2xl font-semibold mb-6">INTERVENTION FORM</h2>
      <div className="mb-4 text-green-500">
          {successMessage}
        </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Brief Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">County:</label>
          <input
            name="county"
            value={formData.county}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Location:</label>
          <input
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Additional Details:</label>
          <textarea
            name="additionalDetails"
            value={formData.additionalDetails}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Upload Files:</label>
          <input type="file" name="files" onChange={handleFileChange} multiple className="mt-1 w-full" />
        </div>
        <div className="mt-6 flex justify-between items-center">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700">Submit Request</button>
          <button type="reset" className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-400">Clear Form</button>
        </div>
      </form>
    </div>
  );
};

export default InterventionForm;
