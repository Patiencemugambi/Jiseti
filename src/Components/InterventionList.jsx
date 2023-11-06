import React, { useState, useEffect } from 'react';

const InterventionList = () => {
  const [interventions, setInterventions] = useState([]);
  const [editedIntervention, setEditedIntervention] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch interventions from the API endpoint
    fetch('https://jisetidb.onrender.com/interventions/')
      .then((response) => response.json())
      .then((data) => {
        setInterventions(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleEditClick = (intervention) => {
    setEditedIntervention(intervention);
    setIsEditing(true);
  };
  
  const handleEdit = async () => {
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
        setIsEditing(false);
        fetchInterventions(); // Fetch updated interventions after editing
      } else {
        throw new Error('Failed to edit intervention');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors, such as displaying an error message to the user.
    }
  };

  const handleDelete = async (id) => {
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

  const fetchInterventions = async () => {
    try {
      const response = await fetch('https://jisetidb.onrender.com/interventions/');
      if (response.ok) {
        const data = await response.json();
        setInterventions(data);
      } else {
        throw new Error('Failed to fetch interventions');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors, such as displaying an error message to the user.
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Intervention List</h2>
      <ul>
        {interventions.map((intervention) => (
          <li key={intervention.id} className="mb-4 p-4 border rounded relative">
            <span className="mr-2 font-semibold">{intervention.title}</span>
            <button className="ml-2 p-2 bg-gray-300 rounded hover:bg-gray-400" onClick={() => handleEditClick(intervention)}>
              Edit
            </button>
            <button className="ml-2 p-2 bg-red-500 rounded text-white hover:bg-red-600" onClick={() => handleDelete(intervention.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {isEditing && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="text-2xl font-semibold mb-4">Edit Intervention</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEdit();
            }}
          >
            {/* Render form fields for editing */}
            <input
              type="text"
              value={editedIntervention.title}
              onChange={(e) => setEditedIntervention({ ...editedIntervention, title: e.target.value })}
              className="mb-2 p-2 border rounded w-full"
              placeholder="Title"
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

export default InterventionList;
