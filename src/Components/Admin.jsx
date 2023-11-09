import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { color } from 'style-value-types';


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
        const redFlagsResponse = await axios.get('https://jisetidb.onrender.com/red_flags/');

        const interventionsData = interventionsResponse.data.map(item => ({
          id: item.id,
          reportedBy: item.id,
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
          reportedBy: item.id,
          reportType: 'Red Flag',
          title: item.incident_type,
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
    <div className="relative flex flex-col items-center h-screen">
      <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-r from-red-500 to-[#3d0e15] opacity-75"></div>
      <img
        src="https://images.jacobinmag.com/wp-content/uploads/sites/4/2021/11/17095858/corruption-new.jpg"
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
  
      <div className="relative z-20 text-white">
        <h1 className="text-3xl font-bold text-center mt-6 mb-6"style={{ color: '#9d9999' }}>ADMIN PANEL</h1>
        <h3 className="text-1xl font-medium mb-6" style={{ color: '#9d9999' }}>REPORTS</h3>
  
        <table className="min-w-full  ">
        <thead className="text-white">
  <tr>
    <th className="py-2 px-4 bg-#9d9999 border-b">Reported by</th>
    <th className="py-2 px-4 bg-#9d9999 border-b">Report Type</th>
    <th className="py-2 px-4 bg-#9d9999 border-b">Title</th>
    <th className="py-2 px-4 bg-#9d9999 border-b">Date/Time</th>
    <th className="py-2 px-4 bg-#9d9999 border-b">Description</th>
    <th className="py-2 px-4 bg-#9d9999 border-b">County</th>
    <th className="py-2 px-4 bg-#9d9999 border-b">Location</th>
    <th className="py-2 px-4 bg-#9d9999 border-b">Additional Details</th>
    <th className="py-2 px-4 bg-#9d9999 border-b">Status</th>
  </tr>
</thead>

<tbody>
  {data.map((item, index) => (
    <tr key={index}>
      <td className="py-2 px-4 text-black border-b" >{item.reportedBy}</td>
      <td className="py-2 px-4 text-black border-b" >{item.reportType}</td>
      <td className="py-2 px-4 text-black border-b" >{item.title || '-'}</td>
      <td className="py-2 px-4 text-black border-b" >{item.dateTime || item.date}</td>
      <td className="py-2 px-4 text-black border-b" >{item.description}</td>
      <td className="py-2 px-4 text-black border-b" >{item.county}</td>
      <td className="py-2 px-4 text-black border-b" >{item.location}</td>
      <td className="py-2 px-4 text-black border-b" >{item.additionalDetails}</td>
      <td className="py-2 px-4 text-black border-b" >
        <select
          value={item.status || 'under_investigation'}
          onChange={(e) => handleStatusChange(item.id, e.target.value)}
          style={{ color: item.status === 'resolved' ? 'green' : item.status === 'rejected' ? 'red' : 'blue' }}
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
    </div>
  );
  
};


export default AdminPanel;

