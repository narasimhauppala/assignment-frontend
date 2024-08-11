import React, { useState } from 'react';
import { updateBannerData } from './api';

function Dashboard({ data, onUpdate }) {
  const [description, setDescription] = useState(data.description);
  const [timer, setTimer] = useState(data.timer);
  const [link, setLink] = useState(data.link);
  const [visible, setVisible] = useState(data.visible);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBannerData({ description, timer, link, visible });
    onUpdate();
  };

  return (
    <div className="bg-white p-5 mt-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Timer (seconds):</label>
          <input
            type="number"
            value={timer}
            onChange={(e) => setTimer(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Link:</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={visible}
            onChange={(e) => setVisible(e.target.checked)}
            className="mr-2"
          />
          <label className="text-sm font-medium text-gray-700">Visible</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md shadow-lg hover:bg-blue-700"
        >
          Update Banner
        </button>
      </form>
    </div>
  );
}

export default Dashboard;
