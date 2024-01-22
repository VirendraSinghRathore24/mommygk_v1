import React, { useEffect } from 'react'
import ProductCard from './ProductCard'

function Toys() {
    useEffect(() => {
        window.scroll(0,0);
      }, []);
  return (
    <div className='w-10/12 mx-auto text-lg p-8 mt-4 '>
    <div className='text-3xl uppercase text-red-700 font-mono font-bold mb-8'>Baby Toys By Age</div>
        <div className='text-2xl uppercase text-red-700 font-mono font-bold '>6-12 Months</div>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 place-items-center gap-y-10 gap-x-4 mb-10 mt-4'>
                <ProductCard url={'https://www.amazon.in/dp/B081VM89M1?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B081VM89M1&asc_item-id=amzn1.ideas.1254Y8II0H5FN&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/6month1.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B09N3K9V44?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B09N3K9V44&asc_item-id=amzn1.ideas.1254Y8II0H5FN&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/6month2.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B0B49L799W?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B0B49L799W&asc_item-id=amzn1.ideas.1254Y8II0H5FN&ref_=aip_sf_list_spv_ofs_mixed_d_asin&th=1'} imageUrl={'../../images/6month3.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B077GQ9NW2?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B077GQ9NW2&asc_item-id=amzn1.ideas.1254Y8II0H5FN&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/6month4.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B074V7RRTG?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B074V7RRTG&asc_item-id=amzn1.ideas.1254Y8II0H5FN&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/6month5.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B01MSC4TXQ?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B01MSC4TXQ&asc_item-id=amzn1.ideas.1254Y8II0H5FN&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/6month6.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B0BS9BM9MH?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B0BS9BM9MH&asc_item-id=amzn1.ideas.1254Y8II0H5FN&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/6month7.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B00ADZULW4?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B00ADZULW4&asc_item-id=amzn1.ideas.1254Y8II0H5FN&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/6month8.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B00ADZUNYK?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B00ADZUNYK&asc_item-id=amzn1.ideas.1254Y8II0H5FN&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/6month9.png'}/>
            </div>
            <div className='text-2xl uppercase text-red-700 font-mono font-bold '>12+ Months</div>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 place-items-center gap-y-10 gap-x-4 mb-10 mt-4'>
                <ProductCard url={'https://www.amazon.in/dp/B0B975J4GT?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B0B975J4GT&asc_item-id=amzn1.ideas.27UZI465HMI3B&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/12months1.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B09WYF85K1?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B09WYF85K1&asc_item-id=amzn1.ideas.27UZI465HMI3B&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/12months2.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B09BJ91Z2N?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B09BJ91Z2N&asc_item-id=amzn1.ideas.STXIA7YLY14N&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/12months3.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B09CTRPSJR?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B09CTRPSJR&asc_item-id=amzn1.ideas.STXIA7YLY14N&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/12months4.png'}/>
            </div>
            <div className='text-2xl uppercase text-red-700 font-mono font-bold '>18+ Months</div>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 place-items-center gap-y-10 gap-x-4 mb-10 mt-4'>
                <ProductCard url={'https://www.amazon.in/dp/B093GTTG3B?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B093GTTG3B&asc_item-id=amzn1.ideas.2XZWEA1DZJVI8&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/15months1.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B0BW7PBS92?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B0BW7PBS92&asc_item-id=amzn1.ideas.2XZWEA1DZJVI8&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/15months2.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B0B19TDXBX?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B0B19TDXBX&asc_item-id=amzn1.ideas.2XZWEA1DZJVI8&ref_=aip_sf_list_spv_ons_mixed_d_asin'} imageUrl={'../../images/15months3.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B0B975J4GT?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B0B975J4GT&asc_item-id=amzn1.ideas.27UZI465HMI3B&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/12months1.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B07SYJXQTR?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B07SYJXQTR&asc_item-id=amzn1.ideas.2XZWEA1DZJVI8&ref_=aip_sf_list_spv_ons_mixed_d_asin'} imageUrl={'../../images/15months4.png'}/>
            </div>
            <div className='text-2xl uppercase text-red-700 font-mono font-bold '>Stroller, Panda, Car and  More</div>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 place-items-center gap-y-10 gap-x-4 mb-10 mt-4'>
                <ProductCard url={'https://www.amazon.in/dp/B0CDG7KVS5?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B0CDG7KVS5&asc_item-id=amzn1.ideas.3JCW80G6YQQ0B&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/s1.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B0CJHXSQJ8?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B0CJHXSQJ8&asc_item-id=amzn1.ideas.3JCW80G6YQQ0B&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/s2.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B00JJJIIE8?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B00JJJIIE8&asc_item-id=amzn1.ideas.3JCW80G6YQQ0B&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/s3.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B00JJI6QXO?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B00JJI6QXO&asc_item-id=amzn1.ideas.3JCW80G6YQQ0B&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/s4.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B074KG7KJW?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B074KG7KJW&asc_item-id=amzn1.ideas.3JCW80G6YQQ0B&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/s5.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B07ZT3LT44?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B07ZT3LT44&asc_item-id=amzn1.ideas.3JCW80G6YQQ0B&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/s6.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B0997BPRM2?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B0997BPRM2&asc_item-id=amzn1.ideas.3JCW80G6YQQ0B&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/s7.png'}/>
                <ProductCard url={'https://www.amazon.in/dp/B0BR5KN82R?linkCode=ssc&tag=onamzsanjuk03-21&creativeASIN=B0BR5KN82R&asc_item-id=amzn1.ideas.3JCW80G6YQQ0B&ref_=aip_sf_list_spv_ofs_mixed_d_asin'} imageUrl={'../../images/s8.png'}/>
            </div>
  </div>
  )
}

export default Toys