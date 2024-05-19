

import axios from "axios";

const loginUser = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:3000/users/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return { error: "Error al iniciar sesión" };
  }
};

export default loginUser;
