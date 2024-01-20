import React, { useEffect } from 'react'
import ProductCard from './ProductCard'

function InstaReels() {
    useEffect(() => {
        window.scroll(0,0);
      }, []);
  return (
    <div className='w-10/12 mx-auto text-lg p-8 mt-4 '>
    <div className='text-3xl uppercase text-red-700 font-mono font-bold mb-8'>Baby Eating Items</div>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 place-items-center gap-y-10 gap-x-4 mb-10 mt-4'>
                <ProductCard url={'https://www.amazon.in/dp/B078NCJZ32?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B078NCJZ32&asc_item-id=amzn1.ideas.2QUS8PMDHPK5I&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/insta1.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B0B1X2M3DZ?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B0B1X2M3DZ&asc_item-id=amzn1.ideas.2QUS8PMDHPK5I&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/insta2.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B07HY9Q6LB?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B07HY9Q6LB&asc_item-id=amzn1.ideas.2QUS8PMDHPK5I&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/insta3.png'}/>
            </div>

  </div>
  )
}

export default InstaReels