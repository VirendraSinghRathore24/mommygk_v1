import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import baseUrl from '../baseUrl';

function BabyFood7Month() {
  const getGeoInfo = async () => {
    const data = new FormData();
    axios.get('https://ipapi.co/json/').then((response) => {
        let res = response.data;

        data.append('ip', res.ip);
        data.append('city', res.city);
        data.append('state', res.region);
        data.append('country', res.country_name);

        axios.post(`${baseUrl}/insertuser7month`, data);
    }).catch((error) => {
        console.log(error);
    });     
};

  useEffect(() => {
    getGeoInfo();
    window.scroll(0,0);
  }, []);

  return (
    <div>
         <div className='p-4'>
         <div className='flex flex-col items-center'>
            <h2>Download the PDF file for 7 Month Baby Food Reciepes :</h2>
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
                <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-4 py-5 gap-x-10 gap-y-10'>
                     <img src="../../images/All71.png" loading='lazy' className=' w-[600px] h-[500px] rounded-md'/>
                     <img src="../../images/All72.png" loading='lazy' className=' w-[600px] h-[500px] rounded-md'/>
                </div>
                    <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-4 py-5 gap-x-10 gap-y-10'>
                            <img src="../../images/Week1_7.png" loading='lazy' className=' rounded-md'/>
                            <img src="../../images/Week2_7.png" loading='lazy' className=' rounded-md'/>
                            <img src="../../images/Week3_7.png" loading='lazy' className=' rounded-md'/>
                            <img src="../../images/Week4_7.png" loading='lazy' className=' rounded-md'/>
                        
                    </div>
                </div>
                <div className=' mb-4 ml-10 font-semibold'>
                Please find the reciepe videos in my Instagram and YouTube channel.
                </div>
    </div>
  )
}

export default BabyFood7Month