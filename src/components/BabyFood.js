import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from '../baseUrl';
import data1 from '../data/food6month.json';
import FoodMonthsCard from './FoodMonthsCard';

function BabyFood() {
    const [posts, setPosts] = useState([]);

  const getGeoInfo = async () => {
    const data = new FormData();
    axios.get('https://ipapi.co/json/').then((response) => {
        let res = response.data;

        data.append('ip', res.ip);
        data.append('city', res.city);
        data.append('state', res.region);
        data.append('country', res.country_name);

        axios.post(`${baseUrl}/insertuser`, data);
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
         <div className='p-4'>
         <div className='flex flex-col items-center'>
            <h2>Download the PDF file for 6 Month Baby Food Recipes :</h2>
            <div className='bg-blue-500 mt-4 h-[30px] w-[280px] font-semibold text-center rounded-lg text-white hover:scale-110 transition duration-300 ease-in'>
                <a 
                    href="/6 Month Baby Food Reciepe.pdf"
                    download="6 Month Baby Food Reciepe"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button>Click here to Download the PDF</button>
                </a>
            </div>
        </div>
        </div>
                <div>
              
                    <div className='flex text-center items-center justify-center bg-red-300 h-8 gap-y-1 text-blue-600 font-semibold'>
                    <marquee>
                        Recipes are available on YouTube and you can subscribe for more updates...
                        </marquee>
                    </div>

                <div className='mt-4 flex items-center justify-center p-2'>
                     <img src="../../images/All1.png" loading='lazy' className=' rounded-md'/>
                </div>
                <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 px-4 py-1 gap-x-10 gap-y-1'>
                {
                posts.map((post, index) => (
                    <FoodMonthsCard key={index} post={post.details} week={post.week} time={post.time} color={post.color} video={true}/>
                ))
                }
                </div>
                <div className='flex flex-col items-center font-normal p-5 leading-8 text-[18px] align-baseline text-justify'>Navigating the world of introducing solids to your 6-month-old is an exciting journey, and our Baby 6-Month Food Chart is here to guide you every step of the way. Carefully crafted to meet the nutritional needs of your growing little one, our chart offers a comprehensive guide to introducing a variety of age-appropriate foods. From nutrient-rich purees to soft, easily digestible textures, our chart provides a roadmap for creating a balanced and diverse diet tailored to your baby's developmental stage. Join us in fostering healthy eating habits and savoring the joyous milestones as your baby explores a colorful palette of flavors and textures on the path to nourishment and growth.</div>
                    {/* <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-10 py-5 gap-x-10 gap-y-10'>
                            <img src="../../images/Week1.png" loading='lazy' className=' rounded-md'/>
                            <img src="../../images/Week2.png" loading='lazy' className=' rounded-md'/>
                            <img src="../../images/Week3.png" loading='lazy' className=' rounded-md'/>
                            <img src="../../images/Week4.png" loading='lazy' className=' rounded-md'/>
                        
                    </div> */}
                </div>
    </div>
  )
}

export default BabyFood