import axios from 'axios';

const loginUser = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3000/users/login', {
      email,
      password,
    });
    return response.data; // Aquí recibimos el objeto con accessToken y refreshToken
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    return { error: 'Error al iniciar sesión' };
  }
};

export default loginUser;
