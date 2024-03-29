import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Page1.css';

function AboutUS() {

  useEffect(() => {
    window.scroll(0,0);
  }, []);

  return (
    <div className=''>
    <p className='p-2 googlefontpoppins'><strong><Link to="/">Home</Link> </strong> / About us</p>
    {/* <p className='ml-10 text-3xl text-blue-400'>About Me</p> */}
    <div className='flex flex-wrap w-full justify-evenly gap-y-2'>
        <div className='flex flex-col lg:w-8/12 xs:w-screen items-center font-normal p-5'>
            <p className='leading-8 text-md align-baseline text-justify googlefontpoppins'>Hello!!! Thanks for visiting my space and taking the time to read about me. I am Sanju from Rajasthan (India) and I live in Bangalore. I am working in IT industry as a software engineer for 10 years. I am mother of Rudransh Rathore and during this time I found my passion! Yes it's cooking and clicking, and so this blog!
 
 Though I am fond of food and like to taste different varieties, but started my own cooking after my marriage as I never entered into the kitchen because of my lovable mom and only had the opportunity to enjoy her yummy food. But after marriage, I started cooking vigorously. My husband is a best critic, and that helps me to improve my cooking.</p>
        
        <br/>
        <p className='leading-8 text-md align-baseline text-justify googlefontpoppins'>The recipes posted here are tried and tasted in my kitchen, traditional native recipes from my mom, baby foods which I feed my baby and few other recipes tried from friends, cookbooks or other food blogs.Being a health-conscious person, most of my recipes are focuses on health. (Some are exceptional though)</p>
        </div>

        <div className='p-5'>
            <img src='../../images/newpic1.webp' loading='lazy' alt='profile' className='w-[320px] h-[400px] rounded-lg'/>
       </div>
    </div>
    
    </div>
  )
}

export default AboutUS