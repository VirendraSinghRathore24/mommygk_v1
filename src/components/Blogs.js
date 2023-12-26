import React, { useState,useEffect } from 'react';
import data from '../data/blogs.json';
import BlogCard from './BlogCard';

function Blogs() {
    const [posts, setPosts] = useState(data);
    useEffect(() => {
        window.scroll(0,0);
      }, []);
    
  return (
    <div>
        <div className='text-xl text-center font-semibold mt-4'>
            Baby Food Blogs
        </div>
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 place-items-center gap-y-10 mb-10 mt-4'>
            {
                posts.map((post, index) => (
                    <BlogCard key={index} post={post}/>
                ))
            }
        </div>
    </div>
  )
}

export default Blogs