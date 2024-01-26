import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoPlayCircleOutline } from "react-icons/io5";

function PopularCard({url, imageUrl, title, color}) {
  return (
    <div>
    <div className='relative w-[280px] bg-bgDark bg-opacity-80 rounded-full overflow-hidden shadow-lg pointer-events-auto'>
    <NavLink to={`${url}`} target='_blank'>
        
       <img className='h-[280px]' src={imageUrl} loading='lazy' ></img>
       <div className='absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    
                   <IoPlayCircleOutline size={100} />
                    
                    
              </div>
       {/* <div className='font-mono hover:scale-110 transition duration-300 ease-in'>
       {
        color === 1 ?  (<div className='absolute text-white bottom-4 px-4 text-left text-wrap bg-stone-300 h-20 w-full'>
            <p className='text-black font-bold text-xl leading-6 text-center mt-6 '>{title}</p>
        </div>) :
        color === 2 ? ( <div className='absolute text-white bottom-4 px-4 text-left text-wrap bg-blue-300 h-20 w-full'>
            <p className='text-black font-bold text-xl leading-6 text-center mt-6'>{title}</p>
        </div>) :
        color === 3 ? ( <div className='absolute text-white bottom-4 px-4 text-left text-wrap bg-lime-300 h-20 w-full'>
            <p className='text-black font-bold text-xl leading-6 text-center mt-6'>{title}</p>
        </div>) :
        ( <div className='absolute text-white bottom-4 px-4 text-left text-wrap bg-green-300 h-20 w-full'>
            <p className='text-black font-bold text-xl leading-6 text-center mt-6'>{title}</p>
        </div>)
       }
        </div> */}
        
        </NavLink>
        
    </div>
    <p className='text-blue-700 font-bold text-xl leading-6 text-center mt-6 '>{title}</p>
    </div>
  )
}

export default PopularCard