import React, { useEffect, useRef, useState } from 'react'
import "./YoutubeEmbed.css";
import YoutubeEmbed from './YoutubeEmbed';
import Page1 from './Page1';
import Page2 from './page2';
import PopularCard from './PopularCard';
import ProductCard from './ProductCard';
import PopularCard1 from './PopularCard1';
import Faq from './Faq';
import "./Page1.css";
import { NavLink } from 'react-router-dom';
import Slider1 from './Slider1';
import "./HomePage.css"

function HomePage() {
    const [isExpanded1, setExpanded1] = useState(false)
    const [isExpanded2, setExpanded2] = useState(false)
    const [isExpanded3, setExpanded3] = useState(false)
    const [isExpanded4, setExpanded4] = useState(false)

    useEffect(() =>{
      window.addEventListener('scroll', reveal);

       function reveal(){
        var reveals = document.querySelectorAll('.reveal')

        for(var i = 0; i < reveals.length; i++)
        {
          var windowHeight = window.innerHeight;
          var revealTop = reveals[i].getBoundingClientRect().top;
          var revealPoint = 150;


          if(revealTop < windowHeight - revealPoint)
          {
            reveals[i].classList.add('active');
          }
          else{
            reveals[i].classList.remove('active');
          }
        }
       }
    }, []);
    

  return (
   <div className=''>
    <div className='mx-auto w-10/12 flex flex-wrap'>
          <Page1/>
          <Page2/>
    </div>
    <div className='bg-gradient-to-r from-stone-50 to-blue-50 mt-10 py-8 reveal'>
          <div className='w-10/12 mx-auto'>
            <div className='text-2xl md:text-3xl text-black uppercase font-bold justify-center flex gap-x-2'>Popular <span className='text-green-700'> Recipe Posts</span></div>
            <div className='flex overflow-scroll gap-x-10 md:gap-x-0 gap-y-10 ml-10 justify-evenly mt-12 py-5'>
              <PopularCard url={'https://www.youtube.com/watch?v=1h-Buyvan-M&t=91s'} imageUrl={'../../images/sweetpotato7.webp'} title={'Solid Food Introduction'} color={2}/>
              <PopularCard url={'https://www.youtube.com/watch?v=4S02boyMtWA'} imageUrl={'../../images/carrot11.webp'} title={'Carrot Recipe'} color={3}/>
              <PopularCard url={'https://www.youtube.com/watch?v=T51chIH2NLI'} imageUrl={'../../images/banana_puree.webp'} title={'First Week Food'} color={1}/>
            </div>
          </div>
          </div>
          <div className='w-10/12 mx-auto text-lg mt-10 py-8 reveal'>
            <div className='text-2xl md:text-3xl text-red-700 uppercase font-bold flex justify-center gap-x-2'>Popular <span className='text-green-700'>Food Charts</span></div>
            <div className='flex overflow-scroll gap-x-10 md:gap-x-0 gap-y-10 justify-evenly mt-14 py-5'>
              <PopularCard1 url={'/babyfoodcharts/6-month-baby-food-chart'} imageUrl={'../../images/foodcharts.webp'} title={'6 Month'} color={3}/>
              <PopularCard1 url={'/babyfoodcharts/7-month-baby-food-chart'} imageUrl={'../../images/food1.webp'} title={'7 Month'} color={1}/>
              <PopularCard1 url={'/babyfoodcharts/8-month-baby-food-chart'} imageUrl={'../../images/food3.webp'} title={'8 Month'} color={2}/>
            </div>
          </div>

          <div className='color mt-10 shadow-xl shadow-gray-400 reveal'>
          <div className='w-10/12 mx-auto flex justify-center p-6 text-white text-3xl text-center googlefontpoppins'>Helping The New Moms Journey</div>
            <div className='w-10/12 mx-auto grid xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5 place-items-center gap-y-4 gap-x-4 mb-10 p-10'>
            <div className='flex flex-col items-center text-white gap-y-2 p-4'>
              <div className='text-5xl font-extrabold text-orange-300'>60K+</div>
              <div className='text-2xl googlefontpoppins text-white'>Followers</div>
              <NavLink className='text-2xl hover:underline hover:text-indigo-400 googlefontpoppins text-white' to={'https://www.instagram.com/mommy_sanju/'} target="_blank">on Instagram</NavLink>
            </div>
            <div className='border-r-2 border-white h-full'></div>
            <div className='flex flex-col items-center text-white gap-y-2 p-4'>
              <div className='text-5xl font-extrabold text-orange-300'>9M+</div>
              <div className='text-2xl googlefontpoppins text-white'>Reel Views</div>
              <NavLink className='text-2xl hover:underline hover:text-indigo-400 googlefontpoppins text-white' to={'https://www.instagram.com/p/C0D5z_RSK-_/'} target="_blank">on Instagram</NavLink>
            </div>
            <div className='border-r-2 border-white h-full'></div>
            <div className='flex flex-col items-center text-white gap-y-2 p-4'>
              <div className='text-5xl font-extrabold text-orange-300'>1540+</div>
              <div className='text-2xl googlefontpoppins text-white'>Subscribers</div>
              <NavLink className='text-2xl hover:underline hover:text-indigo-400 googlefontpoppins text-white' to={'https://www.youtube.com/@MommyGK'} target="_blank">on YouTube</NavLink>
            </div>
            </div>
          </div>
          

          <div >
          <div className='w-10/12 mx-auto text-lg mt-10 py-8 reveal'>
            <div className='text-2xl md:text-3xl uppercase text-green-700 flex justify-center gap-x-2 font-bold '>Baby Care <span className='text-black'>Checklist</span></div>
            <div className='flex overflow-scroll gap-x-10 md:gap-x-0 gap-y-10 justify-evenly mt-14 py-5'>
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
          <div>
          
          </div>
          <div className='bg-gradient-to-r from-stone-50 to-blue-50 mt-10 py-8 reveal'>
          <div className='flex flex-col md:flex-row justify-evenly w-full px-2 md:px-0 md:w-10/12 mx-auto py-8 mt-4 gap-x-1 gap-y-12 '>
          
          <div className='px-2 text-center md:text-left'>
          <div className='text-3xl font-bold text-center uppercase text-blue-600'>Tiny trends & <span className='text-green-600'>big smiles</span></div>
          <div className='poppins-regular'>
          <div className='text-lg mt-8  leading-8'>

            Dress your little one in love, comfort, and endless possibilities. Their tiny outfits are the fabric of cherished memories, stitched with care and sprinkled with joy." 👶👕✨ #TinyThreadsOfLove #BabyFashionStatements
          </div>
           <div className='mt-6 text-lg leading-8'>
            Wrap your bundle of joy in snuggly warmth and adorable style. From tiny socks to soft onesies, every garment is a hug waiting to happen, a smile waiting to bloom." 🍼👶💕 #CuteAndCozy #BabyFashionJoy
          </div>
          </div>
          </div>
          <div className='max-md:hidden'>
           
            <iframe width="560" height="315" className='rounded-lg'
              src="https://www.youtube.com/embed/-F_BJ7iMo7I?autoplay=1&mute=1" 
              title="YouTube video player" 
 
              ></iframe>
            </div>
            <div className='md:hidden'>
              <YoutubeEmbed embedId='-F_BJ7iMo7I?autoplay=1&mute=1' />
            </div>
          </div>
          </div>
          <div className='reveal'>
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
          
          <div className='bg-gradient-to-r from-stone-50 to-blue-50 reveal'>
          <div className='w-10/12 mx-auto text-2xl py-8 mt-10'>
            <div className='xs:text-xl sm:text-xl md:text-3xl uppercase text-red-700 flex justify-center gap-x-2 font-bold '>Posts at <span class='text-green-700'>Instagram</span></div>
            <div className='mt-14'>
              <Slider1/>
            </div>
          </div>
          </div>
          
          <div id='faq' className='w-9/12 mx-auto py-8 flex flex-col gap-y-4 mt-10 reveal'>
            <div className='text-3xl poppins-regular flex justify-center text-center'>Frequently asked questions</div>
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