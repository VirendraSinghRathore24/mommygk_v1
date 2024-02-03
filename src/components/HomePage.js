import React, { useEffect, useState } from 'react'
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
import "./Page1.css";

function HomePage() {
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
    <div className='bg-gradient-to-r from-stone-50 to-blue-50 mt-10 py-8'>
          <div className='w-10/12 mx-auto'>
            <div className='text-2xl md:text-3xl text-black uppercase font-bold justify-center flex gap-x-2'>Popular <span className='text-green-700'> Recipe Posts</span></div>
            <div className='flex flex-wrap gap-y-10 justify-evenly mt-14'>
              <PopularCard url={'https://www.youtube.com/watch?v=1h-Buyvan-M&t=91s'} imageUrl={'../../images/sweetpotato7.jpeg'} title={'Solid Food Introduction'} color={2}/>
              <PopularCard url={'https://www.youtube.com/watch?v=4S02boyMtWA'} imageUrl={'../../images/carrot11.png'} title={'Carrot Recipe'} color={3}/>
              <PopularCard url={'https://www.youtube.com/watch?v=T51chIH2NLI'} imageUrl={'../../images/banana_puree.png'} title={'First Week Food'} color={1}/>
            </div>
          </div>
          </div>
          <div className='w-10/12 mx-auto text-lg mt-10 py-8'>
            <div className='text-2xl md:text-3xl text-red-700 uppercase font-bold flex justify-center gap-x-2'>Popular <span className='text-green-700'>Food Charts</span></div>
            <div className='flex flex-wrap gap-y-10 justify-evenly mt-14'>
              <PopularCard1 url={'/babyfood6month'} imageUrl={'../../images/food2.jpg'} title={'6 Month'} color={3}/>
              <PopularCard1 url={'/babyfood7month'} imageUrl={'../../images/food1.jpg'} title={'7 Month'} color={1}/>
              <PopularCard1 url={'/foodfor8monthbaby'} imageUrl={'../../images/food3.jpg'} title={'8 Month'} color={2}/>
            </div>
          </div>
          <div className='bg-gradient-to-r from-stone-50 to-blue-50'>
          <div className='w-10/12 mx-auto text-lg py-8 mt-10'>
            <div className='text-2xl md:text-3xl uppercase text-green-700 flex justify-center gap-x-2 font-bold '>Baby Care <span className='text-black'>Checklist</span></div>
            <div className='flex flex-wrap gap-y-8 justify-evenly mt-14'>
            <ProductCard url={'/newmomchecklist'} imageUrl={'../../images/newmomchecklist.png'}/>
            <ProductCard url={'/foodplatecheklist'} imageUrl={'../../images/foodplate.png'}/>
            <ProductCard url={'/proofingheklist'} imageUrl={'../../images/babyproofing.png'}/>
            <ProductCard url={'/toys'} imageUrl={'../../images/toys6to12.png'}/>
            </div>
          </div>
          </div>

          {/* <div className='mt-14 bg-rose-50 p-10'>
            <div className='flex justify-between w-10/12 mx-auto text-cyan-600'>
              <div className='flex flex-col items-center'>
                <div className='text-5xl'>33K+</div>
                <div className='text-5xl'>Instagram</div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='text-5xl'>2K+</div>
                <div className='text-5xl'>YouTube</div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='text-5xl'>4M+</div>
                <div className='text-5xl'>Instagram Reels</div>
              </div>
            </div>
          </div> */}

          <div className=''>
          <div className='w-10/12 mx-auto text-lg py-8 mt-10'>
            <div className='text-2xl md:text-3xl uppercase text-black flex justify-center gap-x-2 font-bold '>Important <span className='text-red-700'>Tips</span></div>
             <div className='flex flex-wrap gap-x-4 mt-14 -mb-[150px] justify-evenly'>
              <div className='w-[320px] h-[320px] -mb-[100px]'>
                <YoutubeEmbed embedId='oJUkcs5NV3k' />
              </div>
              <div className='w-[320px] h-[320px] -mb-[100px]'>
                <YoutubeEmbed embedId='mur1w_hUkeU' />
              </div>
              <div className='w-[320px] h-[320px]'>
                <YoutubeEmbed embedId='dy0hiCzO_zI' />
              </div>
            </div>
          </div>
          </div>
          
          <div className='bg-gradient-to-r from-stone-50 to-blue-50'>
          <div className='w-10/12 mx-auto text-2xl py-8 mt-10'>
            <div className='xs:text-xl sm:text-xl md:text-3xl uppercase text-red-700 flex justify-center gap-x-2 font-bold '>Posts at <span class='text-green-700'>Instagram</span></div>
            <div className='flex flex-wrap gap-y-8 justify-evenly mt-14'>
              <div ><InstagramEmbed url="https://www.instagram.com/p/C1bO42oS8I9/" /></div>
              <div ><InstagramEmbed url="https://www.instagram.com/p/CurOGQBSHST/?img_index=1" /></div>
              <div ><InstagramEmbed url="https://www.instagram.com/p/CxqSr6-yGzD/?img_index=1" /></div>
            </div>
          </div>
          </div>
          
          <div className='w-9/12 mx-auto py-8 flex flex-col gap-y-4 mt-10'>
            <div className='text-3xl font-extrabold googlefontpoppins flex justify-center'>Frequently asked questions</div>
            <div className='border-b-2 border-stone-200 mt-8'></div>
              <Faq isExpanded={isExpanded1} setExpanded={setExpanded1} isLastFaq={false} title={"When to start solid food for baby?"} desc={"Solid food can be started 6 month onwards."}/>
              <Faq isExpanded={isExpanded2} setExpanded={setExpanded2} isLastFaq={false} title={"Do you have a mobile application?"} desc={"Currently we don't have any mobile application."}/>
              <Faq isExpanded={isExpanded3} setExpanded={setExpanded3} isLastFaq={false} title={"Do you have recipe videos?"} desc={"Yes we have recipe videos available on our youtube channel and link is available on footer."}/>
              <Faq isExpanded={isExpanded4} setExpanded={setExpanded4} isLastFaq={true} title={"Is 6 month baby food chart enough?"} desc={"Yes, It is sufficient and If you have any further questions then please feel free to send us a message using Contact us option."}/>
          </div>
          </div>
 
  )
}

export default HomePage