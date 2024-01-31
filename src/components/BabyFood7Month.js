import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";
import baseUrl from '../baseUrl';
import FoodMonthsCard from './FoodMonthsCard';
import data1 from '../data/food7month.json'
import { Link } from 'react-router-dom';

function BabyFood7Month() {
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

        axios.post(`${baseUrl}/insertuser7month`, data );
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
    <p className='p-2'><strong><Link to="/">Home</Link> </strong> / <strong><Link to="/babyfoodcharts">Food Charts</Link> </strong> / 7 Month</p>
         <div className='p-4'>
         <div className='flex flex-col items-center'>
            <h2>Download the PDF file for 7 Month Baby Food Recipes :</h2>
            <div className='bg-blue-500 mt-4 h-[30px] w-[280px] font-semibold text-center rounded-lg text-white hover:scale-110 transition duration-300 ease-in'>
                <a 
                    href="/7 Month Baby Food Reciepe.pdf"
                    download="7 Month Baby Food Reciepe"
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
                <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-4 py-5 gap-x-10 gap-y-10'>
                     <img src="../../images/All71.png" loading='lazy' alt='All1' className=' w-[600px] h-[500px] rounded-md'/>
                     <img src="../../images/All72.png" loading='lazy' alt='All2' className=' w-[600px] h-[500px] rounded-md'/>
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

export default BabyFood7Month