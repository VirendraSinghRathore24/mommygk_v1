import React from 'react'
import { Link } from 'react-router-dom'

function AboutUS() {
  return (
    <div>
    <p className='p-2'><strong><Link to="/">Home</Link> </strong> / About us</p>
    <p className='ml-10 text-3xl text-blue-400'>About Me</p>
    <div className='flex flex-wrap w-full'>
        <div className='flex flex-col ml-10 lg:w-8/12 xs:w-screen items-center font-normal p-5'>
            <p className='leading-7 text-[18px] align-baseline text-justify'>Hello!!! Thanks for visiting my space and taking the time to read about me. I am Sanju from Rajasthan and I live in Bangalore. I am working in IT industry as a software engineer for 10 years. I am mother of Rudransh Rathore and during this time I found my passion! Yes it's cooking and clicking, and so this blog!
 
 Though I am fond of food and like to taste different varieties, but started my own cooking after my marriage as I never entered into the kitchen because of my lovable mom and only had the opportunity to enjoy her yummy food. But after marriage, I started cooking vigorously. My husband is a best critic, and that helps me to improve my cooking.</p>
        
        <br/>
        <p className='leading-7 text-[18px] '>The recipes posted here are tried and tasted in my kitchen,traditional native recipes from my mom, baby foods which I feed my baby and few other recipes tried from friends, cookbooks or other food blogs.Being a health-conscious person, most of my recipes are focuses on health. (Some are exceptional though)</p>
        </div>

        <div className='px-20 py-2'>
            <img src='https://res.cloudinary.com/dixqxdivr/image/upload/v1688706322/sanju_xiwiyn.jpg' loading='lazy' className='w-[200px] h-[280px] rounded-md'/>
       </div>
    </div>
    
    </div>
  )
}

export default AboutUS