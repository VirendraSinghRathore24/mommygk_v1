import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import baseUrl from '../../baseUrl';

function BlogList() {

    const [blogs, setBlogs] = useState([]);

    async function fetchBlogsData(){
        try{

            const result = await fetch(`${baseUrl}/admin/blogs`);
            const data = await result.json();

            console.log(data.data);

            setBlogs(data.data);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchBlogsData();
    })


  return (
    <div className='flex flex-col mt-10 p-10 items-center'>
    <div className='flex justify-between items-center mx-auto w-[800px] py-5'>
        <p className='text-[24px] text-left font-semibold'>Update or Delete existing Food Details:</p>
        <Link to="/tourismdetailsinsert">
             <button className=' ml-20 bg-gray-500 text-white h-10 w-[150px] font-semibold rounded-md hover:scale-110 transition duration-300 ease-in'>Add New blog</button>
        </Link>
    </div>
        {
            blogs.map((blog) => (
                <div className='flex justify-between items-center w-[800px] p-5 outline'>       
                    <p>Food</p>
                    <p className='text-blue-500 unerline'>{blog.sidebartitle}</p>
                    
                    <div>
                    <NavLink to={`/admin/blogs/${blog.sidebartitle}`}>
                        <button  className='ml-20 bg-green-500 h-10 w-[100px] font-semibold rounded-md text-richblack-700 hover:scale-110 transition duration-300 ease-in'>Update</button>
                    </NavLink>
                        {/* <button onClick={updateHandler} value={blog.title} className='ml-20 bg-green-500 h-10 w-[100px] font-semibold rounded-md text-richblack-700 hover:scale-110 transition duration-300 ease-in'>Update</button> */}
                        <button  name='title' value={blog.title} className=' ml-20 bg-green-500 h-10 w-[100px] font-semibold rounded-md text-richblack-700 hover:scale-110 transition duration-300 ease-in'>Delete</button>
                    </div>
                </div>
            ))
        }
        
    </div>
  )
}

export default BlogList