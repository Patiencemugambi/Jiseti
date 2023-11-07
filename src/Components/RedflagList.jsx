import React, { useState, useEffect } from 'react';
import RedFlagDetailsModal from './RedFlagDetailsModal ';

const RedFlagList = () => {
  const [redFlags, setRedFlags] = useState([]);
  const [openedMenuId, setOpenedMenuId] = useState(null);
  const [editedRedFlag, setEditedRedFlag] = useState({
    id: '',
    incidentType: '',
    date: '',
    description: '',
    county: '',
    location: '',
    // ... other properties
  });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedRedFlag, setSelectedRedFlag] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
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

    fetchRedFlags();
  }, []);

  const handleViewDetails = (redFlag) => {
    setSelectedRedFlag(redFlag);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedRedFlag(null);
    setIsModalOpen(false);
  };

  const handleEditClick = (redFlag) => {
    setEditedRedFlag(redFlag);
    setIsEditing(true);
  };

  const handleEdit = async () => {
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
        setIsEditing(false);
        fetchRedFlags(); // Fetch updated red flags after editing
      } else {
        throw new Error('Failed to edit red flag');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle errors, such as displaying an error message to the user.
    }
  };

  const handleDelete = async (red_flag_id) => {
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

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Red Flags</h2>
      <ul>
        {redFlags.map((redFlag) => (
          <li key={redFlag.id} className="mb-4 p-4 border rounded relative">
            <span className="mr-2 font-semibold">{redFlag.incidentType}</span> - {redFlag.date} - {redFlag.description} - {redFlag.county} - {redFlag.location}
            <button className="ml-2 p-2 bg-gray-300 rounded hover:bg-gray-400" onClick={() => setOpenedMenuId(redFlag.id)}>...</button>

            {/* Hamburger menu */}
            {openedMenuId === redFlag.id && (
              <div className="absolute right-0 top-0 mt-2 bg-white border rounded shadow-lg">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => { handleEditClick(redFlag); setOpenedMenuId(null); }}>Edit</button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => { handleDelete(redFlag.id); setOpenedMenuId(null); }}>Delete</button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => { handleViewDetails(redFlag); setOpenedMenuId(null); }}>View Details</button>
              </div>
            )}
          </li>
        ))}
      </ul>

      {isEditing && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="text-2xl font-semibold mb-4">Edit Red Flag</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEdit();
            }}
          >
            {/* Render form fields for editing */}
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
            <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">Save</button>
          </form>
        </div>
      )}

      {isModalOpen && selectedRedFlag && <RedFlagDetailsModal redFlag={selectedRedFlag} onClose={handleCloseModal} />}
    </div>
  );
};

export default RedFlagList;
