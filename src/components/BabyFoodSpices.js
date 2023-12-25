import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";
import baseUrl from '../baseUrl';
import data1 from '../data/6monthfoodintroduce.json'
import Introduce6MonthCard from './Introduce6MonthCard';

function BabyFoodSpices() {
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

        axios.post(`${baseUrl}/insertuserspices`, data);
    }).catch((error) => {
        console.log(error);
    });     
};

function fetchBlogsData(){
    try{
        console.log(data1);
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
         <div className='p-4'>
         
         <div className='w-min-full text-left text-sm font-light flex justify-center'>
            <h2 className='text-xl font-bold'>Spices & herbs you can add in 6+ Months food</h2>
        </div>
        <div className='flex flex-col items-center mt-4'>
          
            <div className='bg-blue-500 mt-4 h-[30px] w-[280px] font-semibold text-center rounded-lg text-white hover:scale-110 transition duration-300 ease-in'>
                <a 
                    href="/Baby Food Spices.pdf"
                    download="Baby Food Spices"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button>Click here to Download the PDF</button>
                </a>
            </div>
        </div>
        </div>
                <div className='w-min-full text-left text-sm font-light flex justify-center p-2'>
                {
                
                    <Introduce6MonthCard post={posts} />
                
                }
                    
                </div>
                <div className='flex flex-col items-center font-normal p-5 leading-8 text-[18px] align-baseline text-justify text-blue-600'>
                You can conduct your own research and add the recipes you make for your baby accordingly. If you have any doubts, please consult with your doctor for the best advice.
                </div>
                
    </div>
  )
}

export default BabyFoodSpices