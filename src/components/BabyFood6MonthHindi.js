import React from 'react';
import { useEffect, useState } from "react";
import data1 from '../data/food6monthhindi.json';
import FoodMonthsCard from './FoodMonthsCard';
import { NavLink } from 'react-router-dom';

function BabyFood6MonthHindi() {
    const [posts, setPosts] = useState([]);

 function fetchBlogsData(){
    try{
        setPosts(data1);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchBlogsData();
    window.scroll(0,0);
  }, []);

  return (
    <div>
         <div className='p-4'>
         <div className='flex flex-col items-center'>
            <h2>6 महीने के बेबी आहार व्यंजनों की हिंदी में PDF फाइल डाउनलोड करें : </h2>
            <div className='bg-blue-500 mt-4 h-[30px] w-[280px] font-semibold text-center rounded-lg text-white hover:scale-110 transition duration-300 ease-in'>
                <a 
                    href="/6 Month Baby Food Reciepe Hindi.pdf"
                    download="6 Month Baby Food Reciepe in Hindi"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button>PDF डाउनलोड करने के लिए यहां क्लिक करें</button>
                </a>
            </div>
        </div>
        </div>
                <div>
              
                <div className='flex flex-col gap-y-12 text-center items-center justify-center'>
                    
                    <div className='bg-pink-500 mt-4 h-[30px] w-[280px] font-semibold text-center rounded-lg text-white hover:scale-110 transition duration-300 ease-in'>
                        <a href="https://www.youtube.com/@MommyGK" target="_blank">
                        <button>रेसिपी Video देखने के लिए यहां क्लिक करें</button>
                    </a>
                    </div>
                </div>

               
                <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 px-4 py-1 gap-x-10 gap-y-1'>
                {
                posts.map((post, index) => (
                    <FoodMonthsCard key={index} post={post.details} week={post.week} time={post.time} color={post.color} video={true}/>
                ))
                }
                </div>
                
                    
                </div>
    </div>
  )
}

export default BabyFood6MonthHindi