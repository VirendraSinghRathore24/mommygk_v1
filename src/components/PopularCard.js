import React from 'react'
import { NavLink } from 'react-router-dom'

function PopularCard({url, imageUrl, title, color}) {
  return (
    <div className='relative w-[330px] bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-lg pointer-events-auto'>
    <NavLink to={`/${url}`}>
        
            <img className='h-[350px]' src={imageUrl} loading='lazy' ></img>
            {/* <div>
                <button className='w-[100px] h-[40px] text-white bg-pink-500 rounded-lg absolute right-2 bottom-[-12px] grid place-items-center font-bold  hover:scale-110 transition duration-300 ease-in'>Explore</button>
            </div> */}
       <div>
       {
        color === 1 ?  (<div className='absolute text-white bottom-4 px-4 text-left text-wrap bg-stone-300 h-20 w-full'>
            <p className='text-black font-bold text-xl leading-6 text-center mt-6'>{title}</p>
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
      
      
       
        </div>
        
        </NavLink>
    </div>
  )
}

export default PopularCard