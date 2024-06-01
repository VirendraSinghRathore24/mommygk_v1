import React, { useState,useEffect } from 'react';
import data from '../data/recipes.json';
import RecipeCard from './Blogs/RecipeCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import ShimmerUIBlog from './ShimmerUIBlog';

function Blogs() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const foodVideosCollectionRef = collection(db, "FoodBlogs");

    const getData =  async() => {
        try{
            setLoading(true);

            const data = await getDocs(foodVideosCollectionRef);
            const filteredData = data.docs.map((doc) => ({...doc.data(), id:doc.id}));
       
            const data1 = filteredData.filter(x => x.isPublish === true);
            setPosts(data1);

            setLoading(false);
        }
        catch(er){
            console.log(er);
        }
      }

    useEffect(() => {
        getData();
        window.scroll(0,0);
      }, []);
    
  return (
    <div className='font-mono'>
        <p className='text-md font-light py-3 px-5 mt-2'><strong className='font-bold text-3xl leading-5 text-richblack-700 uppercase text-red-700 font-mono'>Food Recipes </strong> </p>
        {
            loading ? (<ShimmerUIBlog/>) : (
                <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 place-items-center gap-y-10 mb-10 mt-4'>
            {
                posts.map((post, index) => (
                    <RecipeCard key={index} post={post}/>
                ))
            }
        </div>
            )
        }
        
    </div>
  )
}

export default Blogs