import React, { useEffect, useState } from 'react'
import Spinner from "../components/Spinner"
import baseUrl from '../baseUrl'
import Card from './Card';
import data from "../data/data.json"


function HomePage() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState(data);

    async function fetchBlogsData(){
        setLoading(true);
        try{
  
          const result = await fetch(`${baseUrl}/cards`);
          const data = await result.json();
           
          setPosts(data.data);
  
        }
        catch(err){
          console.log(err);
        }
        setLoading(false);
      }
      
      useEffect(() => {
       // fetchBlogsData();
      },[])

  return (
    <div className='pointer-events-none'>
        <div className=''>
        {/* <div className='flex relative'>
            <img src='https://res.cloudinary.com/dixqxdivr/image/upload/v1688580884/rudra2_yhh4ch.jpg' loading='lazy' className='pointer-events-auto w-screen h-[420px]'/>
        </div> */}
           
            
        </div>
        <div>
        <p className='text-md font-light py-3 px-7'><strong className='italic text-lg text-blue-600 font-semibold'>Their is no better feeling in the world than holding your precious child.</strong></p>
        {/* <p className='text-md font-light py-3 px-7'><strong className='font-semibold text-2xl text-richblack-700'>To Know More About Baby Food Charts and Recipes... </strong></p> */}
            <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 place-items-center gap-y-10 mb-10 mt-4'>
            {
                loading ? (<Spinner type={"Loading, "}/>) :(
                posts.map((post, index) => (
                    <Card key={index} post={post}/>
                )))
               } 
            </div>
        </div>
    </div>
  )
}

export default HomePage