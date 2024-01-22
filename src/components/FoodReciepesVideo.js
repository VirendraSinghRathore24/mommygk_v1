import React, { useEffect, useState } from 'react';
import data from "../data/foodvideo.json"
import FoodVideoCard from './FoodVideoCard';

function FoodReciepesVideo() {
    const [posts, setPosts] = useState(data);
    useEffect(() => {
        window.scroll(0,0);
      }, []);
  return (
    <div>
        <p className='text-md font-light py-3 px-5 mt-2'><strong className='font-bold text-3xl leading-5 text-richblack-700 uppercase text-red-700 font-mono'>Recipe Videos</strong> </p>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center gap-y-10 mb-10 mt-4'>
            {
                
                posts.map((post, index) => (
                    <FoodVideoCard key={index} post={post}/>
                ))
               } 
            </div>
            
        </div>
  )
}

export default FoodReciepesVideo