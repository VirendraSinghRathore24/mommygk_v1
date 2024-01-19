import React, { useEffect } from 'react'
import ProductCard from './ProductCard'

function NewMomChecklist() {
    useEffect(() => {
        window.scroll(0,0);
      }, []);
  return (
    <div className='w-10/12 mx-auto text-lg p-8 mt-4 '>
    <div className='text-3xl uppercase text-red-700 font-mono font-bold mb-8'>New Mom Checklist</div>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 place-items-center gap-y-10 gap-x-4 mb-10 mt-4'>
                <ProductCard url={'https://www.amazon.in/dp/B004X7545M?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B004X7545M&asc_item-id=amzn1.ideas.2J0J72BX3UILO&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/newmom1.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B097DW8XTF?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B097DW8XTF&asc_item-id=amzn1.ideas.2J0J72BX3UILO&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/newmom2.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B09R4GQN6Y?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B09R4GQN6Y&asc_item-id=amzn1.ideas.2J0J72BX3UILO&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/newmom3.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B09FJPG7G5?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B09FJPG7G5&asc_item-id=amzn1.ideas.2J0J72BX3UILO&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/newmom4.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B0B57CQMLV?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B0B57CQMLV&asc_item-id=amzn1.ideas.2J0J72BX3UILO&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/newmom5.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B07P14F4DZ?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B07P14F4DZ&asc_item-id=amzn1.ideas.2J0J72BX3UILO&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/newmom6.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B08C4SVKXS?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B08C4SVKXS&asc_item-id=amzn1.ideas.2J0J72BX3UILO&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/newmom7.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B07C6DZKN7?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B07C6DZKN7&asc_item-id=amzn1.ideas.2J0J72BX3UILO&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/newmom8.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B091L8J6GF?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B091L8J6GF&asc_item-id=amzn1.ideas.2J0J72BX3UILO&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/newmom9.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B0BP52F63D?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B0BP52F63D&asc_item-id=amzn1.ideas.2J0J72BX3UILO&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/newmom10.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B07GQ55SZ3?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B07GQ55SZ3&asc_item-id=amzn1.ideas.2J0J72BX3UILO&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/newmom11.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B07DMKJJB4?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B07DMKJJB4&asc_item-id=amzn1.ideas.2J0J72BX3UILO&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/newmom12.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B076G6NQVQ?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B076G6NQVQ&asc_item-id=amzn1.ideas.2J0J72BX3UILO&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/newmom13.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B08QTK3NTL?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B08QTK3NTL&asc_item-id=amzn1.ideas.2J0J72BX3UILO&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/newmom14.png'}/>
            </div>

  </div>
  )
}

export default NewMomChecklist