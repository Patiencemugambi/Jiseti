import React, { useState } from 'react';

const ReportForm = () => {
  const [incident_type, setIncidentType] = useState('');
  const [date, setDate] = useState(new Date().toISOString());
  const [description, setDescription] = useState('');
  const [additional_details, setAdditionalDetails] = useState('');
  const [county, setCounty] = useState('');
  const [location, setLocation] = useState('');
  const [attachment, setAttachment] = useState('');

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');



  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAttachment(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedDate = new Date(date).toISOString().replace('T', ' ').split('.')[0];

  
    const formData = {
      incident_type,
      date: formattedDate,
      description,
      additional_details,
      county,
      location,
    };
  

    fetch('https://jisetidb.onrender.com/red_flags/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to create red flag'); // Handle non-OK responses
      })
      .then((data) => {
        console.log(data);
        // Handle the response data here
        setSuccessMessage('Red flag created successfully'); // Set success message
        // Clear the form fields and success message after success
        setIncidentType('');
        setDate(new Date().toISOString());
        setDescription('');
        setAdditionalDetails('');
        setCounty('');
        setLocation('');
        setAttachment('');
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors, such as displaying an error message to the user.
        setErrorMessage('Failed to create red flag'); // Set error message
      });
  };
  
  

  return (
    <div className="w-3/5 mx-auto p-8 border rounded-lg shadow-lg">
        
         <h2 className="text-2xl font-semibold mb-6">REDFLAG FORM</h2>
         <div className="mb-4 text-green-500">
          {successMessage}
        </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Incident Type:
          </label>
          <input
            type="text"
            value={incident_type}
            onChange={(e) => setIncidentType(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <label className="block text-sm font-medium text-gray-600">
            Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />
           <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Attachments:
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-1 w-full"
          />
        </div>
        <div className="mb-4">
        
        <label className="block text-sm font-medium text-gray-600">
         Additional Details:
       </label>
       <textarea
         value={additional_details}
         onChange={(e) => setAdditionalDetails(e.target.value)}
         className="mt-1 p-2 w-full border rounded"
         required
       />
     </div>
     <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            County:
          </label>
          <input
            type="text"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Location:
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Date:
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        
      
        {/* <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            :
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div> */}
        
        
       
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ReportForm;
