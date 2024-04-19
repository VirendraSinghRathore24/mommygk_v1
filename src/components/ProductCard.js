import React from 'react'
import { NavLink } from 'react-router-dom'

function ProductCard({url, imageUrl}) {
  return (
    <div className='hover:scale-110 transition duration-300 ease-in'>
    
        <NavLink to={`${url}`} >
        <div className='relative w-[220px] bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-lg pointer-events-auto'>
            <img className=' h-[220px]' src={imageUrl} loading='lazy' alt='img'></img>
            <button className='absolute bottom-1 right-1 bg-pink-500 h-8 w-[60px] font-semibold rounded-md text-white hover:scale-110 transition duration-300 ease-in'>View</button>
            </div>
        </NavLink>
        
    </div>
  )
}

export default ProductCard