import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";
import baseUrl from '../baseUrl';
import FoodMonthsCard from './FoodMonthsCard';
import data1 from '../data/food9month.json'
import { Link } from 'react-router-dom';
import ChartSuggestionCard from './ChartSuggestionCard';

function BabyFood9Month() {
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
    <p className='p-2'><strong><Link to="/">Home</Link> </strong> / <strong><Link to="/babyfoodcharts">Food Charts</Link> </strong> / 9 Month</p>
         <div className='p-4'>
         <div className='flex flex-col items-center'>
            <h2>Download the PDF file for 9 Month Baby Food Recipes :</h2>
            <div className='bg-blue-500 mt-4 h-[30px] w-[280px] font-semibold text-center rounded-lg text-white hover:scale-110 transition duration-300 ease-in'>
                <a 
                    href="/9 Month Baby Food Reciepe.pdf"
                    download="9 Month Baby Food Reciepe"
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
                            <a href="https://www.youtube.com/@MommyGK" target="_blank">
                            <button>Click here to Watch Recipe Videos</button>
                        </a>
                        </div>
                    </div>
                {/* <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-4 py-5 gap-x-10 gap-y-10'>
                     <img src="../../images/All71.png" loading='lazy' alt='All1' className=' w-[600px] h-[500px] rounded-md'/>
                     <img src="../../images/All72.png" loading='lazy' alt='All2' className=' w-[600px] h-[500px] rounded-md'/>
                </div> */}
                <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 px-4 py-1 gap-x-10 gap-y-1'>
                {
                posts.map((post, index) => (
                    <FoodMonthsCard key={index} post={post.details} week={post.week} time={post.time} color={post.color} video={true}/>
                ))
                }
                </div>
                </div>
                {/* <div className='text-base text-center border-t border-brColor pt-4 flex flex-wrap justify-evenly'>
                
                        <ChartSuggestionCard url={'babyfood6monthhindi'} imageUrl={'../../images/food1.jpg'} title={'फूड चार्ट - 6 महीने'}/>
                        <ChartSuggestionCard url={'babyfood6month'} imageUrl={'../../images/food2.jpg'} title={'Food Chart - 6 Month'}/>
                        <ChartSuggestionCard url={'foodfor8monthbaby'} imageUrl={'../../images/food3.jpg'} title={'Food Chart - 8 Month'}/>
                    
                </div> */}
                
    </div>
  )
}

export default BabyFood9Month