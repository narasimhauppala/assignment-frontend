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
    setBannerData(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {bannerData && (
        <div className="max-w-4xl mx-auto">
          <Banner data={bannerData} />
          <Dashboard data={bannerData} onUpdate={fetchBannerData} />
        </div>
      )}
    </div>
  );
}

export default App;
