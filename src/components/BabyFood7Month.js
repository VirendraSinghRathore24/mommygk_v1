import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";
import baseUrl from '../baseUrl';
import FoodMonthsCard from './FoodMonthsCard';
import data1 from '../data/food7month.json'

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
                <div className='flex text-center items-center justify-center bg-red-300 h-8 gap-y-1 text-blue-600 font-semibold'>
                    <marquee>
                    Recipes are available on YouTube and you can subscribe for more updates...
                        </marquee>
                    </div>
                <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-4 py-5 gap-x-10 gap-y-10'>
                     <img src="../../images/All71.png" loading='lazy' className=' w-[600px] h-[500px] rounded-md'/>
                     <img src="../../images/All72.png" loading='lazy' className=' w-[600px] h-[500px] rounded-md'/>
                </div>
                <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 px-4 py-1 gap-x-10 gap-y-1'>
                {
                posts.map((post, index) => (
                    <FoodMonthsCard key={index} post={post.details} week={post.week} time={post.time} color={post.color}/>
                ))
                }
                </div>
                <div className='flex flex-col items-center font-normal p-5 leading-8 text-[18px] align-baseline text-justify'>Embark on the delightful culinary journey with our Baby 7-Month Food Chart, thoughtfully designed to support your little one's growing appetite and nutritional needs. Tailored for the unique developmental stage of a 7-month-old, our chart introduces a diverse range of flavors and textures, providing a roadmap for the exciting transition to more advanced solids. From introducing new fruits and vegetables to incorporating soft proteins, our chart encourages a balanced and wholesome diet, nurturing your baby's taste buds and fostering a love for nutritious eating. Join us in celebrating the joys of nourishing your 7-month-old through this comprehensive and easy-to-follow food chart, ensuring each meal is a delightful adventure in healthy growth and development.</div>
                    {/* <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-4 py-5 gap-x-10 gap-y-10'>
                            <img src="../../images/Week1_7.png" loading='lazy' className=' rounded-md'/>
                            <img src="../../images/Week2_7.png" loading='lazy' className=' rounded-md'/>
                            <img src="../../images/Week3_7.png" loading='lazy' className=' rounded-md'/>
                            <img src="../../images/Week4_7.png" loading='lazy' className=' rounded-md'/>
                        
                    </div> */}
                </div>
                
    </div>
  )
}

export default BabyFood7Month