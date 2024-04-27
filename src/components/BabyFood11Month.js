import React, { useState } from 'react';
import { useEffect } from "react";
import FoodMonthsCard from './FoodMonthsCard';
import data1 from '../data/food10month.json'
import { Link } from 'react-router-dom';

function BabyFood11Month() {
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
    <p className='p-2'><strong><Link to="/">Home</Link> </strong> / <strong><Link to="/babyfoodcharts">Food Charts</Link> </strong> / 11 & 12 Month Baby Food Chart</p>
         <div className='p-4'>
         <div className='flex flex-col items-center'>
            <h2 className='text-xl poppins-medium'>11 & 12 Month Baby Food Chart</h2>
            <div className='bg-blue-500 mt-4 px-4 py-1 font-semibold text-center rounded-lg text-white hover:scale-110 transition duration-300 ease-in'>
                <a 
                    href="/11-12 Month Baby Food Recipe.pdf"
                    download="11-12 Month Baby Food Recipe"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button>Click here to Download the PDF</button>
                </a>
            </div>
        </div>
        </div>
                <div>
                <div className='flex flex-col gap-y-12 text-center items-center justify-center mb-10'>
                    
                        <div className='bg-pink-500 mt-4 px-4 py-1 font-semibold text-center rounded-lg text-white hover:scale-110 transition duration-300 ease-in'>
                            <a href="https://www.youtube.com/@MommyGK" target="_blank" rel='noreferrer'>
                            <button>Click here to Watch Recipe Videos</button>
                        </a>
                        </div>
                    </div>
                {/* <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 px-4 py-1 gap-x-10 gap-y-1'>
                {
                posts.map((post, index) => (
                    <FoodMonthsCard key={index} post={post.details} week={post.week} time={post.time} color={post.color} video={true}/>
                ))
                }
                </div> */}
                </div>
    </div>
  )
}

export default BabyFood11Month