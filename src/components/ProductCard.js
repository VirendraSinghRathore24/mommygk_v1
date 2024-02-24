import React from 'react'
import { NavLink } from 'react-router-dom'

function ProductCard({url, imageUrl}) {
  return (
    <div className='relative  bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-lg pointer-events-auto hover:scale-110 transition duration-300 ease-in'>
        <NavLink to={`${url}`} >
            <img className='w-[220px] h-[220px]' src={imageUrl} loading='lazy' ></img>
            <button className='absolute bottom-1 right-1 bg-pink-500 h-8 w-[60px] font-semibold rounded-md text-white hover:scale-110 transition duration-300 ease-in'>View</button>
        </NavLink>
    </div>
  )
}

export default ProductCard