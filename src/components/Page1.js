import React, { useEffect, useState } from 'react'
import Spinner from "../components/Spinner"
import baseUrl from '../baseUrl'
import Card from './Card';
import './Page1.css'
import data from "../data/data.json"
import "./YoutubeEmbed.css";

function Page1() {
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
   
    <div className='mx-auto'>
       
        
        <div className=''>
            <div>
            
                <p className='text-md font-light py-3 px-2 text-center'><strong className='text-xl font-extrabold googlefont text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-700 to-lime-800'>There is no better feeling in the world than holding your precious child.</strong></p>
            
            </div>
            <div className='grid xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-3 place-items-center gap-y-16 gap-x-4 mb-10 mt-8'>
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

export default Page1