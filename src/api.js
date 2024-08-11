export const getBannerData = async () => {
    try {
      const response = await fetch('https://assignment-backend-vzjs.onrender.com/api/banner');
      
      // Check if the response is not empty
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Attempt to parse the response as JSON
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching banner data:', error);
      return null;
    }
  };