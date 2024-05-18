import React from 'react';
import { useForm } from 'react-hook-form';
import { Titulos } from '../../Components/Titulos';
import { Subitulos } from '../../Components/Subtitulos';
import Dark_mode from '../../Components/Dark-mode';


import registerUser from '../../Logic/registerUser';


export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data); // Llama a la función de registro con los datos del formulario
      console.log(response); // Muestra la respuesta del backend en la consola
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  return (
    <div className="flex flex-col items-center bg-blue-50 dark:bg-gray-900 h-max">
      <div className='flex justify-end w-full'>
        <Dark_mode/>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 pb-8">
        <div><Titulos label={"Registro"}/></div>
       
        <div>
          <Subitulos label={"Ingresa tu nombre"} />
          <div className='flex p-1'></div>
          <input className="flex flex-col border-4 w-80" type="text" placeholder="First name" {...register("firstName", { required: true, maxLength: 80 })} />
        </div>
             
        <div>
          <Subitulos label={"Ingresa tu apellido"} />
          <div className='flex p-1'></div>
          <input className="flex flex-col border-4 w-80" type="text" placeholder="Last name" {...register("lastName", { required: true, maxLength: 100 })} />
        </div>
        
        <div>
          <Subitulos label={"Ingresa tu correo electrónico"} />
          <div className='flex p-1'></div>
          <input className="flex flex-col border-4 w-80" type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <span className="text-red-500">Correo electrónico inválido</span>}
        </div>

        <div>
          <Subitulos label={"Ingresa tu contraseña"} />
          <div className='flex p-2'></div>
          <input className="flex flex-col border-4 w-80" type="password" placeholder="Password" {...register("password", { required: true, minLength: 8 })} />
          {errors.password && <span className="text-red-500">La contraseña debe tener al menos 8 caracteres</span>}
        </div> 

     

        <input type="submit" className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
      </form>
    </div>
  );
}
