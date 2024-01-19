import React, { useEffect } from 'react'
import ProductCard from './ProductCard'

function ProofingChecklist() {
    useEffect(() => {
        window.scroll(0,0);
      }, []);
  return (
    <div className='w-10/12 mx-auto text-lg p-8 mt-4 '>
    <div className='text-3xl uppercase text-red-700 font-mono font-bold mb-8'>Baby Safety Items</div>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 place-items-center gap-y-10 gap-x-4 mb-10 mt-4'>
                <ProductCard url={'https://www.amazon.in/dp/B09R4DFWF9?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B09R4DFWF9&asc_item-id=amzn1.ideas.4KWEKW6457P6&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/babyproofing1.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B0BRD97JCN?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B0BRD97JCN&asc_item-id=amzn1.ideas.4KWEKW6457P6&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/babyproofing2.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B08XXLBR4S?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B08XXLBR4S&asc_item-id=amzn1.ideas.4KWEKW6457P6&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/babyproofing3.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B0829RL6Z5?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B0829RL6Z5&asc_item-id=amzn1.ideas.4KWEKW6457P6&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/babyproofing4.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B07MR8GP2C?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B07MR8GP2C&asc_item-id=amzn1.ideas.4KWEKW6457P6&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/babyproofing5.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B07NSQFTLH?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B07NSQFTLH&asc_item-id=amzn1.ideas.4KWEKW6457P6&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/babyproofing6.png'}/>
            </div>

  </div>
  )
}

export default ProofingChecklist