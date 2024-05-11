import React, { useEffect, useState } from 'react'
import InstaVideoCard from './InstaVideoCard'
import { CATEGORY_12_PLUS_MONTHS, CATEGORY_6_TO_12_MONTHS } from '../utils/contants';
import ShimmerUICard from './ShimmerUICard';

const InstaVideos = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [instaVideos, setInstaVideos] = useState([]);

  const fetchVideos = async() => {
    try
    {
        setLoading(true);

        const instaVideos = JSON.parse(localStorage.getItem('recipe-videos'));

        setInstaVideos(instaVideos);  
        setPosts(instaVideos);

        setLoading(false);
    }
    catch(er)
    {
       console.log(er);
    }
  }

  const handleClick = (category) => {
    
    setLoading(true);

    const posts = instaVideos.filter(x => x.category === category);    
    setPosts(posts);

    setLoading(false);
  }
  
  useEffect(() => {
    fetchVideos();
    window.scroll(0,0);
  },[]);

  return (
    <div className='w-full md:w-10/12 mx-auto text-lg p-8 mt-4'>
          <div className='text-3xl uppercase text-blue-700 font-mono font-bold mb-8 text-center'>Recipe Videos</div>
          <h3 class="mb-5 text-lg font-medium text-gray-900 text-center md:text-left">Get Recipe Videos By Age : </h3>
          <div >
<ul className="grid w-full gap-6 md:grid-cols-2 px-5 md:px-0">
    <li onClick={() => handleClick(CATEGORY_6_TO_12_MONTHS)}>
        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required />
        <label for="hosting-small" className="inline-flex items-center justify-between w-full p-5 text-gray-500 border border-gray-200 rounded-lg cursor-pointer  peer-checked:bg-green-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 bg-gray-700 hover:bg-green-500">                           
            <div className="block">
                <div className="w-full text-lg font-semibold text-white">6 to 12 Months</div>
            </div>
            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
    <li onClick={() => handleClick(CATEGORY_12_PLUS_MONTHS)}>
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" className="hidden peer"/>
        <label for="hosting-big" className="inline-flex items-center justify-between w-full p-5 text-gray-500 border border-gray-200 rounded-lg cursor-pointer  peer-checked:bg-green-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 bg-gray-700 hover:bg-green-500">
            <div className="block">
                <div className="w-full text-lg font-semibold text-white">12+ Months</div>
            </div>
            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
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