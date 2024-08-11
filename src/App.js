import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Dashboard from './Dashboard';
import { getBannerData } from './api';

function App() {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    fetchBannerData();
  }, []);

  const fetchBannerData = async () => {
    const data = await getBannerData();
    if (data) {
      setBannerData(data);
    } else {
      console.error('No banner data available.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {bannerData ? (
        <div className="max-w-4xl mx-auto">
          <Banner data={bannerData} />
          <Dashboard data={bannerData} onUpdate={fetchBannerData} />
        </div>
      ) : (
        <p className="text-center text-red-500">Error loading banner data.</p>
      )}
    </div>
  );
}

export default App;
