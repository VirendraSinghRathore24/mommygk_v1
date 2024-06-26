import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";
import baseUrl from '../baseUrl';
import FoodMonthsCard from './FoodMonthsCard';
import data1 from '../data/food8month.json'
import { Link } from 'react-router-dom';

function BabyFood8Month() {
    const [posts, setPosts] = useState([]);
  const getGeoInfo = async () => {
    const data = new FormData();
    axios.get('https://ipapi.co/json/').then((response) => {
        let res = response.data;
        console.log(res);
        data.append('ip', res.ip);
        data.append('city', res.city);
        data.append('state', res.region);
        data.append('country', res.country_name);

        axios.post(`${baseUrl}/insertuser8month`, data );
    }).catch((error) => {
        console.log(error);
    });     
};

function fetchBlogsData(){
    try{
        setPosts(data1);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getGeoInfo();
    fetchBlogsData();
    window.scroll(0,0);
  }, []);

  return (
    <div>
    <p className='p-2'><strong><Link to="/">Home</Link> </strong> / <strong><Link to="/babyfoodcharts">Food Charts</Link> </strong> / 8 Month Baby Food Chart</p>
         <div className='p-4'>
         <div className='flex flex-col items-center'>
            <h2 className='text-xl poppins-medium'>8 Month Baby Food Chart</h2>
            <div className='bg-blue-500 mt-4 px-4 py-1 font-semibold text-center rounded-lg text-white hover:scale-110 transition duration-300 ease-in'>
                <a 
                    href="/8 Month Baby Food Recipe.pdf"
                    download="8 Month Baby Food Recipe"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button>Click here to Download the PDF</button>
                </a>
            </div>
        </div>
        </div>
                <div>
                {/* <div className='flex text-center items-center justify-center bg-red-300 h-8 gap-y-1 text-blue-600 font-semibold'>
                    <marquee>
                    Recipes are available on YouTube and you can subscribe for more updates...
                        </marquee>
                    </div> */}
                    <div className='flex flex-col gap-y-12 text-center items-center justify-center'>
                    
                        <div className='bg-pink-500 mt-4 px-4 py-1 font-semibold text-center rounded-lg text-white hover:scale-110 transition duration-300 ease-in'>
                            <a href="https://www.youtube.com/@MommyGK" target="_blank" rel='noreferrer'>
                            <button>Click here to Watch Recipe Videos</button>
                        </a>
                        </div>
                    </div>
                <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 px-4 py-1 gap-x-10 gap-y-1'>
                {
                posts.map((post, index) => (
                    <FoodMonthsCard key={index} post={post.details} week={post.week} time={post.time} color={post.color} video={false}/>
                ))
                }
                </div>
                
                    {/* <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-4 py-5 gap-x-10 gap-y-10'>
                            <img src="../../images/Week1_7.png" loading='lazy' className=' rounded-md'/>
                            <img src="../../images/Week2_7.png" loading='lazy' className=' rounded-md'/>
                            <img src="../../images/Week3_7.png" loading='lazy' className=' rounded-md'/>
                            <img src="../../images/Week4_7.png" loading='lazy' className=' rounded-md'/>
                        
                    </div> */}
                </div>
                {/* <div className='text-base text-center border-t border-brColor pt-4 flex flex-wrap justify-evenly'>
                   
                        <ChartSuggestionCard url={'babyfood6monthhindi'} imageUrl={'../../images/food1.jpg'} title={'फूड चार्ट - 6 महीने'}/>
                        <ChartSuggestionCard url={'babyfood6month'} imageUrl={'../../images/food2.jpg'} title={'Food Chart - 6 Month'}/>
                        <ChartSuggestionCard url={'foodfor7monthbaby'} imageUrl={'../../images/food3.jpg'} title={'Food Chart - 7 Month'}/>
                        
                </div> */}
    </div>
  )
}

export default BabyFood8Month