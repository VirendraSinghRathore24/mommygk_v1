import React, { useEffect } from 'react'
import InstaVideoCard from './InstaVideoCard'

const InstaVideos = () => {

  useEffect(() => {
    window.scroll(0,0);
  },[]);
  return (
    <div className='w-full md:w-10/12 mx-auto text-lg p-8 mt-4'>
    <div className='text-3xl uppercase text-red-700 font-mono font-bold mb-8 text-center'>Recipe Videos 6 to 12 Months</div>
       
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 place-items-center gap-y-10 gap-x-4 mb-10 mt-4'>
                <InstaVideoCard url={'https://www.instagram.com/p/CuXI-royHl1/'} imageUrl={'../../images/insta/6monthpart1.png'} title={'6 Month - Part 1'}/>
                <InstaVideoCard url={'https://www.instagram.com/p/CuhbiOTy450/'} imageUrl={'../../images/insta/6monthpart2.png'} title={'6 Month - Part 2'}/>
                <InstaVideoCard url={'https://www.instagram.com/p/C1bO42oS8I9/'} imageUrl={'../../images/insta/6monthpart3.png'} title={'6 Month - Part 3'}/>
                <InstaVideoCard url={'https://www.instagram.com/p/Cvz0ZDQyKPb/'} imageUrl={'../../images/insta/7monthpart1.png'} title={'7 Month - Part 1'}/>
                <InstaVideoCard url={'https://www.instagram.com/p/CxqSr6-yGzD/'} imageUrl={'../../images/insta/8monthpart1.png'} title={'8 Month - Part 1'}/>
              </div>
  </div>
  )
}

export default InstaVideos