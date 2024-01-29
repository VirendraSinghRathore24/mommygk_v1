import React from 'react';
import { useEffect, useState } from "react";
import data1 from '../data/food6monthhindi.json';
import FoodMonthsCard from './FoodMonthsCard';
import { Link, NavLink } from 'react-router-dom';

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
    <p className='p-2'><strong><Link to="/">Home</Link> </strong> / <strong><Link to="/babyfoodchartshindi">Food Charts</Link> </strong> / 6 Month Hindi</p>
         <div className='p-4'>
         <div className='flex flex-col items-center'>
            <h2>6 महीने के बेबी फ़ूड की हिंदी में PDF फाइल डाउनलोड करें : </h2>
            <div className='bg-blue-500 mt-4 h-[30px] w-[280px] font-semibold text-center rounded-lg text-white hover:scale-110 transition duration-300 ease-in'>
                <a 
                    href="/6 Month Baby Food Reciepe Hindi.pdf"
                    download="6 Month Baby Food Reciepe in Hindi"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button>Click here to Download the PDF</button>
                </a>
            </div>
        </div>
        </div>
                <div>
              
                <div className='flex flex-col gap-y-12 text-center items-center justify-center'>
                    
                    <div className='bg-pink-500 mt-4 h-[30px] w-[280px] font-semibold text-center rounded-lg text-white hover:scale-110 transition duration-300 ease-in'>
                        <a href="https://www.youtube.com/watch?v=T51chIH2NLI" target="_blank">
                        <button>Click here to Watch Reciepe Videos</button>
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