import React from 'react';

const RedFlagDetailsModal = ({ redFlag, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-bg fixed inset-0 bg-gray-600 opacity-50"></div>
      <div className="modal-content bg-white p-4 w-96 rounded-lg shadow-lg z-50">
        <h2 className="text-xl font-semibold mb-4">{redFlag.incidentType} Details</h2>
        <div>
          <p>Date: {redFlag.date}</p>
          <p>Description: {redFlag.description}</p>
          <p>County: {redFlag.county}</p>
          <p>Location: {redFlag.location}</p>
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default RedFlagDetailsModal;
