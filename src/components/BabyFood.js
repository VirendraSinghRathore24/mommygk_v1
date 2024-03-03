import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from '../baseUrl';
import data1 from '../data/food6month.json';
import FoodMonthsCard from './FoodMonthsCard';
import { Link } from 'react-router-dom';

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
     <p className='p-2'><strong><Link to="/">Home</Link> </strong> / <strong><Link to="/babyfoodcharts">Food Charts</Link> </strong> / 6 Month Baby Food Chart</p>
         <div className='p-4'>
         <div className='flex flex-col items-center'>
            <h2 className='text-xl poppins-medium'>6 Month Baby Food Chart</h2>
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
              
                    <div className='flex flex-col gap-y-12 text-center items-center justify-center'>
                    
                        <div className='bg-pink-500 mt-4 h-[30px] w-[280px] font-semibold text-center rounded-lg text-white hover:scale-110 transition duration-300 ease-in'>
                            <a href="https://www.youtube.com/watch?v=T51chIH2NLI" target="_blank" rel='noreferrer'>
                            <button>Click here to Watch Recipe Videos</button>
                        </a>
                        </div>
                    </div>
                    
                <div className='mt-8 flex items-center justify-center p-2'>
                     <img src="../../images/All1.png" loading='lazy' alt='All' className=' rounded-md'/>
                </div>
                <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 px-4 py-1 gap-x-10 gap-y-1'>
                {
                posts.map((post, index) => (
                    <FoodMonthsCard key={index} post={post.details} week={post.week} time={post.time} color={post.color} video={true}/>
                ))
                }
                </div>
                </div>
                {/* <div className='text-base text-center border-t border-brColor pt-4 flex flex-wrap justify-evenly'>
                
                        <ChartSuggestionCard url={'babyfood6monthhindi'} imageUrl={'../../images/food2.jpg'} title={'फूड चार्ट - 6 महीने'}/>
                        <ChartSuggestionCard url={'babyfood7month'} imageUrl={'../../images/food1.jpg'} title={'Food Chart - 7 Month'}/>
                        <ChartSuggestionCard url={'foodfor8monthbaby'} imageUrl={'../../images/food3.jpg'} title={'Food Chart - 8 Month'}/>
                    
                </div> */}
    </div>
  )
}

export default BabyFood