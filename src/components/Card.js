import React from 'react'
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Card({post}) {
  return (
    <div>
      <NavLink to={`/${post.url}`}>
        <div className='w-[140px] md:w-[210px] bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-2xl pointer-events-auto hover:scale-110 transition duration-300 ease-in'>
            <LazyLoadImage className='h-[140px] md:h-[210px]' src={post.imageUrl} alt="img" height="auto" width="100%" />
       <div>
        </div>
    </div>
      <div className='font-bold text-lg md:text-lg text-center mt-3 text-indigo-800'>{post.title}</div>
      </NavLink>
    </div>
  )
}

export default Card