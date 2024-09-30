import axios from 'axios';

const API_URL = 'http://localhost:5031/api/v1';

export const getAllNews = async () => {
  try {
    const response = await axios.get(`${API_URL}/News`);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
