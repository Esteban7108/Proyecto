import axios from 'axios';

const loginUser = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3000/users/login', { 
      email: email,
      password: password
    });
    return response.data; 
  } catch (error) {
    console.error('Error:', error);
    throw error; 
  }
}

export default loginUser;
