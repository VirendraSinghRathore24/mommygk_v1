import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoPlayCircleOutline } from "react-icons/io5";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function PopularCard({url, imageUrl, title, color}) {
  return (
    <div className='hover:scale-110 transition duration-300 ease-in'>
        <NavLink to={`${url}`} target='_blank'>
            <div className='relative w-[220px] bg-bgDark bg-opacity-80 rounded-full overflow-hidden shadow-lg pointer-events-auto'>
            <LazyLoadImage
            src={imageUrl} // the source of the image
            alt="img" // alternative text for the image
            // effect used when the image is loading (optional)
            height="auto" // height of the image (optional)
            width="100%" // width of the image (optional)
        />
                {/* <img className='h-[220px]' src={imageUrl} loading='lazy' alt='image'></img> */}
                <div className='absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> 
                   <IoPlayCircleOutline size={100} />
                </div>        
            </div>
            <p className='text-blue-700 font-bold text-xl leading-6 text-center mt-6'>{title}</p>
        </NavLink>
    </div>
  )
}

export default PopularCard