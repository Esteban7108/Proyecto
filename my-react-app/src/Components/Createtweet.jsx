import React from 'react';
import { useForm } from 'react-hook-form';
import { Titulos } from './Titulos';
import { Subitulos } from './Subtitulos';
import Dark_mode from './Dark-mode';
import Savetweets from '../Logic/Savetweets';

export default function Createtweet() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {
        try {
            const response = await Savetweets(data.tweet); // Envía solo el texto del tweet
            console.log(response);
        } catch (error) {
            console.error('Error:', error);
        }
    };
  
    return (
        <div className="flex flex-col items-center bg-blue-50 dark:bg-gray-900 h-max">
            <div className='flex justify-end w-full'>
                <Dark_mode />
            </div>
  
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 pb-8">
                <div><Titulos label={"Publicar Tweet"} /></div>
  
                <div>
                    <Subitulos label={"Ingresa tu tweet"} />
                    <div className='flex p-1'></div>
                    <textarea className="flex flex-col border-4 w-80" placeholder="Tweet" {...register("tweet", { required: true })} />
                    {errors.tweet && <span className="text-red-500">El tweet es requerido</span>}
                </div>
  
                <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
            </form>
        </div>
    );
}
