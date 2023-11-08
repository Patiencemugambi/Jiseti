import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = ({ onUpdateStatus }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const interventionsResponse = await axios.get('https://jisetidb.onrender.com/interventions');
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
      await axios.put(`https://jisetidb.onrender.com/records/${recordId}`, {
        status: newStatus,
      });

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

      // Call the onUpdateStatus callback to update status in the parent component
      onUpdateStatus(recordId, newStatus);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div>
      <h1>Reports</h1>
      <table>
        <thead>
          <tr>
            <th>Reported by</th>
            <th>Report Type</th>
            <th>Title</th> {/* For interventions */}
            <th>Date/Time</th>
            <th>Description</th>
            <th>County</th>
            <th>Location</th>
            <th>Additional Details</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.reportedBy}</td>
              <td>{item.reportType}</td>
              <td>{item.title || '-'}</td>
              <td>{item.dateTime || item.date}</td>
              <td>{item.description}</td>
              <td>{item.county}</td>
              <td>{item.location}</td>
              <td>{item.additionalDetails}</td>
              <td>
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

