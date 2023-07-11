import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div className='shadow-md w-full flex  flex-col justify-center items-center border-2 py-2 bottom-0'>
          <div className='p-5'>
            <p className='text-3xl text-center w-full'>Join Our Community</p>
            <p className='text-xl text-center font-normal p-2'>To stay connected with Sanju and receive updates on the latest post, you can connect on the following platforms</p>
              <div className='flex justify-evenly gap-x-8 py-5'>
                <Link to="https://www.instagram.com/mommygk_sanju/">
                <img src='https://res.cloudinary.com/dixqxdivr/image/upload/v1688708911/instagram-1581266_1280_fwpbeq.jpg' alt='instagram' className='w-[100px] h-[100px]'/>
                </Link>
                <Link to="https://www.youtube.com/@MommyGK">
                <img src='https://res.cloudinary.com/dixqxdivr/image/upload/v1688707836/youtube-1837872_1280_oicf29.png' alt='youtube' className='w-[70px] h-[70px] mt-4'/>
                </Link>
                <Link to="https://www.linkedin.com/in/sanju-shekhawat-59344b44/">
                <img src='https://res.cloudinary.com/dixqxdivr/image/upload/v1686808399/Viren/linkedin.png.png' alt='linkedin' className='w-[70px] h-[70px] mt-4'/>
                </Link>
              </div>
          </div>
        <div>
       <p>Copyright © 2023 Mommy GK. All rights reserved.</p>
       </div>
            
        </div>
    </div>
  )
}

export default Footer