import React from 'react';
import { useForm } from 'react-hook-form';
import Savetweets from '../Logic/Savetweets';
import { Subitulos } from './Subtitulos';

export default function Createtweet() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userId = localStorage.getItem('userId');
console.log(typeof userId); // Verifica el tipo de datos del userId

    const userName = localStorage.getItem('userName');

    const tweetData = {
      userId,
      userName,
      tweet: data.tweet
    };
    console.log('Tweet data:', tweetData);
    try {
      const response = await Savetweets(tweetData);
      console.log(response);
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center dark:bg-gray-900 h-max w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 w-full pb-8">
        <div className='flex flex-col items-center'>
          <div>
            <Subitulos label={"Ingresa tu tweet"} />
            <br></br>
          </div>
          <div>
            <textarea className="flex flex-col border-4 w-96" placeholder="Tweet" {...register("tweet", { required: true })} />
            {errors.tweet && <span className="text-red-500">El tweet es requerido</span>}
          </div>
        </div>
        <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
      </form>
    </div>
  );
}
