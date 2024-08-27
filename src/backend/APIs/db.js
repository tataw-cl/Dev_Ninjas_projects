//src/services/api.js

export const fetchUserData = async () => {
  try {
    const response = await fetch('https://api.example.com/user'); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};
