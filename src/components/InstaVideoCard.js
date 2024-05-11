import React from 'react'
import { IoPlayCircleOutline } from 'react-icons/io5'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { NavLink } from 'react-router-dom'

const InstaVideoCard = ({url, imageUrl, title}) => {
  return (
    <div className='hover:scale-110 transition duration-300 ease-in rounded-lg border-2 p-4 shadow-lg'>
    
        <NavLink to={`${url}`} target='_blank' >
        <div className='relative w-[240px] bg-bgDark bg-opacity-80 rounded-lg overflow-hidden  pointer-events-auto'>
            <LazyLoadImage className=' h-[240px]' src={imageUrl} loading='lazy' alt='img'></LazyLoadImage>
            <div className='absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                   <IoPlayCircleOutline size={100} />
              </div>
            </div>
            <p className='text-blue-700 font-bold text-xl leading-6 text-center mt-6'>{title}</p>
        </NavLink>
        
    </div>
  )
}

export default InstaVideoCard