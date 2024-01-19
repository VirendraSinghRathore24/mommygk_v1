import React, { useEffect, useState } from 'react'
import Spinner from "../components/Spinner"
import baseUrl from '../baseUrl'
import Card from './Card';
import data from "../data/data.json"
import "./YoutubeEmbed.css";
import YoutubeEmbed from './YoutubeEmbed';
import { Link, NavLink } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './page2';
import PopularCard from './PopularCard';
import ProductCard from './ProductCard';


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
    <div className='text-3xl text-red-700 p-8 uppercase mt-4 font-mono font-bold '>
            Popular Post

          </div>
            <div >
              <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 place-items-center gap-y-10 gap-x-4 mb-10 mt-4'>
              <PopularCard url={'/babyfood6month'} imageUrl={'../../images/foodcharts.JPEG'} title={'6 Month Food Chart'} color={1}/>
              <PopularCard url={'https://www.youtube.com/watch?v=1h-Buyvan-M&t=91s'} imageUrl={'../../images/solidfood2.jpg'} title={'Solid Food Introduction'} color={2}/>
              <PopularCard url={'https://www.youtube.com/watch?v=4S02boyMtWA'} imageUrl={'../../images/carrot2.jpeg'} title={'Carrot Recipe Video'} color={3}/>
              {/* <PopularCard url={'blogs/How-to-start-solid-food'} imageUrl={'../../images/blog.jpg'} title={'How To Start Solid Food Blog'} color={4}/> */}
              </div>
            </div>
          </div>
          <div className='w-10/12 mx-auto text-lg p-8 mt-4  '>
            <div className='text-3xl uppercase text-red-700 font-mono font-bold '>Baby Toys Checklist</div>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 place-items-center gap-y-10 gap-x-4 mb-10 mt-4'>
            <ProductCard url={'https://www.amazon.in/shop/mommygk_sanju/list/1254Y8II0H5FN?tag=onamzsanjuk03-21&ref_=aip_sf_list_spv_ofs_mixed_d'} imageUrl={'../../images/toys6to12.png'}/>
            <ProductCard url={'https://www.amazon.in/shop/mommygk_sanju/list/27UZI465HMI3B?tag=onamzsanjuk03-21&ref_=aip_sf_list_spv_ofs_mixed_d'} imageUrl={'../../images/12monthstoys.png'}/>
            <ProductCard url={'https://www.amazon.in/shop/mommygk_sanju/list/2XZWEA1DZJVI8?tag=onamzsanjuk03-21&ref_=aip_sf_list_spv_ofs_mixed_d'} imageUrl={'../../images/halfyeartoys.png'}/>
            <ProductCard url={'https://www.amazon.in/shop/mommygk_sanju/list/STXIA7YLY14N?tag=onamzsanjuk03-21&ref_=aip_sf_list_spv_ofs_mixed_d'} imageUrl={'../../images/1yeartoys.png'}/>
            </div>
            <div className='text-red-700 font-mono font-bold'>See More <span className='text-blue-600 underline'><Link to={'/toys'}>Baby Toys</Link></span></div>
          </div>
          <div className='w-10/12 mx-auto text-lg p-8 mt-4  '>
            <div className='text-3xl uppercase text-red-700 font-mono font-bold '>Baby Care Products Checklist</div>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 place-items-center gap-y-10 gap-x-4 mb-10 mt-4'>
            <ProductCard url={'https://www.amazon.in/shop/mommygk_sanju/list/2J0J72BX3UILO?tag=onamzsanjuk03-21&ref_=aip_sf_list_spv_ofs_mixed_d'} imageUrl={'../../images/newmomchecklist.png'}/>
            <ProductCard url={'https://www.amazon.in/shop/mommygk_sanju/list/J1Q2BDHJSKLX?tag=onamzsanjuk03-21&ref_=aip_sf_list_spv_ofs_mixed_d'} imageUrl={'../../images/daipers.png'}/>
            <ProductCard url={'https://www.amazon.in/shop/mommygk_sanju/list/2XZWEA1DZJVI8?tag=onamzsanjuk03-21&ref_=aip_sf_list_spv_ofs_mixed_d'} imageUrl={'../../images/foodplate.png'}/>
            <ProductCard url={'https://www.amazon.in/shop/mommygk_sanju/list/2QUS8PMDHPK5I?tag=onamzsanjuk03-21&ref_=aip_sf_list_spv_ofs_mixed_d'} imageUrl={'../../images/babyproofing.png'}/>
            </div>
            <div className='text-red-700 font-mono font-bold'>See More <span className='text-blue-600 underline'><Link to={'https://www.amazon.in/shop/mommygk_sanju'} target='_blank'>Baby Care Products</Link></span></div>
          </div>
         
          </div>
 
  )
}

export default HomePage