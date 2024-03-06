import React from 'react'
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Card({post}) {
  return (
    <div className='relative w-[280px] bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-2xl pointer-events-auto hover:scale-110 transition duration-300 ease-in'>
    <NavLink to={`/${post.url}`}>
            <LazyLoadImage className='h-[320px]' src={post.imageUrl} alt="img" height="auto" width="100%" />
            {/* <img className='h-[320px]' src={post.imageUrl} loading='lazy' alt='image' ></img> */}
            
       <div>
       <div className='absolute bottom-4 px-4 text-left text-wrap bg-rose-300 h-20 w-full'>
            <p className='text-black font-bold text-xl leading-6 text-center mt-6 googlefont'>{post.title}</p>
        </div>
      
       
        </div>
        
        </NavLink>
    </div>
  )
}

export default Card