import React from 'react'
import { useLocation } from 'react-router-dom';

function PageNotFound() {
    const location = useLocation();
    const invalidUrl = "https://mommygk.com" + location.pathname;

  return (
    <div>
        <div className='flex flex-col justify-center gap-y-4 items-center h-screen'>
            <h1 className='text-7xl'>404</h1>
            <h1 className='text-4xl'>Page Not Found</h1>
            <p className='text-xl text-center p-4'>Sorry <span className='font-semibold text-blue-600'>{invalidUrl} </span>page does not exists, try valid url</p>
        </div>
    </div>
  )
}

export default PageNotFound