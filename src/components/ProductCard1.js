import React from 'react'
import { NavLink } from 'react-router-dom'

function ProductCard1({url, imageUrl}) {
  return (
    <div className='relative  bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-lg pointer-events-auto'>
        <NavLink to={`${url}`} target='_blank'>
            <img className='w-[280px] h-[450px]' src={imageUrl} loading='lazy' ></img>
        </NavLink>
    </div>
  )
}

export default ProductCard1