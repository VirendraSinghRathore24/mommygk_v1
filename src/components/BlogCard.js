import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogCard({post}) {
  return (
    <div className='w-[310px] bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-lg pointer-events-auto'>
    <NavLink to={`/blogs/${post.title.replaceAll(" ","-")}`}>
        <div className='relative '>
            <img className='h-[250px]' src={post.imageUrl} loading='lazy' alt='image' ></img>
            <div>
                <button className='w-[100px] h-[40px] text-white bg-pink-500 rounded-lg absolute right-2 bottom-[-12px] grid place-items-center font-bold  hover:scale-110 transition duration-300 ease-in'>Explore</button>
            </div>
        </div>
        <div className='p-4'>
            <p className='text-blue-500 font-bold text-lg leading-6'>{post.title}</p>
            <p className=' mt-2'>{post.shortDesc}</p>
        </div>
        </NavLink>
    </div>
  )
}

export default BlogCard