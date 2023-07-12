import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Spinner from '../../components/Spinner'
import { useLocation } from 'react-router-dom';
import JoditEditor from 'jodit-react';

import baseUrl from '../../baseUrl';

function UpdateBlog() {

    const location = useLocation();
    const title = location.pathname.split("/").at(-1);

    const getInitialState = () => {
        const value = "";
        return value;
      };

    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");
    const [subcategory, setSubCategory] = useState("");

    const editor = useRef(null);

    async function fetchCategories(){

        const result1 = await fetch(`${baseUrl}/admin/blogs?category=${title}`);
        const data1 = await result1.json();
        
        setCategory(data1.data.category);
        setDescription(data1.data.description);
        setSubCategory(data1.data.subcategory);
    }

    useEffect(() => {
       
        fetchCategories();
    }, []);
   
    async function submitHandler(e){
        e.preventDefault();
        try{
            setLoading(true);
            e.preventDefault();
    
            setType("Food blog is inserting...")
            const data = new FormData() ;
          
            console.log(subcategory);
            data.append('category', 'Food');
            data.append('description', description);
            data.append('title', title);
    
            await axios.post(`${baseUrl}/admin/blogs/updateBlog`, data);
        
            toast.success("Food blog inserted Successfully !!!");
        }
        catch(err){
            console.log(err);
        }
        setLoading(false);
    }

  return (
    <div className='w-full '>
    {
        loading ? (<div className='mt-80 flex items-center  justify-center'>
        <Spinner type={type}/>
        </div>) : (

    <form onSubmit={submitHandler}>
    <div className='flex flex-col mt-[100px]  w-11/12 px-40 h-[666px]'>
    <div>
        <p className='flex text-[30px] justify-center items-center mx-auto'>Food Blog writing...</p>
    </div>
        <div className='flex items-center gap-x-10 py-3'>
            <p>Category: </p>
            <p className='px-1 font-semibold'>Food</p>
        </div>

        <div className='flex items-center gap-x-10 py-3'>
            <p>Blog Title: </p>
            <p className='px-1 font-semibold'>{title}</p>
        </div>
        
        <div className='flex gap-x-7 py-3'>
        <p>Description: </p>
        <div className='w-[1000px]'>
            <JoditEditor
                ref={editor}
                value={description}
                onChange={newContent => setDescription(newContent)}              
            />
           </div>
        </div>

        <div className='flex p-4 gap-x-80 ml-24'>
            <input type='submit' value="Update" className='bg-green-500 h-10 w-[200px] font-semibold rounded-md text-richblack-700 hover:scale-110 transition duration-300 ease-in'></input>
            
        </div>
        
    </div>
   </form>
   )
    }
    </div>
    
  )
}

export default UpdateBlog