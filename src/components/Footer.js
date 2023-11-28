import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div className='shadow-md w-full flex flex-col justify-center items-center border-2 bottom-0'>
          <div className='p-5'>
            <p className='text-3xl text-center w-full'>Join Our Community</p>
            <p className='text-xl text-center font-normal p-2'>To stay connected with Sanju and receive updates on the latest post, you can connect on the following platforms</p>
              <div className='flex justify-evenly gap-x-8 py-2'>
                <Link to="https://www.instagram.com/mommy_sanju/">
                <img src='../../images/insta1.jpg' alt='instagram' className='w-[70px] h-[70px] mt-1'/>
                </Link>
                <Link to="https://www.youtube.com/@MommyGK">
                <img src='../../images/youtube.png' alt='youtube' className='w-[50px] h-[50px] mt-4'/>
                </Link>
                <Link to="https://www.facebook.com/people/Sanju-Shekhawat/100094344244292/?mibextid=LQQJ4d">
                <img src='../../images/facebook.png' alt='facebook' className='w-[50px] h-[50px] mt-4'/>
                </Link>
                <Link to="https://www.linkedin.com/in/sanju-shekhawat-59344b44/">
                <img src='../../images/linkedin.png' alt='linkedin' className='w-[50px] h-[50px] mt-4'/>
                </Link>
                
              </div>
              <p className='text-center'>Copyright © 2023 Mommy GK. All rights reserved.</p>
          </div>
        <div>
       
       </div>
            
        </div>
    </div>
  )
}

export default Footer