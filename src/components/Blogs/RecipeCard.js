import React from 'react'
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function RecipeCard({post}) {
  return (
    <div className='hover:scale-110 transition duration-300 ease-in'>
        <NavLink to={`/baby-food-recipes/${post.month.replaceAll(" ","-")}/${post.name}`}>
                    <div className='relative w-[220px] bg-bgDark bg-opacity-80 rounded-full overflow-hidden shadow-lg pointer-events-auto'>
                        <LazyLoadImage src={post.img1} alt="img" height="auto" width="100%" />
                    </div>
                    <p className='text-blue-700 poppins-medium text-xl leading-6 text-center mt-6'>{post.name.replaceAll("-", " ")}</p>
        </NavLink>
    </div>
  )
}

export default RecipeCard