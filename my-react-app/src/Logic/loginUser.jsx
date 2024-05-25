import axios from 'axios';

const loginUser = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3000/login', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : { message: 'Error al iniciar sesión' };
  }
};

export default loginUser;
