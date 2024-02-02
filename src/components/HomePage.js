import React, { useEffect, useState } from 'react'
import baseUrl from '../baseUrl'
import data from "../data/data.json"
import "./YoutubeEmbed.css";
import YoutubeEmbed from './YoutubeEmbed';
import Page1 from './Page1';
import Page2 from './page2';
import PopularCard from './PopularCard';
import ProductCard from './ProductCard';
import { InstagramEmbed } from 'react-social-media-embed';
import PopularCard1 from './PopularCard1';
import Faq from './Faq';



function HomePage() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState(data);
    const [isExpanded1, setExpanded1] = useState(false)
    const [isExpanded2, setExpanded2] = useState(false)
    const [isExpanded3, setExpanded3] = useState(false)
    const [isExpanded4, setExpanded4] = useState(false)

  return (
   <div className=''>
    <div className='mx-auto w-10/12 flex flex-wrap '>
       

          <Page1/>
          <Page2/>

         
        
    </div>
    <div className='bg-gradient-to-r from-stone-50 to-blue-50 mt-4 py-8'>
          <div className='w-10/12 mx-auto'>
            <div className='text-2xl md:text-3xl text-black uppercase font-bold justify-center flex gap-x-2'>Popular <span className='text-green-700'> Recipe Posts</span></div>
            <div className='flex flex-wrap gap-y-10 justify-evenly mt-8'>
              <PopularCard url={'https://www.youtube.com/watch?v=4S02boyMtWA'} imageUrl={'../../images/carrot11.png'} title={'Carrot Recipe'} color={3}/>
              <PopularCard url={'https://www.youtube.com/watch?v=T51chIH2NLI'} imageUrl={'../../images/firstweekfood11.jpeg'} title={'First Week Food'} color={1}/>
              <PopularCard url={'https://www.youtube.com/watch?v=1h-Buyvan-M&t=91s'} imageUrl={'../../images/sweetpotato7.jpeg'} title={'Solid Food Introduction'} color={2}/>
              {/* <PopularCard url={'blogs/How-to-start-solid-food'} imageUrl={'../../images/blog.jpg'} title={'How To Start Solid Food Blog'} color={4}/> */}
            </div>
          </div>
          </div>
          <div className='w-10/12 mx-auto text-lg mt-4 py-8'>
            <div className='text-2xl md:text-3xl text-red-700 uppercase font-bold flex justify-center gap-x-2'>Popular <span className='text-green-700'>Food Charts</span></div>
            <div className='flex flex-wrap gap-y-10 justify-evenly mt-8'>
              <PopularCard1 url={'/babyfood6month'} imageUrl={'../../images/food1.jpg'} title={'6 Month'} color={3}/>
              <PopularCard1 url={'/babyfood7month'} imageUrl={'../../images/food2.jpg'} title={'7 Month'} color={1}/>
              <PopularCard1 url={'/foodfor8monthbaby'} imageUrl={'../../images/food3.jpg'} title={'8 Month'} color={2}/>
              {/* <PopularCard url={'blogs/How-to-start-solid-food'} imageUrl={'../../images/blog.jpg'} title={'How To Start Solid Food Blog'} color={4}/> */}
            </div>
          </div>
          {/* <div className='bg-gradient-to-r from-stone-50 to-blue-50'>
          <div className='w-10/12 mx-auto text-lg py-8 '>
            <div className='text-2xl md:text-3xl uppercase text-red-700 font-mono font-bold'>Baby Toys Checklist</div>
            <div className='flex flex-wrap gap-y-4 justify-evenly mt-8'>
            <ProductCard url={'/toys'} imageUrl={'../../images/toys6to12.png'}/>
            <ProductCard url={'/toys'} imageUrl={'../../images/halfyeartoys.png'}/>
            <ProductCard url={'/toys'} imageUrl={'../../images/12monthstoys.png'}/>
            <ProductCard url={'https://www.amazon.in/dp/B0997BPRM2?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B0997BPRM2&asc_item-id=amzn1.ideas.3JCW80G6YQQ0B&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/s7.png'}/>
            </div>
            <div className='text-red-700 font-mono font-bold mt-4'>See More <span className='text-blue-600 underline'><Link to={'/toys'}>Baby Toys</Link></span></div>
          </div>
          </div> */}
          <div className='bg-gradient-to-r from-stone-50 to-blue-50'>
          <div className='w-10/12 mx-auto text-lg py-8'>
            <div className='text-2xl md:text-3xl uppercase text-green-700 flex justify-center gap-x-2 font-bold '>Baby Care <span className='text-black'>Checklist</span></div>
            <div className='flex flex-wrap gap-y-4 justify-evenly mt-8'>
            <ProductCard url={'/newmomchecklist'} imageUrl={'../../images/newmomchecklist.png'}/>
            <ProductCard url={'/foodplatecheklist'} imageUrl={'../../images/foodplate.png'}/>
            <ProductCard url={'/proofingheklist'} imageUrl={'../../images/babyproofing.png'}/>
            <ProductCard url={'/toys'} imageUrl={'../../images/toys6to12.png'}/>
            {/* <ProductCard url={'https://www.amazon.in/dp/B07DMKJJB4?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B07DMKJJB4&asc_item-id=amzn1.ideas.2J0J72BX3UILO&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/newmom12.png'}/> */}
            </div>
          </div>
          </div>

          <div className=''>
          <div className='w-10/12 mx-auto text-lg py-8'>
            <div className='text-2xl md:text-3xl uppercase text-black flex justify-center gap-x-2 font-bold '>Important <span className='text-red-700'>Tips</span></div>
             <div className='flex flex-wrap gap-x-4 mt-8 -mb-[150px] justify-evenly'>
              <div className='w-[350px] h-[350px] -mb-[140px]'>
                <YoutubeEmbed embedId='oJUkcs5NV3k' />
              </div>
              <div className='w-[350px] h-[350px] -mb-[140px]'>
                <YoutubeEmbed embedId='mur1w_hUkeU' />
              </div>
              <div className='w-[350px] h-[350px]'>
                <YoutubeEmbed embedId='dy0hiCzO_zI' />
              </div>
            </div>
          </div>
          </div>
          
          <div className='bg-gradient-to-r from-stone-50 to-blue-50'>
          <div className='w-10/12 mx-auto text-2xl py-8'>
            <div className='xs:text-xl sm:text-xl md:text-3xl uppercase text-red-700 flex justify-center gap-x-2 font-bold '>Posts at <span class='text-green-700'>Instagram</span></div>
            <div className='flex flex-wrap gap-y-4 justify-evenly mt-8'>
              <div ><InstagramEmbed url="https://www.instagram.com/p/C1bO42oS8I9/" /></div>
              <div ><InstagramEmbed url="https://www.instagram.com/p/CurOGQBSHST/?img_index=1" /></div>
              <div ><InstagramEmbed url="https://www.instagram.com/p/CxqSr6-yGzD/?img_index=1" /></div>
            </div>
          </div>
          </div>
          
          <div className='w-10/12 mx-auto py-8 flex flex-col gap-y-4'>
            <div className='text-3xl font-bold'>Frequently asked questions</div>
            <div className='border-b-2 border-stone-200 mt-8'></div>
              <Faq isExpanded={isExpanded1} setExpanded={setExpanded1} title={"When to start solid food for baby?"} desc={"Solid food can be started 6 month onwards."}/>
              <Faq isExpanded={isExpanded2} setExpanded={setExpanded2} title={"Do you have a mobile application?"} desc={"Currently we don't have any mobile application."}/>
              <Faq isExpanded={isExpanded3} setExpanded={setExpanded3} title={"Do you have recipe videos?"} desc={"Yes we have recipe videos available on our youtube channel and link is available on footer."}/>
              <Faq isExpanded={isExpanded4} setExpanded={setExpanded4} title={"Is 6 month baby food chart enough?"} desc={"Yes, It is sufficient and If you have any further questions then please feel free to send us a message using Contact us option."}/>
          </div>
          </div>
 
  )
}

export default HomePage