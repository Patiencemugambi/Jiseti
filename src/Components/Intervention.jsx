import React, { useState, useEffect } from 'react';

const InterventionForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: {
      latitude: '',
      longitude: '',
      county: '',
      area: '',
    },
    additionalDetails: '',
    files: [],
  });

  useEffect(() => {
    const fetchUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Make API request to Google Maps Geocoding API
          const apiKey = 'AIzaSyAd4QNyqDJawmkFmEC_YDojfyUHUeXpH80';
          const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`);
          const data = await response.json();
          console.log(data)

          // Extract county and area from the API response
          const county = data.results[0].address_components.find(component => component.types.includes('administrative_area_level_2')).long_name;
          const area = data.results[0].address_components.find(component => component.types.includes('administrative_area_level_1')).long_name;

          setFormData((prevData) => ({
            ...prevData,
            location: {
              latitude: latitude,
              longitude: longitude,
              county: county,
              area: area,
            },
          }));
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    fetchUserLocation();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

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
    console.log(formData);
  };

  return (
    <div>
      <h2>INTERVENTION FORM</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Brief Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label>Location Latitude:</label>
          <input
            type="text"
            name="latitude"
            value={formData.location.latitude}
            readOnly
          />
        </div>
        <div>
          <label>Location Longitude:</label>
          <input
            type="text"
            name="longitude"
            value={formData.location.longitude}
            readOnly
          />
        </div>
        <div>
          <label>County:</label>
          <input
            type="text"
            name="county"
            value={formData.location.county}
            readOnly
          />
        </div>
        <div>
          <label>Area:</label>
          <input
            type="text"
            name="area"
            value={formData.location.area}
            readOnly
          />
        </div>
        <div>
          <label>Additional Details:</label>
          <textarea
            name="additionalDetails"
            value={formData.additionalDetails}
            onChange={handleInputChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label>Upload Files:</label>
          <input type="file" name="files" onChange={handleFileChange} multiple />
        </div>
        <div>
          <button type="submit">Submit Request</button>
          <button type="reset">Clear Form</button>
        </div>
      </form>
    </div>
  );
};

export default InterventionForm;
