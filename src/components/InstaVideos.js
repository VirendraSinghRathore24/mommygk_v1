import React, { useEffect, useState } from 'react'
import InstaVideoCard from './InstaVideoCard'
import { CATEGORY_12_PLUS_MONTHS, CATEGORY_6_TO_12_MONTHS } from '../utils/contants';
import ShimmerUICard from './ShimmerUICard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const InstaVideos = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [instaVideos, setInstaVideos] = useState([]);

  const fetchVideos = async() => {
    try
    {
        setLoading(true);

        const foodVideosCollectionRef = collection(db, "FoodVideos");
    
        const data = await getDocs(foodVideosCollectionRef);
        const instaVideos = data.docs.map((doc) => ({...doc.data(), id:doc.id}));

        setInstaVideos(instaVideos);
    
        // const posts = instaVideos.filter(x => x.category === CATEGORY_6_TO_12_MONTHS);    
        setPosts(instaVideos);
    
        // const posts1 = instaVideos.filter(x => x.category === CATEGORY_12_PLUS_MONTHS);
        // setPosts1(posts1);
        setLoading(false);
    }
    catch(er)
    {
       console.log(er);
    }
  }

  const handleClick = (category) => {
    const posts = instaVideos.filter(x => x.category === category);    
    setPosts(posts);
  }
  
  useEffect(() => {
    fetchVideos();
   
    console.log('data')
    window.scroll(0,0);
  },[]);

  return (
    <div className='w-full md:w-10/12 mx-auto text-lg p-8 mt-4'>
          <div className='text-3xl uppercase text-blue-700 font-mono font-bold mb-8 text-center'>Recipe Videos</div>
          <h3 class="mb-5 text-lg font-medium text-gray-900">Get Recipe Videos By Age : </h3>
          <div >
<ul class="grid w-full  gap-6 md:grid-cols-2 ">
    <li onClick={() => handleClick(CATEGORY_6_TO_12_MONTHS)}>
        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:bg-green-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="block">
                <div class="w-full text-lg font-semibold text-white">6 to 12 Months</div>
            </div>
            <svg class="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
    <li onClick={() => handleClick(CATEGORY_12_PLUS_MONTHS)}>
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
        <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:bg-green-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="block">
                <div class="w-full text-lg font-semibold text-white">12+ Months</div>
            </div>
            <svg class="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
</ul>

      </div>
            {
              loading ? (<ShimmerUICard/>) : (<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 place-items-center gap-y-10 gap-x-4 mb-10 mt-8'>
            {
              posts.map((post) => (
                <InstaVideoCard url={post.InstaUrl} imageUrl={post.imageUrl} title={post.title}/>
              ))
            }
            </div>)
            }
            

                {/* <InstaVideoCard url={'https://www.instagram.com/p/CuXI-royHl1/'} imageUrl={'../../images/insta/6monthpart1.webp'} title={'6 Month - Part 1'}/>
                <InstaVideoCard url={'https://www.instagram.com/p/CuhbiOTy450/'} imageUrl={'../../images/insta/6monthpart2.webp'} title={'6 Month - Part 2'}/>
                <InstaVideoCard url={'https://www.instagram.com/p/C1bO42oS8I9/'} imageUrl={'../../images/insta/6monthpart3.webp'} title={'6 Month - Part 3'}/>
                <InstaVideoCard url={'https://www.instagram.com/p/Cvz0ZDQyKPb/'} imageUrl={'../../images/insta/7monthpart1.webp'} title={'7 Month - Part 1'}/>
                <InstaVideoCard url={'https://www.instagram.com/p/CxqSr6-yGzD/'} imageUrl={'../../images/insta/8monthpart1.webp'} title={'8 Month - Part 1'}/> */}
              
  </div>
  )
}

export default InstaVideos