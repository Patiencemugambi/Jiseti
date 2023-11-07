// // import React, { useState, useEffect } from 'react';

// // const AdminRedFlagForm = () => {
// //   const [redFlag, setRedFlag] = useState({});
// //   const [statuses, setStatuses] = useState([]);

// //   useEffect(() => {
// //     const fetchRedFlag = async () => {
// //       try {
// //         const redFlagResponse = await fetch('https://jisetidb.onrender.com/red_flags/1');
// //         const redFlagData = await redFlagResponse.json();
// //         setRedFlag(redFlagData);
// //       } catch (error) {
// //         console.error('Error fetching red flag:', error);
// //       }
// //     };

// //     const fetchStatuses = async () => {
// //       try {
// //         const statusesResponse = await fetch('https://jisetidb.onrender.com/statuses');
// //         const statusesData = await statusesResponse.json();
// //         setStatuses(statusesData);
// //       } catch (error) {
// //         console.error('Error fetching statuses:', error);
// //       }
// //     };

// //     fetchRedFlag();
// //     fetchStatuses();
// //   }, []);

// //   const updateStatus = async (statusId) => {
// //     try {
// //       const response = await fetch(`https://jisetidb.onrender.com/statuses/${statusId}`, {
// //         method: 'PUT',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ id: redFlag.id, status_id: statusId }),
// //       });

// //       if (response.ok) {
// //         const updatedRedFlag = { ...redFlag, status_id: statusId };
// //         setRedFlag(updatedRedFlag);
// //       } else {
// //         console.error('Error updating status:', response.statusText);
// //       }
// //     } catch (error) {
// //       console.error('Error updating status:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>ADMIN RED FLAG FORM</h2>
// //       <p>Date: {redFlag.date || 'Loading...'}</p>
// //       <p>Incident Type: {redFlag.incident_type || 'Loading...'}</p>
// //       <p>Description: {redFlag.description || 'Loading...'}</p>
// //       <p>County: {redFlag.county || 'Loading...'}</p>
// //       <p>Location: {redFlag.location || 'Loading...'}</p>
// //       <p>Additional Details: {redFlag.additional_details || 'Loading...'}</p>
// //       <p>View attached files Here: {redFlag.attachments || 'Loading...'}</p>

// //       <div>
// //         <h3>Change Status:</h3>
// //         {statuses.map(status => (
// //           <button key={status.id} onClick={() => updateStatus(status.id)}>
// //             {status.name}
// //           </button>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminRedFlagForm;




// import React, { useState, useEffect } from 'react';

// const AdminRedFlagForm = () => {
//   const [redFlag, setRedFlag] = useState({});
//   const [statuses, setStatuses] = useState([]);

//   useEffect(() => {
//     const fetchRedFlag = async () => {
//       try {
//         const redFlagResponse = await fetch('https://jisetidb.onrender.com/red_flags/1');
//         const redFlagData = await redFlagResponse.json();
//         setRedFlag(redFlagData);
//       } catch (error) {
//         console.error('Error fetching red flag:', error);
//       }
//     };

//     const fetchStatuses = async () => {
//       try {
//         const statusesResponse = await fetch('https://jisetidb.onrender.com/statuses');
//         const statusesData = await statusesResponse.json();
//         setStatuses(statusesData);
//       } catch (error) {
//         console.error('Error fetching statuses:', error);
//       }
//     };

//     fetchRedFlag();
//     fetchStatuses();
//   }, []);

//   const updateStatus = async (statusId) => {
//     try {
//       const response = await fetch(`https://jisetidb.onrender.com/red_flags/${redFlag.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ status_id: statusId }), // Update status_id
//       });

//       if (response.ok) {
//         fetchRedFlag(); // Refresh redFlag data to reflect the changes in the UI
//       } else {
//         console.error('Error updating status:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error updating status:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>ADMIN RED FLAG FORM</h2>
//       <p>Date: {redFlag.date || 'Loading...'}</p>
//       <p>Incident Type: {redFlag.incident_type || 'Loading...'}</p>
//       <p>Description: {redFlag.description || 'Loading...'}</p>
//       <p>County: {redFlag.county || 'Loading...'}</p>
//       <p>Location: {redFlag.location || 'Loading...'}</p>
//       <p>Additional Details: {redFlag.additional_details || 'Loading...'}</p>
//       <p>View attached files Here: {redFlag.attachments || 'Loading...'}</p>

//       <div>
//         <h3>Change Status:</h3>
//         {statuses.map(status => (
//           <button key={status.id} onClick={() => updateStatus(status.id)}>
//             {status.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminRedFlagForm;





import React, { useState, useEffect } from 'react';

const AdminRedFlagForm = () => {
  const [redFlag, setRedFlag] = useState({});
  const [statuses, setStatuses] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(null);

  useEffect(() => {
    const fetchRedFlag = async () => {
      try {
        const redFlagResponse = await fetch('https://jisetidb.onrender.com/red_flags/1');
        const redFlagData = await redFlagResponse.json();
        setRedFlag(redFlagData);
      } catch (error) {
        console.error('Error fetching red flag:', error);
      }
    };

    const fetchStatuses = async () => {
      try {
        const statusesResponse = await fetch('https://jisetidb.onrender.com/statuses');
        const statusesData = await statusesResponse.json();
        setStatuses(statusesData);
      } catch (error) {
        console.error('Error fetching statuses:', error);
      }
    };

    fetchRedFlag();
    fetchStatuses();
  }, []);

  const updateStatus = async (statusId) => {
    try {
      const response = await fetch(`https://jisetidb.onrender.com/red_flags/${redFlag.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status_id: statusId }),
      });

      if (response.ok) {
        const selected = statuses.find(status => status.id === statusId);
        setSelectedStatus(selected);
        fetchRedFlag();
      } else {
        console.error('Error updating status:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div>
      <h2>ADMIN RED FLAG FORM</h2>
      <p>Selected Status: {selectedStatus ? selectedStatus.name : 'No status selected'}</p>
      <p>Date: {redFlag.date || 'Loading...'}</p>
      <p>Incident Type: {redFlag.incident_type || 'Loading...'}</p>
      <p>Description: {redFlag.description || 'Loading...'}</p>
      <p>County: {redFlag.county || 'Loading...'}</p>
      <p>Location: {redFlag.location || 'Loading...'}</p>
      <p>Additional Details: {redFlag.additional_details || 'Loading...'}</p>
      <p>View attached files Here: {redFlag.attachments || 'Loading...'}</p>

      <div>
        <h3>Change Status:</h3>
        {statuses.map(status => (
          <button key={status.id} onClick={() => updateStatus(status.id)}>
            {status.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminRedFlagForm;
