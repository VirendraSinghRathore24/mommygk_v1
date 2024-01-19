import React, { useEffect, useState } from 'react'
import Spinner from "../components/Spinner"
import baseUrl from '../baseUrl'
import Card from './Card';
import data from "../data/data.json"
import "./YoutubeEmbed.css";
import YoutubeEmbed from './YoutubeEmbed';
import { NavLink } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './page2';
import PopularCard from './PopularCard';


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
   <div>
    <div className='mx-auto w-10/12 flex flex-col lg:flex-row xl:flex-row'>
       

          <Page1/>
          <Page2/>

         
        
    </div>
    <div className='w-10/12 mx-auto'>
    <div className='text-2xl text-red-400 uppercase  mt-4 font-mono font-bold'>
            Popular Post

          </div>
          <div className=''>
          <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 place-items-center gap-y-10 gap-x-4 mb-10 mt-4'>
          <PopularCard url={'babyfood6month'} imageUrl={'../../images/foodcharts.JPEG'} title={'6 Month Food Chart'} color={1}/>
          <PopularCard url={'foodrecipesvideo'} imageUrl={'../../images/solidfood2.jpg'} title={'Solid Food Introduction'} color={2}/>
          <PopularCard url={'foodrecipesvideo'} imageUrl={'../../images/carrot2.jpeg'} title={'Carrot Recipe Video'} color={3}/>
          {/* <PopularCard url={'blogs/How-to-start-solid-food'} imageUrl={'../../images/blog.jpg'} title={'How To Start Solid Food Blog'} color={4}/> */}
          </div>
          </div>
          </div>
          </div>
 
  )
}

export default HomePage