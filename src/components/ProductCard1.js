import React from 'react'
import { NavLink } from 'react-router-dom'

function ProductCard1({url, imageUrl}) {
  return (
    <div className='relative  bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-lg pointer-events-auto'>
        <NavLink to={`${url}`} target='_blank'>
            <img className='w-[240px] h-[340px]' src={imageUrl} loading='lazy' alt='image' ></img>
        </NavLink>
    </div>
  )
}

export default ProductCard1