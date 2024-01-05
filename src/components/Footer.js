import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    // <div>
    //     <div className='shadow-md w-full flex flex-col justify-center items-center border-2 bottom-0'>
    //       <div className='p-5'>
    //         <p className='text-3xl text-center w-full'>Join Our Community</p>
    //         <p className='text-xl text-center font-normal p-2'>To stay connected with Sanju and receive updates on the latest post, you can connect on the following platforms</p>
    //           <div className='flex justify-evenly gap-x-8 py-2'>
    //             <Link to="https://www.instagram.com/mommy_sanju/">
    //             <img src='../../images/insta1.jpg' alt='instagram' target="_blank" className='w-[70px] h-[70px] mt-1'/>
    //             </Link>
    //             <Link to="https://www.youtube.com/@MommyGK">
    //             <img src='../../images/youtube.png' alt='youtube' target="_blank" className='w-[50px] h-[50px] mt-4'/>
    //             </Link>
    //             <Link to="https://www.facebook.com/people/Sanju-Shekhawat/100094344244292/?mibextid=LQQJ4d">
    //             <img src='../../images/facebook.png' alt='facebook' target="_blank" className='w-[50px] h-[50px] mt-4'/>
    //             </Link>
    //             <Link to="https://www.linkedin.com/in/sanju-shekhawat-59344b44/">
    //             <img src='../../images/linkedin.png' alt='linkedin' target="_blank" className='w-[50px] h-[50px] mt-4'/>
    //             </Link>
                
    //           </div>
    //           <div className='flex justify-evenly font-normal text-lg '>
    //           <Link to="/contactus">Contact us</Link>
    //           <Link to="/privacypolicy">Privacy Policy</Link>
    //           <Link to="/termsofuse">Terms of Use</Link>
    //           </div>
    //           <div class="text-base text-center pt-4 text-blue-500">Copyright © 2023 <strong> www.mommygk.com </strong> All Rights Reserved.</div>
    //       </div>
    //     <div>
       
    //    </div>
            
    //     </div>
    // </div>
    <div>
        <div className='relative min-h[280px] w-full overflow-hidden bg-brand py-8 px-8 text-blue-500 bg-stone-50 border-2 shadow-md'>
        <div className='max-w-maxScreen mx-auto'>
        <div className='flex flex-col items-center md:items-start gap-4 md:flex-row md:justify-around md:gap-0 my-6'>
        <div className='flex flex-col text-center text-base '>
          <p class="mb-2 md:mb-6 font-bold uppercase text-center md:text-left">Get in touch</p>
          <div className='flex gap-x-4'>
              
          <Link to="https://www.instagram.com/mommy_sanju/" target="_blank">
                <img src='../../images/insta1.jpg' alt='instagram' className='w-[35px] h-[35px] mt-1 mx-auto'/>
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
        </div>
        <div className='flex flex-col text-center text-base md:text-left'>
          <p class="mb-2 md:mb-6 font-bold uppercase text-center md:text-left">Food Charts</p>
          <div className='flex flex-col gap-y-2'>
                <a href='/babyfood6month'>6 Month</a>
                <a href='/babyfood7month'>7 Month</a>
                <a href='/babyfoodspices'>Food Spices</a>
          </div>
        </div>
        <div className='flex flex-col text-center text-base md:text-left'>
          <p class="mb-2 md:mb-6 font-bold uppercase text-center md:text-left">Top Purees</p>
          <div className='flex flex-col gap-y-2'>
                <a href='/foodrecipesvideo'>Solid Food Guide</a>   
                <a href='/foodrecipesvideo'>First Week Purees</a>
                <a href='/foodrecipesvideo'>Carrot Puree</a>        
          </div>
        </div>
        
        <div className='flex flex-col text-center text-base md:text-left'>
          <p class="mb-2 md:mb-6 font-bold uppercase text-center md:text-left">Services</p>
          <div className='flex flex-col gap-y-2'>
            <a href='/contactus'>Contact us</a>
            <a href='/privacypolicy'>Privacy Policy</a>
            <a href='/termsofuse'>Terms of use</a>
         </div>
        </div>
        </div>
        </div>
        <div class="text-base text-center border-t border-brColor pt-4">Copyright © 2024 <strong className='text-blue-500'> www.mommygk.com </strong> All Rights Reserved.</div>
        </div>
        
    </div>
  )
}

export default Footer