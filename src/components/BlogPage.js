import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import data from '../data/blogs.json';
import Spinner from './Spinner';

function BlogPage() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const title = location.pathname.split("/").at(-1).replaceAll("-"," ");
  

  async function fetchBlogsData(){
      setLoading(true);
      try{
          const data1 = data.filter((x) => x.title === title);
          setPosts(data1[0]);  
      }
      catch(err){
          console.log(err);
      }
      setLoading(false);
  }

  useEffect(() => {
      fetchBlogsData();
      window.scroll(0,0);
  },[]);
  return (
    <div>
    <div className='flex flex-row justify-between'>
         <p className='text-md font-light py-3 px-5 md:px-2 pointer-events-auto'><strong className='font-semibold'><NavLink to="/"> Home </NavLink><NavLink to={'/blogs'}> / Blogs </NavLink></strong>/ {title} </p>
         {/* <div className='flex gap-x-2 p-2'>
            <AiFillLike fontSize="1.75rem" />
            <AiFillDislike fontSize="1.75rem" />
         </div> */}
         </div>
    <div className='flex flex-col p-8'>
            <div>
                <div  >
                    <h1 className='font-bold text-[20px] text-blue-500 underline text-center'>{posts.title}</h1>
                </div>
                <div className="w-45 text-richblack-700 font-normal text-[17px] text-left">        
                    <span dangerouslySetInnerHTML={{__html: posts.desc}} />
                <br/>
                </div>
            </div>
    </div>
    
    </div>
    
  )
}

export default BlogPage