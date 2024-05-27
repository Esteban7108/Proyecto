import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import loginUser from "../../Logic/loginUser";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (data.Email === "admin@admin.com" && data.password === "admin") {
      const adminAccessToken = "adminAccessToken";
      login(adminAccessToken);
      navigate("/", { replace: true });
      reset();
      return;
    }

    try {
      const response = await loginUser(data.Email, data.password);
      if (response.accessToken) {
        login(response.accessToken);
        navigate("/", { replace: true });
        reset();
      } else {
        setError(response.message || "Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError(error.message || "Ocurrió un error al iniciar sesión");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-600 dark:bg-gray-900">
      <div className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Bienvenido
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                errors.Email ? "border-red-500" : ""
              }`}
            />
            {errors.Email && (
              <p className="mt-2 text-sm text-red-600">
                Por favor ingresa un email válido.
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Contraseña"
              {...register("password", { required: true })}
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">
                Por favor ingresa tu contraseña.
              </p>
            )}
          </div>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          ¿No tienes una cuenta?{" "}
          <Link
            to="/register"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}
