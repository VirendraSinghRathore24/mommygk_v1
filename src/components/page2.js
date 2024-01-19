import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import "./YoutubeEmbed.css";
import YoutubeEmbed from './YoutubeEmbed';
import { Link, NavLink } from 'react-router-dom';


function Page2() {
    const StyledText = styled.h1`
    font-family: "Karla", Arial, Helvetica, sans-serif;
  
`;

  return (

        <div className='flex flex-col mt-4 gap-x-4 w-[320px] items-left mx-auto '>
          <h2 className='text-center font-bold font-mono text-2xl'>WELCOME!</h2>
          <div className='flex gap-x-2 font-light mt-6 '>
            <img src="../../images/sanju2.png" loading='lazy' className='rounded-full w-36 h-36'/>
            <div className='flex flex-col w-[500px] gap-y-2'>
            <h2 className='text-sm leading-6 align-baseline '><StyledText>I'm Sanju Shekhawat - the recipe developer behind MommyGK. Here you'll find plenty of delicious food recipes and many more. I hope you enjoy exploring!</StyledText></h2>
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
          <Link to="https://www.amazon.in/shop/mommygk_sanju" target="_blank">
            <img src="../../images/amazon.svg" loading='lazy' className='w-8 h-8'/>
          </Link>
          </div>
          <h2 className='mt-8 border-t border-brColor'></h2>
          {/* <h2 className='mt-4 text-center uppercase font-bold font-mono text-xl'>Related Video</h2> */}
          <div className='mt-6'>
          
              <YoutubeEmbed embedId='1h-Buyvan-M' />
                
          </div>
          <div className='mt-6 '>
          
              <YoutubeEmbed embedId='T51chIH2NLI' />
                
          </div>

          {/* <h2 className='mt-4 text-center font-sans uppercase font-bold'>Related Article</h2>
          <div className=' bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-lg pointer-events-auto mt-4 mb-6'>
    <NavLink to={`/blogs/How-to-start-solid-food`}>
        <div className='relative '>
            <img className='h-[230px]' src="../../images/blog.jpg" loading='lazy' ></img>
           
        </div>
        <div className='p-4 bg-stone-100 bg-brand'>
            <p className='text-blue-500 font-bold text-lg leading-6'>Blog - How to Start Solid Food</p>

        </div>
        </NavLink>
    </div> */}
        </div>
        
 
  )
}

export default Page2