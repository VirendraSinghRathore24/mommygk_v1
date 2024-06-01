import React, { useEffect, useState } from 'react'
import "../YoutubeEmbed.css";
import YoutubeEmbed from "../YoutubeEmbed";
import '../google-poppins-font.css';
import data from '../../data/recipes.json';
import { Link, useLocation } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import DOMPurify from 'dompurify'

function RecipePagePreview() {
    const [post, setPost] = useState([]);

    const location = useLocation();
    const recipeName = location.pathname.split("/").at(-1).replaceAll("%20", ' ');
    

     function fetchBlogsData(){
        try{
            
          // const data1 = data.filter((x) => x.name.toLowerCase() === recipeName);
          // console.log(data1[0]);

          //   setPost(data1[0]);
          getData();
        }
        catch(err){
          console.log(err);
        }
      }

      const foodVideosCollectionRef = collection(db, "FoodBlogs");

    const getData =  async() => {
        const data = await getDocs(foodVideosCollectionRef);
        const filteredData = data.docs.map((doc) => ({...doc.data(), id:doc.id}));

        const data1 = filteredData.filter(x => x.title === recipeName);
       
        setPost(data1[0]);
        console.log(data1);
      }
    
      useEffect(() => {
        fetchBlogsData();
        window.scroll(0,0);
      }, []);
      const styleObj = {
        color: 'white',
        backgroundColor: 'red',
        textalign: 'center'
      };
      
  return (
    <div>
    <p className='p-2'><strong><Link to="/">Home</Link> </strong> / <strong><Link to="/baby-food-recipes">6 Month Baby Food Recipes</Link> </strong> / {post.title} </p>
    <div className='p-2 font-semibold'><Link to={'/insertblog'}>Back</Link></div>
    <div className='w-full sm:w-10/12 mx-auto googlefontpoppins py-3 '>
    
        <div className='mt-12 text-3xl sm:text-4xl poppins-regular text-blue-600 text-center sm:text-left'>{post.blogTitle}</div>
        <div className="w-full mx-auto md:text-left p-4 text-richblack-700 googlefontpoppins text-[17px]  mt-6 leading-9">        
                    <span dangerouslySetInnerHTML={{__html: post.description}}  />  
        </div>
    </div>
    <div className='w-full sm:w-10/12 mx-auto p-4'>
    {
       post.youtubeLink ? (<div><div className='text-3xl font-semibold googlefontpoppins'>Watch this video to see how to prepare:</div>
      <div className='mt-8'>
      <YoutubeEmbed embedId={post.youtubeLink} /></div> </div>) 
      : (<></>)
    }
      
    </div>
    
    </div>
  )
}

export default RecipePagePreview