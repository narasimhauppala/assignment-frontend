export const getBannerData = async () => {
    const response = await fetch('https://assignment-backend-vzjs.onrender.com/api/banner');
    const data = await response.json();
    return data;
  };
  
  export const updateBannerData = async (data) => {
    await fetch('https://assignment-backend-vzjs.onrender.com/api/banner', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  };
  