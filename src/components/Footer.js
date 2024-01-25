import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import axios from 'axios';
import baseUrl from '../baseUrl';

function Footer() {
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const postData = new FormData();
    postData.append('email', formData.email);

    axios.post(`${baseUrl}/subscribe`, postData);

    toast.success("Thanks for the Subscribe !!!");
    
    setFormData({
      email : ""
    })
  };

  return (
    <div>
        <div className='relative min-h[280px] w-full overflow-hidden bg-brand py-8 px-8 text-blue-500 bg-stone-50 border-2 shadow-md'>
        <div className='max-w-maxScreen mx-auto'>
        <div className='flex flex-col items-center md:items-start gap-4 md:flex-row md:justify-around md:gap-0 my-6'>
        <div className='flex flex-col text-center text-base md:text-left'>
          <div className='flex flex-col gap-y-2 items-center'>
          <img src="../../images/logosvg12.svg" alt="Logo" width={55} loading='lazy'/>
          <div className="font-mono text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-stone-800">MommyGK</div>
          <div>The Ultimate Guide For Baby Growth</div>
          </div>
        </div>
        
        <div className='flex flex-col text-center text-base md:text-left'>
          <p class="mb-2 md:mb-6 font-bold uppercase text-center md:text-left">Food Charts</p>
          <div className='flex flex-col gap-y-2'>
                <a href='/babyfood6month'>6 Month</a>
                <a href='/babyfood7month'>7 Month</a>
                <a href='/babyfood6monthhindi'>6 Month Hindi</a>
                <a href='/babyfoodspices'>Baby Food Spices</a>
          </div>
        </div>
        <div className='flex flex-col text-center text-base md:text-left'>
          <p class="mb-2 md:mb-6 font-bold uppercase text-center md:text-left">Top Purees</p>
          <div className='flex flex-col gap-y-2'>
                <a href='/foodrecipesvideo'>Carrot Puree</a> 
                <a href='/foodrecipesvideo'>Solid Food Guide</a>   
                <a href='/foodrecipesvideo'>First Week Purees</a>
                <a href='/Blogs'>Baby Food Blogs</a>       
          </div>
        </div>
        
        <div className='flex flex-col text-center text-base md:text-left'>
          <p class="mb-2 md:mb-6 font-bold uppercase text-center md:text-left">Services</p>
          <div className='flex flex-col gap-y-2'>
            <a href='/aboutus'>About us</a>
            <a href='/contactus'>Contact us</a>
            <a href='/privacypolicy'>Privacy Policy</a>
            <a href='/termsofuse'>Terms of use</a>
         </div>
        </div>
        <div className='flex flex-col text-center text-base items-center'>
          <p class="mb-2 md:mb-6 font-bold uppercase text-center md:text-left">Get in touch</p>
          <div className='flex gap-x-4'>
              
          <Link to="https://www.instagram.com/mommy_sanju/" target="_blank">
                <img src='../../images/instagramsvg.svg' alt='instagram' className='w-[25px] h-[25px] mt-2 mx-auto'/>
              </Link> 
              <Link to="https://www.youtube.com/@MommyGK" target="_blank">
                <img src='../../images/youtube.png' alt='youtube' className='w-[25px] h-[25px] mt-2 mx-auto'/>
              </Link> 
          
              <Link to="https://pin.it/7sQ0ZCi" target="_blank">
                <img src='../../images/pinterest.jpeg' alt='facebook' className='w-[25px] h-[25px] mt-2 ml-1 mx-auto'/>
              </Link>

              <Link to="https://www.facebook.com/people/Sanju-Shekhawat/100094344244292/?mibextid=LQQJ4d" target="_blank">
                <img src='../../images/facebook.png' alt='facebook' className='w-[23px] h-[23px] mt-2 ml-1 mx-auto'/>
              </Link> 
              
               
        </div>
        <div className='flex mt-8'>Subscribe for our latest updates</div>
        <form className='flex mt-2' onSubmit={handleSubmit}>
        <div className="mx-0 mb-1 sm:mb-4">
            <label for="email" className="pb-1 text-xs uppercase tracking-wider"></label>
            <input type="email" id="email" autocomplete="email"  required="true" placeholder="Your email address" value={formData.email} onChange={handleInputChange} className="mb-2 w-full  border py-2 pl-2 pr-4 h-10 sm:mb-0" name="email"/>
        </div>
          <button type="submit" className="flex items-center justify-center w-[100px] h-10 bg-blue-600 text-white  font-lg ">Subscribe</button>
        </form>
        </div>
        </div>
        </div>
        <div class="text-base text-center border-t border-brColor pt-4">Copyright © 2024 <strong className='text-blue-500'> www.mommygk.com </strong> All Rights Reserved.</div>
        </div>
        
    </div>
  )
}

export default Footer