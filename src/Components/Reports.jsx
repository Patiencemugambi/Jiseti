import React, { useState, useEffect } from 'react';

const Reports = () => {
  const [redFlags, setRedFlags] = useState([]);
  const [interventions, setInterventions] = useState([]);
  const [editedRedFlag, setEditedRedFlag] = useState({});
  const [editedIntervention, setEditedIntervention] = useState({});
  const [isEditingRedFlag, setIsEditingRedFlag] = useState(false);
  const [isEditingIntervention, setIsEditingIntervention] = useState(false);

  useEffect(() => {
    // Fetch red flags from the red flags endpoint
    fetch('https://jisetidb.onrender.com/red_flags/')
      .then((response) => response.json())
      .then((data) => {
        setRedFlags(data);
      })
      .catch((error) => {
        console.error('Error fetching red flags:', error);
      });

    // Fetch interventions from the interventions endpoint
    fetch('https://jisetidb.onrender.com/interventions/')
      .then((response) => response.json())
      .then((data) => {
        setInterventions(data);
      })
      .catch((error) => {
        console.error('Error fetching interventions:', error);
      });
  }, []);

  const handleEditRedFlag = (redFlag) => {
    setEditedRedFlag(redFlag);
    setIsEditingRedFlag(true);
  };

  const handleEditIntervention = (intervention) => {
    setEditedIntervention(intervention);
    setIsEditingIntervention(true);
  };

  const handleEditRedFlagSubmit = async () => {
    try {
      const response = await fetch(`https://jisetidb.onrender.com/red_flags/${red_flag_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedRedFlag),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or update the UI
        setIsEditingRedFlag(false);
        fetchRedFlags(); // Fetch updated red flags after editing
      } else {
        throw new Error('Failed to edit red flag');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors, such as displaying an error message to the user.
    }
  };

  const handleEditInterventionSubmit = async () => {
    try {
      const response = await fetch(`https://jisetidb.onrender.com/interventions/${editedIntervention.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedIntervention),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or update the UI
        setIsEditingIntervention(false);
        fetchInterventions(); // Fetch updated interventions after editing
      } else {
        throw new Error('Failed to edit intervention');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors, such as displaying an error message to the user.
    }
  };

  const handleDeleteRedFlag = async (id) => {
    try {
      const response = await fetch(`https://jisetidb.onrender.com/red_flags/${red_flag_id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or update the UI
        fetchRedFlags(); // Fetch updated red flags after deletion
      } else {
        throw new Error('Failed to delete red flag');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors, such as displaying an error message to the user.
    }
  };

  const handleDeleteIntervention = async (id) => {
    try {
      const response = await fetch(`https://jisetidb.onrender.com/interventions/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or update the UI
        fetchInterventions(); // Fetch updated interventions after deletion
      } else {
        throw new Error('Failed to delete intervention');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors, such as displaying an error message to the user.
    }
  };

  const fetchRedFlags = async () => {
    try {
      const response = await fetch('https://jisetidb.onrender.com/red_flags/');
      if (response.ok) {
        const data = await response.json();
        setRedFlags(data);
      } else {
        throw new Error('Failed to fetch red flags');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors, such as displaying an error message to the user.
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Red Flags</h2>
      {/* Render red flags */}
      {redFlags.map((redFlag) => (
        <div key={redFlag.id} className="mb-4 p-4 border rounded">
          <h3 className="font-semibold mb-2">Incident Type: {redFlag.incidentType}</h3>
          <p><strong>Date:</strong> {redFlag.date}</p>
          <p><strong>Description:</strong> {redFlag.description}</p>
          <p><strong>County:</strong> {redFlag.county}</p>
          <p><strong>Location:</strong> {redFlag.location}</p>
          <p><strong>Status:</strong> {redFlag.status}</p> 
          <div className="mt-2">
            <button onClick={() => handleEditRedFlag(redFlag)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2">Edit</button>
            <button onClick={() => handleDeleteRedFlag(redFlag.id)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Delete</button>
          </div>
        </div>
      ))}

      <h2 className="text-2xl font-semibold my-4">Interventions</h2>
      {/* Render interventions */}
      {interventions.map((intervention) => (
        <div key={intervention.id} className="mb-4 p-4 border rounded">
          <h3 className="font-semibold mb-2">Title: {intervention.title}</h3>
          <p><strong>Date:</strong> {intervention.date}</p>
          <p><strong>Description:</strong> {intervention.description}</p>
          <p><strong>County:</strong> {intervention.county}</p>
          <p><strong>Location:</strong> {intervention.location}</p>
          <p><strong>Status:</strong> {intervention.status}</p>
          <div className="mt-2">
            <button onClick={() => handleEditIntervention(intervention)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2">Edit</button>
            <button onClick={() => handleDeleteIntervention(intervention.id)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Delete</button>
          </div>
        </div>
      ))}

{isEditingRedFlag && (
  <div className="mt-4 p-4 border rounded">
    <h2 className="text-2xl font-semibold mb-4">Edit Red Flag</h2>
    <form onSubmit={handleEditRedFlagSubmit}>
      <input
        type="text"
        value={editedRedFlag.incidentType}
        onChange={(e) => setEditedRedFlag({ ...editedRedFlag, incidentType: e.target.value })}
        className="mb-2 p-2 border rounded w-full"
        placeholder="Incident Type"
      />
      <input
        type="date"
        value={editedRedFlag.date}
        onChange={(e) => setEditedRedFlag({ ...editedRedFlag, date: e.target.value })}
        className="mb-2 p-2 border rounded w-full"
        placeholder="Date"
      />
      <textarea
        value={editedRedFlag.description}
        onChange={(e) => setEditedRedFlag({ ...editedRedFlag, description: e.target.value })}
        className="mb-2 p-2 border rounded w-full"
        placeholder="Description"
      />
      <input
        type="text"
        value={editedRedFlag.county}
        onChange={(e) => setEditedRedFlag({ ...editedRedFlag, county: e.target.value })}
        className="mb-2 p-2 border rounded w-full"
        placeholder="County"
      />
      <input
        type="text"
        value={editedRedFlag.location}
        onChange={(e) => setEditedRedFlag({ ...editedRedFlag, location: e.target.value })}
        className="mb-2 p-2 border rounded w-full"
        placeholder="Location"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Save
      </button>
    </form>
  </div>
)}
{isEditingIntervention && (
  <div className="mt-4 p-4 border rounded">
    <h2 className="text-2xl font-semibold mb-4">Edit Intervention</h2>
    <form onSubmit={handleEditInterventionSubmit}>
      <input
        type="text"
        value={editedIntervention.title}
        onChange={(e) => setEditedIntervention({ ...editedIntervention, title: e.target.value })}
        className="mb-2 p-2 border rounded w-full"
        placeholder="Title"
      />
      <input
        type="date"
        value={editedIntervention.date}
        onChange={(e) => setEditedIntervention({ ...editedIntervention, date: e.target.value })}
        className="mb-2 p-2 border rounded w-full"
        placeholder="Date"
      />
      <textarea
        value={editedIntervention.description}
        onChange={(e) => setEditedIntervention({ ...editedIntervention, description: e.target.value })}
        className="mb-2 p-2 border rounded w-full"
        placeholder="Description"
      />
      <input
        type="text"
        value={editedIntervention.county}
        onChange={(e) => setEditedIntervention({ ...editedIntervention, county: e.target.value })}
        className="mb-2 p-2 border rounded w-full"
        placeholder="County"
      />
      <input
        type="text"
        value={editedIntervention.location}
        onChange={(e) => setEditedIntervention({ ...editedIntervention, location: e.target.value })}
        className="mb-2 p-2 border rounded w-full"
        placeholder="Location"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Save
      </button>
    </form>
  </div>
)}
    </div>
  );
};

export default Reports;
