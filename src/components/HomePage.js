import React, { useEffect, useState } from 'react'
import baseUrl from '../baseUrl'
import data from "../data/data.json"
import "./YoutubeEmbed.css";
import YoutubeEmbed from './YoutubeEmbed';
import { Link, NavLink } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './page2';
import PopularCard from './PopularCard';
import ProductCard from './ProductCard';
import ProductCard1 from './ProductCard1';
import { InstagramEmbed } from 'react-social-media-embed';


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
    <div className='mx-auto w-10/12 flex flex-wrap '>
       

          <Page1/>
          <Page2/>

         
        
    </div>
    <div className='bg-gradient-to-r from-stone-50 to-blue-50 mt-4 py-8'>
    <div className='w-10/12 mx-auto'>
              <div className='text-3xl text-red-700 uppercase font-mono font-bold '>Popular Post</div>
              <div className='flex flex-wrap gap-y-10 justify-evenly mt-8'>
              <PopularCard url={'https://www.youtube.com/watch?v=4S02boyMtWA'} imageUrl={'../../images/carrot11.png'} title={'Carrot Recipe'} color={3}/>
              <PopularCard url={'https://www.youtube.com/watch?v=T51chIH2NLI'} imageUrl={'../../images/firstweekfood11.jpeg'} title={'First Week Food'} color={1}/>
              <PopularCard url={'https://www.youtube.com/watch?v=1h-Buyvan-M&t=91s'} imageUrl={'../../images/solidfood21.jpg'} title={'Solid Food Introduction'} color={2}/>
              {/* <PopularCard url={'blogs/How-to-start-solid-food'} imageUrl={'../../images/blog.jpg'} title={'How To Start Solid Food Blog'} color={4}/> */}
              </div>
          </div>
          </div>
          <div className='w-10/12 mx-auto text-lg py-8 '>
            <div className='xs:text-xl sm:text-xl md:text-3xl uppercase text-red-700 font-mono font-bold'>Baby Toys Checklist</div>
            <div className='flex flex-wrap gap-y-4 justify-evenly mt-8'>
            <ProductCard url={'/toys'} imageUrl={'../../images/toys6to12.png'}/>
            <ProductCard url={'/toys'} imageUrl={'../../images/halfyeartoys.png'}/>
            <ProductCard url={'/toys'} imageUrl={'../../images/12monthstoys.png'}/>
            <ProductCard url={'https://www.amazon.in/dp/B0997BPRM2?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B0997BPRM2&asc_item-id=amzn1.ideas.3JCW80G6YQQ0B&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/s7.png'}/>
            </div>
            <div className='text-red-700 font-mono font-bold mt-4'>See More <span className='text-blue-600 underline'><Link to={'/toys'}>Baby Toys</Link></span></div>
          </div>
          <div className='bg-gradient-to-r from-stone-50 to-blue-50'>
          <div className='w-10/12 mx-auto text-lg py-8'>
            <div className='xs:text-xl sm:text-xl md:text-3xl uppercase text-red-700 font-mono font-bold '>Baby Care Products Checklist</div>
            <div className='flex flex-wrap gap-y-4 justify-evenly mt-8'>
            <ProductCard url={'/newmomchecklist'} imageUrl={'../../images/newmomchecklist.png'}/>
            <ProductCard url={'/foodplatecheklist'} imageUrl={'../../images/foodplate.png'}/>
            <ProductCard url={'/proofingheklist'} imageUrl={'../../images/babyproofing.png'}/>
            <ProductCard url={'https://www.amazon.in/dp/B07DMKJJB4?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B07DMKJJB4&asc_item-id=amzn1.ideas.2J0J72BX3UILO&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/newmom12.png'}/>
            </div>
          </div>
          </div>
          
          <div className='w-10/12 mx-auto text-lg py-8'>
            <div className='xs:text-xl sm:text-xl md:text-3xl uppercase text-red-700 font-mono font-bold '>Our Recent Content at Instagram</div>
            <div className='flex flex-wrap gap-y-4 justify-evenly mt-8'>
              <div ><InstagramEmbed url="https://www.instagram.com/p/C1bO42oS8I9/" /></div>
              <div ><InstagramEmbed url="https://www.instagram.com/p/CurOGQBSHST/?img_index=1" /></div>
              <div ><InstagramEmbed url="https://www.instagram.com/p/CxqSr6-yGzD/?img_index=1" /></div>
              
              
            </div>
            
          </div>

          
          </div>
 
  )
}

export default HomePage