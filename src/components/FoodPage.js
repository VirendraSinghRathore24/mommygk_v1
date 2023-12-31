import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import FoodCard from './FoodCard';
import Spinner from './Spinner';
import baseUrl from '../baseUrl';
import data from "../data/food.json"

function FoodPage() {

    const [posts, setPosts] = useState(data);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState("All Food Reciepes");
    const [allData, setAllData] = useState([]);

    const location = useLocation();
    const sidebartitle = location.pathname.split("/").at(-1);

    async function fetchBlogsData(){
        setLoading(true);
        try{
  
          //const result = await fetch(`${baseUrl}/getcardsbycategory`);
          //const data = await result.json();

          setAllData(data);

          //setPosts(data.data);
  
        }
        catch(err){
          console.log(err);
        }
        setLoading(false);
      }
  
      useEffect(() => {
        fetchBlogsData();
      },[])

   async function selectHandler(e)
   {
       setCategory(e.target.value);
     
      //const result = await fetch(`${baseUrl}/getcardsbycategory?category=${e.target.value}`);
      
         // const data = await result.json();
         if(e.target.value == "All-Food-Reciepes")
         {
            setPosts(allData);
         }
         else
         {
            let res = allData.filter(function(name) {
            return name.category == e.target.value; });

            setPosts(res);
         }      
   }

  return (
    <div className=''>
    <p className='p-2'><strong><Link to="/">Home</Link> </strong> / Food</p>
    <div className='flex flex-col'>
        <div className='flex items-center gap-x-2 p-10 justify-center '>
            <p>Category: </p>
            <select name="category" id='category' value={category}  onChange={selectHandler}  className='outline rounded-sm px-1 w-[300px] h-10'>           
            <option value="All-Food-Reciepes">All Baby Food Reciepes</option>
            <option value="Food-By-Months">Baby Food Reciepes by Months</option>
            <option value="Food-By-Puree">Baby Food Reciepes by Purees</option>
            </select>
        </div>
        
        <div>
            <p className='p-5 text-2xl font-semibold'>{category.replaceAll("-", " ")}</p>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 px-7 py-5 gap-x-10 gap-y-10'>
            {
                loading ? (<Spinner type={"Loading, "}/>) :(
                posts.map((post, index) => (
                    <FoodCard key={index} post={post}/>
                )))
               } 
            </div>
        </div>

    </div>
    </div>
  )
}

export default FoodPage