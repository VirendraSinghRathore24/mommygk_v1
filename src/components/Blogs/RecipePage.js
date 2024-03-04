import React, { useEffect, useState } from 'react'
import "../YoutubeEmbed.css";
import YoutubeEmbed from "../YoutubeEmbed";
import '../google-poppins-font.css';
import data from '../../data/recipes.json';
import { Link, useLocation } from 'react-router-dom';

function RecipePage() {
    const [post, setPost] = useState([]);

    const location = useLocation();
    const recipeName = location.pathname.split("/").at(-1);

     function fetchBlogsData(){
        try{
            
          const data1 = data.filter((x) => x.name.toLowerCase() === recipeName);
          console.log(data1[0]);

            setPost(data1[0]);
        }
        catch(err){
          console.log(err);
        }
      }
    
      useEffect(() => {
        fetchBlogsData();
        window.scroll(0,0);
      }, []);

  return (
    <div>
    <p className='p-2'><strong><Link to="/">Home</Link> </strong> / <strong><Link to="/baby-food-recipes">6 Month Baby Food Recipes</Link> </strong> / {post.name} </p>
    <div className='w-full sm:w-10/12 mx-auto googlefontpoppins py-3 p-5'>
    
        <div className='mt-12 text-3xl sm:text-4xl poppins-regular text-blue-600 text-center sm:text-left'>{post.title}</div>
        <div className='mt-8'>
            <div className='text-xl mt-10'>{post.desc} </div>
            <div className='flex flex-wrap justify-between mt-10 gap-y-4'>
              <div className='mt-4 w-full md:w-9/12 mx-auto'>
                    <div>
                        <div className='text-2xl poppins-medium'>Ingredients:</div>
                        <div className='p-4 text-xl'>{post.ingredients}</div>
                    </div>

                    <div className='text-2xl poppins-medium mt-4'>{post.desc2}</div>
                    
                    <div className='p-4 text-xl'><span dangerouslySetInnerHTML={{__html: post.desc3}} /></div>
              </div>

                <div className='w-full sm:w-3/12 mx-auto flex justify-center mb-10'>
                    <img src={post.img1} loading='lazy' alt='profile' className='w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-lg'/>
                </div>
            </div>
            {
              post.youtubelink ? (
                <div>
                  <div className='text-2xl mt-6 poppins-medium'>{post.desc4}</div>
                  <div className='mt-8'>
                    <YoutubeEmbed embedId={post.youtubelink} />
                  </div>
                </div>) : 
                (<div></div>)
            }
            
        </div>
    </div>
    </div>
  )
}

export default RecipePage