import React from 'react'
import { NavLink } from 'react-router-dom'

function PopularCard1({url, imageUrl, title, color}) {
  return (
    <div>
        <NavLink to={`${url}`}>
            <div className='relative w-[280px] bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-lg pointer-events-auto'>
                <img className='h-[280px]' src={imageUrl} loading='lazy'/>
            </div>
            <p className='text-blue-700 font-bold text-xl leading-6 text-center mt-6 '>{title}</p>
        </NavLink>
    </div>
  )
}

export default PopularCard1