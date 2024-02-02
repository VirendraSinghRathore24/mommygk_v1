import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import data from '../data/blogs.json';
import "./YoutubeEmbed.css";
import YoutubeEmbed from "./YoutubeEmbed";
import './Page1.css';
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
    <div className='googlefontpoppins'>
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
                    <h1 className='font-bold text-2xl text-blue-600 text-center'>{posts.title}</h1>
                </div>
                <div className="w-45 text-richblack-700 font-normal text-[17px] text-left mt-6 leading-9">        
                    <span dangerouslySetInnerHTML={{__html: posts.desc1}} />
               
                </div>
                {/* <div className='flex justify-center items-center mt-2  border-2 border-black'>
                   <iframe title='how' width="80%" height="500%" src="https://www.youtube.com/embed/1h-Buyvan-M" frameborder="0" allowfullscreen="" ></iframe>
                </div> */}
                <div>
                    <YoutubeEmbed embedId='1h-Buyvan-M' />
                </div>

                <div className="w-45 text-richblack-700 font-normal text-[17px] text-left mt-6 leading-9">        
                    <span dangerouslySetInnerHTML={{__html: posts.desc2}} />
           
                </div>
                <div >
                   <YoutubeEmbed embedId='T51chIH2NLI' />
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