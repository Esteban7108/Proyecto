import axios from 'axios';

const registerUser = async (data) => {
  try {
    const response = await axios.post('http://localhost:3000/users', data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response);
      throw new Error(error.response.data || 'Internal Server Error');
    } else if (error.request) {
      console.error('Error request:', error.request);
      throw new Error('No response received from the server');
    } else {
      console.error('Error message:', error.message);
      throw new Error(error.message);
    }
  }
};

export default registerUser;
