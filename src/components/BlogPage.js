import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import data from '../data/blogs.json';

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
    <div className='flex flex-col p-4'>
            <div>
                <div>
                    <h1 className='font-bold text-[20px] text-blue-500 underline text-center'>{posts.title}</h1>
                </div>
                <div className="w-45 text-richblack-700 font-normal text-[17px] text-left mt-6 leading-9">        
                    <span dangerouslySetInnerHTML={{__html: posts.desc1}} />
               
                </div>
                <div className='flex justify-center mt-2'>
                   <iframe title='how' className='w-60 md:w-80 lg:w-96 h-40 md:h-60 lg:h-90' src="https://www.youtube.com/embed/1h-Buyvan-M" frameborder="0" allowfullscreen="" ></iframe>
                </div>
                <div className="w-45 text-richblack-700 font-normal text-[17px] text-left mt-6 leading-9">        
                    <span dangerouslySetInnerHTML={{__html: posts.desc2}} />
           
                </div>
                <div className='flex justify-center'>
                   <iframe title='first week' className='h-[350px] w-[600px]' src="https://www.youtube.com/embed/T51chIH2NLI" frameborder="0" allowfullscreen="" ></iframe>
                </div>
                <div className="w-45 text-richblack-700 font-normal text-[17px] text-left mt-6 leading-9">        
                    <span dangerouslySetInnerHTML={{__html: posts.desc3}} />
                </div>
            </div>
    </div>
    
    </div>
    
  )
}

export default BlogPage