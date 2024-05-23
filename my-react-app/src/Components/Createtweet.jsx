import React from 'react';
import { useForm } from 'react-hook-form';
import Savetweets from '../Logic/Savetweets';
import { Titulos } from './Titulos';
import { Subitulos } from './Subtitulos';

export default function Createtweet() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');

    const tweetData = {
      userId,
      userName,
      tweet: data.tweet
    };

    try {
      const response = await Savetweets(tweetData);
      console.log(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center dark:bg-gray-900 h-max">
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
