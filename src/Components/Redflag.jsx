import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ReportForm = () => {
  const [incident_type, setIncidentType] = useState('');
  const [date, setDate] = useState(new Date().toISOString());
  const [description, setDescription] = useState('');
  const [additional_details, setAdditionalDetails] = useState('');
  const [county, setCounty] = useState('');
  const [location, setLocation] = useState('');
  const [attachment, setAttachment] = useState('');
  const navigate = useNavigate(); 

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');



  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAttachment(file);
  };
  const handleBackButtonClick = () => {
    // Navigate back to the Reports area when the back button is clicked
    navigate('/#reportanincident');
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
    <div className="w-3/5 mx-auto p-8  rounded-lg ">
         <h2 className="text-2xl  text-center font-medium mb-6" style={{ color: '#9d9999' }}>REPORT CORRUPTION</h2>
      <h2 className="   mb-4" style={{ color: '#9d9999' }}>RED FLAG FORM</h2>
      <button
          type="button"
          onClick={handleBackButtonClick}
          className="mr-2 border-2 border-red-500 bg-white text-red-500 hover:bg-red-500 hover:text-white py-2 px-4 rounded w-full transition duration-300"
          style={{
            borderRadius: "20px",
          }}
        >
          Back 
        </button>
         
         <div className="mb-4 text-green-500">
          {successMessage}
        </div>
      <form onSubmit={handleSubmit}>
      <div className="flex">
  <div className="mb-4 mr-10">
    <label className="block text-sm font-medium" style={{ color: '#9d9999' }}>
      Report Type:
    </label>
    <input
      type="text"
      value={incident_type}
      onChange={(e) => setIncidentType(e.target.value)}
      className="mt-1 p-2 w-full border border-gray-300 rounded shadow-lg"
      required
    />
  </div>

  <div className="mb-4">
    <label className="block text-sm font-medium" style={{ color: '#9d9999' }}>
      Date:
    </label>
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="mt-1 p-2 w-full border border-gray-300 rounded shadow-lg"
      required
    />
  </div>
</div>


        <div  className="mb-4">
        <label className="block text-sm font-medium "  style={{ color: '#9d9999' }}>
            Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded shadow-lg"
            required
          />
          </div>
           
        
          <div className="flex">
  <div className="mb-4 mr-2">
    <label className="block text-sm font-medium" style={{ color: '#9d9999' }}>
      County:
    </label>
    <input
      type="text"
      value={county}
      onChange={(e) => setCounty(e.target.value)}
      className="mt-1 p-2 w-full border border-gray-300 rounded shadow-lg"
      required
    />
  </div>

  <div className="mb-4">
    <label className="block text-sm font-medium" style={{ color: '#9d9999' }}>
      Location:
    </label>
    <input
      type="text"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
       className="mt-1 p-2 w-full border border-gray-300 rounded shadow-lg"
      required
    />
  </div>
</div>


        <div className="mb-4">
        
        <label className="block text-sm font-medium " style={{ color: '#9d9999' }}>
         Additional Details:
       </label>
       <textarea
         value={additional_details}
         onChange={(e) => setAdditionalDetails(e.target.value)}
         rows="4"
         className="mt-1 p-2 w-full border border-gray-300 rounded shadow-lg"
         required
       />
     </div>
       

        <div className="mb-4">
          <label className="block text-sm font-medium " style={{ color: '#9d9999' }}>
            Attachments:
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-1 w-full"
          />
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

export default ReportForm;
