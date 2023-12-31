import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from '../baseUrl';
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
         <p className='text-md font-light py-3 px-5 md:px-2 pointer-events-auto'><strong className='font-semibold'><NavLink to="/"> Home </NavLink></strong>/ 6 Month Food Chart in Hindi </p>
         <div className='flex flex-col items-center'>
            <h2>6 महीने के शिशु आहार व्यंजनों की हिंदी में PDF फाइल डाउनलोड करें : </h2>
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
              
                    <div className='flex text-center items-center justify-center bg-red-300 h-8 gap-y-1 text-blue-600 font-semibold'>
                    <marquee>
                    रेसिपी YouTube पर उपलब्ध हैं और आप अधिक अपडेट के लिए सदस्यता ले सकते हैं...
                        </marquee>
                    </div>

               
                <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 px-4 py-1 gap-x-10 gap-y-1'>
                {
                posts.map((post, index) => (
                    <FoodMonthsCard key={index} post={post.details} week={post.week} time={post.time} color={post.color}/>
                ))
                }
                </div>
                
                    
                </div>
    </div>
  )
}

export default BabyFood6MonthHindi