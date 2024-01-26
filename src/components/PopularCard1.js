import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoPlayCircleOutline } from "react-icons/io5";

function PopularCard1({url, imageUrl, title, color}) {
  return (
    <div>
    <div className='relative w-[280px] bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-lg pointer-events-auto'>
    <NavLink to={`${url}`}>
        
       <img className='h-[280px]' src={imageUrl} loading='lazy' ></img>

        </NavLink>
        
    </div>
    <p className='text-blue-700 font-bold text-xl leading-6 text-center mt-6 '>{title}</p>
    </div>
  )
}

export default PopularCard1