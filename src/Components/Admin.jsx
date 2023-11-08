import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AdminPanel = ({ onUpdateStatus }) => {
  const [data, setData] = useState([]);
  const postStatus = async (newStatus) => {
    try {
      const response = await axios.post('https://jisetidb.onrender.com/statuses/', {
        status: newStatus,
        name: 'SomeName', 
      });
      return response.data.status_id;
    } catch (error) {
      console.error('Error posting new status:', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const interventionsResponse = await axios.get('https://jisetidb.onrender.com/interventions/');
        const redFlagsResponse = await axios.get('https://jisetidb.onrender.com/red_flags');

        const interventionsData = interventionsResponse.data.map(item => ({
          id: item.id,
          reportedBy: item.user_id,
          reportType: 'Intervention',
          title: item.title,
          dateTime: item.date, // Replace with the actual property name for date
          description: item.description,
          county: item.county,
          location: item.location,
          additionalDetails: item.additionaldetails,
          status: item.status, // Add status property if available in the API response
        }));

        const redFlagsData = redFlagsResponse.data.map(item => ({
          id: item.id,
          reportedBy: item.user_id,
          reportType: 'Red Flag',
          date: item.date,
          description: item.description,
          county: item.county,
          location: item.location,
          additionalDetails: item.additionaldetails,
          status: item.status, // Add status property if available in the API response
        }));

        const combinedData = [...interventionsData, ...redFlagsData];
        setData(combinedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleStatusChange = async (recordId, newStatus) => {
    try {
      let statusId = null;
  
      if (newStatus !== 'under_investigation') {
        // Wait for postStatus to resolve before proceeding
        statusId = await postStatus(newStatus);
        console.log('New status_id:', statusId);
      }
  
      // Update the record's status using the obtained status_id
      if (onUpdateStatus && typeof onUpdateStatus === 'function') {
        onUpdateStatus(recordId, statusId || newStatus);
      }
  
      setData(prevData =>
        prevData.map(item => {
          if (item.id === recordId) {
            return {
              ...item,
              status: newStatus,
            };
          }
          return item;
        })
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };
  


  return (
   <div className="flex flex-col items-center h-screen">
      <h1 className="text-3xl font-bold mb-6">ADMIN PANEL</h1>
      <h3 className="text-3xl font-bold mb-6">Reports</h3>

      <table className="min-w-full border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 border-b">Reported by</th>
            <th className="py-2 px-4 bg-gray-200 border-b">Report Type</th>
            <th className="py-2 px-4 bg-gray-200 border-b">Title</th>
            <th className="py-2 px-4 bg-gray-200 border-b">Date/Time</th>
            <th className="py-2 px-4 bg-gray-200 border-b">Description</th>
            <th className="py-2 px-4 bg-gray-200 border-b">County</th>
            <th className="py-2 px-4 bg-gray-200 border-b">Location</th>
            <th className="py-2 px-4 bg-gray-200 border-b">Additional Details</th>
            <th className="py-2 px-4 bg-gray-200 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{item.reportedBy}</td>
              <td className="py-2 px-4 border-b">{item.reportType}</td>
              <td className="py-2 px-4 border-b">{item.title || '-'}</td>
              <td className="py-2 px-4 border-b">{item.dateTime || item.date}</td>
              <td className="py-2 px-4 border-b">{item.description}</td>
              <td className="py-2 px-4 border-b">{item.county}</td>
              <td className="py-2 px-4 border-b">{item.location}</td>
              <td className="py-2 px-4 border-b">{item.additionalDetails}</td>
              <td className="py-2 px-4 border-b">
              <select

value={item.status || 'under_investigation'}
onChange={(e) => handleStatusChange(item.id, e.target.value)}
>
<option value="under_investigation">Under Investigation</option>
<option value="rejected">Rejected</option>
<option value="resolved">Resolved</option>
</select>


              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default AdminPanel;

