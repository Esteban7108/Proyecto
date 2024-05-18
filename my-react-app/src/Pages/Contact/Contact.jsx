import React from 'react'
import { useMediaQuery } from '@mui/material';
import { Navigation1 } from "../../Components/Navigation-menus/Navigation1";
import { Navigation2 } from '../../Components/Navigation-menus/Navigation2'
import Contact_form from '../../Components/Contact-form';
const Contact = () => {
  // Utiliza useMediaQuery para detectar el tamaño de la pantalla
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="p-3 dark:bg-gray-900 w-screen h-screen flex ">
 
      {isLargeScreen && (
        <>
         <div className="w-screen flex ">
            <div>
              <Navigation2 />
            </div>
            <div className="flex items-center flex-col w-full"> 
              <div>
                <h1 className="text-3xl font-bold underline dark:text-white">Contact!</h1>
              </div>
              <div className="flex items-center justify-center w-full h-full">
              <div className="w-full flex    "> 
                <Contact_form/>
              </div>
              </div>
            </div>
          </div>
        </>
      )}

      {!isLargeScreen && (
        <>
           <div className='flex flex-col w-screen'>
            <div className="flex-none">
              <Navigation1 />
            </div>
            <div className="flex justify-center items-center flex-col w-full"> 
              <div>
                <h1 className="text-3xl font-bold underline dark:text-white">Contact!</h1>
              </div>
              <div className="w-full h-[calc(100vh - 20px)]"> 
                <Contact_form/>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}


export default Contact