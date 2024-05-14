import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import FoodChartCard from './FoodChartCard';
import { IoPlayCircleOutline } from "react-icons/io5";

function FoodChartsHindi() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('food-chart-hindi'));
        setPosts(data);
        window.scroll(0,0);
      }, []);
  return (
    <div>
        <p className='text-md font-light py-3 px-5 mt-2'><strong className='font-bold text-3xl leading-5 text-richblack-700 uppercase text-red-700 font-mono'>Recipes By Age - <span className='text-blue-600'>Hindi</span></strong> </p>
            <div className='px-5 font-semibold'>View Food Charts in English - <NavLink to={'/babyfoodcharts'}><span className='text-blue-600 underline'>Click Here</span></NavLink></div>
        
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center gap-y-10 mb-10 mt-4'>
            {
                
                posts.map((post) => (
                    <FoodChartCard key={post.title} post={post}/>
                ))
               } 
           
            <div className='relative w-[280px] bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-lg pointer-events-auto '>
                <NavLink to={`https://www.youtube.com/watch?v=1h-Buyvan-M&t=91s`} target="_blank">
                        
                            <img className='h-[300px]' src='../../images/solidfood.webp' loading='lazy' alt='img' ></img>
                            <div className='absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>  
                                <IoPlayCircleOutline size={100} />
                            </div>
                </NavLink>
            </div>
            <div className='relative w-[280px] bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-lg pointer-events-auto '>
                <NavLink to={`https://www.youtube.com/watch?v=T51chIH2NLI`} target="_blank">
                        
                            <img className='h-[300px]' src='../../images/babyfood6monthyoutube.jpeg' alt='img' loading='lazy' ></img>
                            <div className='absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>  
                                <IoPlayCircleOutline size={100} />
                            </div>
                            
                </NavLink>
            </div>
            </div>
        </div>
  )
}

export default FoodChartsHindi