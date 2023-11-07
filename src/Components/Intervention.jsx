import React, { useState } from 'react';


const InterventionForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    date:'',
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
  
    <div className="w-3/5 mx-auto p-8 border-gray-300 rounded-lg"> {/* Tailwind CSS classes */}
      <h2 className="text-2xl  text-center font-medium mb-6" style={{ color: '#9d9999' }}>REQUEST INTERVENTION</h2>
      <h2 className="   mb-4" style={{ color: '#9d9999' }}>INTERVENTION FORM</h2>
      <div className="mb-4 text-green-500">
          {successMessage}
        </div>
      <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap">
  <div className="mb-4 flex-1 mr-2">
    <label className="block text-sm font-medium" style={{ color: '#9d9999' }}>Title:</label>
    <input
      type="text"
      name="title"
      placeholder='Title'
      value={formData.title}
      onChange={handleInputChange}
      className="mt-1 p-2 border border-gray-300 rounded shadow-lg w-full"
      required
    />
  </div>

  <div className="mb-4 flex-1">
    <label className="block text-sm font-medium" style={{ color: '#9d9999' }}>Date:</label>
    <input
      type="date"
      name="date"
      value={formData.date}
      onChange={handleInputChange}
      className="mt-1 p-2 border border-gray-300 rounded shadow-lg w-full"
      required
    />
  </div>
</div>


        <div className="mb-4">
        <label className="block text-sm font-medium" style={{ color: '#9d9999' }}>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            placeholder='Description'
            onChange={handleInputChange}
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded shadow-lg"
            required
          ></textarea>
        </div>

        <div className="flex">
  <div className="mb-4 mr-2">
    <label className="block text-sm font-medium" style={{ color: '#9d9999' }}>County:</label>
    <input
      name="county"
      value={formData.county}
      onChange={handleInputChange}
      className="mt-1 p-2 border border-gray-300 rounded shadow-lg"
      required
    />
  </div>

  <div className="mb-4">
    <label className="block text-sm font-medium" style={{ color: '#9d9999' }}>Location:</label>
    <input
      name="location"
      value={formData.location}
      onChange={handleInputChange}
      className="mt-1 p-2 border border-gray-300 rounded shadow-lg"
      required
    />
  </div>
</div>


        <div className="mb-4">
          <label className="block text-sm font-medium "style={{ color: '#9d9999' }}>Additional Details:</label>
          <textarea
            name="additionalDetails"
            value={formData.additionalDetails}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded shadow-lg"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium" style={{ color: '#9d9999' }}>Upload Files:</label>
          <input type="file" name="files" onChange={handleFileChange} multiple className="mt-1 w-full" />
        </div>
        <div className="mt-6 flex justify-between items-center">
          <button type="submit"  className="mr-2 border-2 border-red-500 bg-white text-red-500 hover:bg-red-500 hover:text-white py-2 px-4 rounded w-full transition duration-300"
              style={{
                borderRadius: "20px",
              }}>
                Submit Request
                </button>

          <button type="reset"  className="border-2 border-red-500 bg-white text-red-500 hover:bg-red-500 hover:text-white py-2 px-4 rounded w-full transition duration-300"
              style={{
                borderRadius: "20px",
              }}> 
              Clear Form
              </button>
        </div>
      </form>
    </div>
  );
};

export default InterventionForm;
