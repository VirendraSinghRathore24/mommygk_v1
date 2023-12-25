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
        <p className='text-md font-light py-3 px-7'><strong className='font-semibold leading-5 text-richblack-700'>Explore a world of delicious and nutritious possibilities for your little one with our curated collection of baby food recipe videos - </strong> </p>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center gap-y-10 mb-10 mt-4'>
            {
                
                posts.map((post, index) => (
                    <FoodVideoCard key={index} post={post}/>
                ))
               } 
            </div>
            <div className='flex flex-col items-center font-normal p-5 leading-8 text-[18px] align-baseline text-justify'>From first tastes to exciting culinary adventures, our videos provide step-by-step guidance, ensuring that every homemade meal is a delightful and wholesome experience for your baby. Join us on this journey of nourishing your baby's growth and fostering a love for healthy eating from the very beginning. Discover the joy of preparing homemade baby food with our easy-to-follow recipe videos, crafted with care for your little foodie.</div>
        </div>
  )
}

export default FoodReciepesVideo