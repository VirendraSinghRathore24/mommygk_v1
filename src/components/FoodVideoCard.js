import React from 'react'
import { Link } from 'react-router-dom';
import { IoPlayCircleOutline } from "react-icons/io5";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function FoodVideoCard({post}) {
    
  return (
    <div>
    <div className='relative w-[280px] bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-lg pointer-events-auto '>
   <Link to={`${post.youtubelink}`} target="_blank">
        
            <LazyLoadImage className='h-[300]' src={post.imageUrl} loading='lazy' alt='image' ></LazyLoadImage>
            <div className='absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                   <IoPlayCircleOutline size={100} />
              </div>
       <div>
        </div> 
        </Link>
    </div>
    <p className='text-blue-700 font-bold text-xl leading-6 text-center mt-6 '>{post.title}</p>
    </div>
  )
}

export default FoodVideoCard