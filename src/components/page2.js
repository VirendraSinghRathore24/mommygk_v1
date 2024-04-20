import React from 'react'
import "./YoutubeEmbed.css";
import YoutubeEmbed from './YoutubeEmbed';
import { Link } from 'react-router-dom';
import './Page1.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Page2() {
  return (
        <div className='flex flex-col mt-4 gap-x-4 w-[320px] items-left mx-auto '>
          <h2 className='text-center font-semibold googlefont text-2xl'>WELCOME!</h2>
          <div className='flex gap-x-2 font-light mt-6 '>
            <LazyLoadImage src="../../images/newpic.webp" loading='lazy' alt='sanju' className='rounded-full w-36 h-36'/>
            <div className='flex flex-col w-[500px] gap-y-2'>
            <p className='text-[14px] leading-6 align-baseline googlefontpoppins'>I'm Sanju Shekhawat - Here you'll find plenty of delicious recipes and many more. I hope you enjoy exploring!</p>
            <Link className='text-blue-600 underline font-mono font-bold' to={'/aboutus'}>More about me ?</Link>
            </div>
          </div>
          <h2 className='mt-8 border-t border-brColor'></h2>
          <div className='flex gap-x-6 mt-8 items-center justify-center'>
          <Link to="https://www.instagram.com/mommy_sanju/" target="_blank">
            <img src="../../images/instagram.svg" loading='lazy' className='w-8 h-8'/>
          </Link>
          <Link to="https://www.youtube.com/@MommyGK" target="_blank">
            <img src="../../images/youtube.svg" loading='lazy' className='w-8 h-8'/>
          </Link>
          <Link to="https://www.facebook.com/people/Sanju-Shekhawat/100094344244292/?mibextid=LQQJ4d" target="_blank">
            <img src="../../images/facebook.svg" loading='lazy' className='w-8 h-8'/>
          </Link>
          <Link to="https://pin.it/7sQ0ZCi" target="_blank">
            <img src="../../images/pinterest.svg" loading='lazy' className='w-8 h-8'/>
          </Link>
          </div>
          <h2 className='mt-8 border-t border-brColor'></h2>
          <div className='reveal'>
          <div className='mt-10'><YoutubeEmbed embedId='1h-Buyvan-M?autoplay=1&mute=1' /></div>
          <div className='mt-10'><YoutubeEmbed embedId='T51chIH2NLI?autoplay=1&mute=1' /></div>
          </div>
        </div>
  )
}

export default Page2