import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { CiPlay1 } from "react-icons/ci";


function FoodVideoCard({post}) {
    
  return (
    <div>
         <div className='relative pointer-events-auto w-[300px] h-[300px] mb-10'>
         <Link to={`${post.youtubelink}`} target="_blank">
                <img src={post.imageUrl} loading='lazy' className='w-[320px] h-[320px] rounded-md'/>
                <p className='text-[20px] text-center text-richblack-700 italic'>{post.title}</p>
                <div className='absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    
                    <CiPlay1 size={50} />
                    
                    
                </div>
                </Link>
            </div>  
            
    </div>
  )
}

export default FoodVideoCard