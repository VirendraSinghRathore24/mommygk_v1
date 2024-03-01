import React from 'react'
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function PopularCard1({url, imageUrl, title, color}) {
  return (
    <div className='hover:scale-110 transition duration-300 ease-in'>
        <NavLink to={`${url}`}>
            <div className='relative w-[220px] bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-lg pointer-events-auto'>
                <LazyLoadImage className='h-[220px]' src={imageUrl} alt="img" width="100%" />
                {/* <img className='h-[220px]' src={imageUrl} loading='lazy' alt='image'/> */}
            </div>
            <p className='text-blue-700 font-bold text-xl leading-6 text-center mt-6 '>{title}</p>
        </NavLink>
    </div>
  )
}

export default PopularCard1