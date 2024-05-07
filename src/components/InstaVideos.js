import React, { useEffect, useState } from 'react'
import InstaVideoCard from './InstaVideoCard'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const InstaVideos = () => {

  const [posts, setPosts] = useState([]);
  const [posts1, setPosts1] = useState([]);

  const foodVideosCollectionRef = collection(db, "FoodVideos");

  const getData =  async() => {
    const data = await getDocs(foodVideosCollectionRef);
    const filteredData = data.docs.map((doc) => ({...doc.data(), id:doc.id}));
   
    // 6 to 12 Months
    const data1 = filteredData.filter(x => x.category === '6 to 12 Months');
    data1.sort((a, b) => a.title[0] - b.title[0]);
    setPosts(data1);

    // 12+ Months
    const data2 = filteredData.filter(x => x.category === '12+ Months');
    setPosts1(data2);
  }

  useEffect(() => {
    getData();
    window.scroll(0,0);
  },[]);
  return (
    <div className='w-full md:w-10/12 mx-auto text-lg p-8 mt-4'>
          <div className='text-3xl uppercase text-red-700 font-mono font-bold mb-8 text-center'>Recipe Videos 6 to 12 Months</div>
       
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 place-items-center gap-y-10 gap-x-4 mb-10 mt-4'>
            {
              posts.map((post) => (
                <InstaVideoCard url={post.InstaUrl} imageUrl={post.imageUrl} title={post.title}/>
              ))
            }
            </div>
            {
              posts1.length > 0 && (<div>
              <div className='text-3xl uppercase text-red-700 font-mono font-bold mb-8 text-center'>Recipe Videos 12+ Months</div>
              <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 place-items-center gap-y-10 gap-x-4 mb-10 mt-4'>
              {
                posts1.map((post) => (
                  <InstaVideoCard url={post.InstaUrl} imageUrl={post.imageUrl} title={post.title}/>
                ))
              }
              </div>
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