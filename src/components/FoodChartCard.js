import React from 'react'
import { NavLink } from 'react-router-dom'

function FoodChartCard({post}) {
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
    <div className='relative w-[280px] bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-lg pointer-events-auto '>
    <NavLink to={`/${post.url}`}>
        
      <img className='h-[300px]' src={post.imageUrl} loading='lazy' ></img>
      <div className='font-mono text-xl'>
       {
        post.color === 2 ?  (<div className='absolute text-white bottom-4 px-4 text-left text-wrap bg-rose-300 h-20 w-full'>
            <p className='text-black font-bold text-center mt-6 '>{post.title}</p>
        </div>) :
        post.color === 3 ? ( <div className='absolute text-white bottom-4 px-4 text-left text-wrap bg-blue-300 h-20 w-full'>
            <p className='text-black font-bold text-center mt-6'>{post.title}</p>
        </div>) :
        post.color === 1 ? ( <div className='absolute text-white bottom-4 px-4 text-left text-wrap bg-lime-300 h-20 w-full'>
            <p className='text-black font-bold text-center mt-6'>{post.title}</p>
        </div>) :
        ( <div className='absolute text-white bottom-4 px-4 text-left text-wrap bg-green-300 h-20 w-full'>
            <p className='text-black font-bold text-center mt-6'>{post.title}</p>
        </div>)
       }
     </div>
        </NavLink>
    </div>
  )
}

export default FoodChartCard