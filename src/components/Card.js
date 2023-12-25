import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({post}) {
  return (
    // <div>
    //      <div className='relative pointer-events-auto '>
    //      <NavLink to={`/${post.url}`}>
    //             <img src={post.imageUrl} loading='lazy' className='w-[600px] h-[400px] rounded-md'/>
                    
    //             <div className='absolute -bottom-6 px-4 text-left text-white'>
    //             {
    //               post.color ? ( <p className='text-[40px] font-semibold text-black'>{post.title}</p>) : ( <p className='text-[40px] font-semibold text-white'>{post.title}</p>)
    //             }
                   
    //                 <p className='w-[280px]'>{post.shortDesc}</p>
    //                 <div className='py-10'>
                    
    //                     <button className='bg-pink-500 h-10 w-[100px] font-semibold rounded-md text-richblack-700 hover:scale-110 transition duration-300 ease-in'
    //                     >Explore</button>
                        
    //                 </div>
    //             </div>
    //             </NavLink>
    //         </div>  
            
    // </div>
    <div className='w-[310px] bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-lg'>
    <NavLink to={`/${post.url}`}>
        <div className='relative pointer-events-auto'>
            <img className='h-[350px]' src={post.imageUrl} loading='lazy' ></img>

            <div >
                <button className='w-[100px] h-[40px] text-white bg-pink-500 rounded-lg absolute right-2 bottom-[-12px] grid place-items-center font-bold  hover:scale-110 transition duration-300 ease-in'>
                Explore
                    
                </button>
            </div>
        </div>
        <div className='p-4'>
            <p className='text-blue-500 font-bold text-xl leading-6'>{post.title}</p>
            <p className=' mt-2'>
            {
                post.shortDesc
            }
            </p>
        </div>
        </NavLink>
    </div>
  )
}

export default Card