import React, { useEffect, useState } from 'react'
import Spinner from "../components/Spinner"
import Card from './Card';
import './Page1.css'
import "./YoutubeEmbed.css";

function Page1() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchBlogsData(){
        setLoading(true);
        try{
          const data = JSON.parse(localStorage.getItem('main-page'));
          setPosts(data);
        }
        catch(err){
          console.log(err);
        }
        setLoading(false);
      }
      
      useEffect(() => {
         fetchBlogsData();
      },[])

  return (
    <div className='mx-auto'>
        <div className=''>
            <div>
                {/* <p className='text-md font-light py-3 px-2 text-center'><strong className='text-xl font-extrabold googlefont text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-700 to-lime-800'>There is no better feeling in the world than holding your precious child.</strong></p> */}
            </div>
            <div className='flex justify-evenly mb-10 mt-8'>
            {
                loading ? (<Spinner type={"Loading, "}/>) :(
                posts.map((post, index) => (
                    <Card key={post.title} post={post}/>
                )))
               } 
            </div>
        </div>
    </div>
  )
}

export default Page1