import React, { useEffect } from 'react'
import InstaVideoCard from './InstaVideoCard'
import { useSelector } from 'react-redux';
import { CATEGORY_12_PLUS_MONTHS, CATEGORY_6_TO_12_MONTHS } from '../utils/contants';

const InstaVideos = () => {
  const instaVideos = useSelector(st => st.insta.instaVideos);

  const posts = instaVideos.filter(x => x.category === CATEGORY_6_TO_12_MONTHS);
  posts.sort((a, b) => a.title[0] - b.title[0]);

  const posts1 = instaVideos.filter(x => x.category === CATEGORY_12_PLUS_MONTHS);

  useEffect(() => {
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