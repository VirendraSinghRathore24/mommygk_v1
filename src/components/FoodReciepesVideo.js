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
        <p className='text-md font-light py-3 px-7'><strong className='font-semibold text-xl text-richblack-700'>Food Recipes Video :</strong> </p>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 px-9 py-5 gap-x-10 gap-y-10 '>
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