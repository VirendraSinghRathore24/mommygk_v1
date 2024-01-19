import React, { useEffect } from 'react'
import ProductCard from './ProductCard'

function Toys() {
    useEffect(() => {
        window.scroll(0,0);
      }, []);
  return (
    <div className='w-10/12 mx-auto text-lg p-8 mt-4  '>
        <div className='text-3xl uppercase text-red-700 font-mono font-bold '>Baby Toys by age</div>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 place-items-center gap-y-10 gap-x-4 mb-10 mt-4'>
                <ProductCard url={'https://www.amazon.in/shop/mommygk_sanju/list/1254Y8II0H5FN?tag=onamzsanjuk03-21&ref_=aip_sf_list_spv_ofs_mixed_d'} imageUrl={'../../images/toys6to12.png'}/>
                <ProductCard url={'https://www.amazon.in/shop/mommygk_sanju/list/27UZI465HMI3B?tag=onamzsanjuk03-21&ref_=aip_sf_list_spv_ofs_mixed_d'} imageUrl={'../../images/12monthstoys.png'}/>
                <ProductCard url={'https://www.amazon.in/shop/mommygk_sanju/list/2XZWEA1DZJVI8?tag=onamzsanjuk03-21&ref_=aip_sf_list_spv_ofs_mixed_d'} imageUrl={'../../images/halfyeartoys.png'}/>
                <ProductCard url={'https://www.amazon.in/shop/mommygk_sanju/list/STXIA7YLY14N?tag=onamzsanjuk03-21&ref_=aip_sf_list_spv_ofs_mixed_d'} imageUrl={'../../images/1yeartoys.png'}/>
                <ProductCard url={'https://www.amazon.in/shop/mommygk_sanju/list/3JCW80G6YQQ0B?tag=onamzsanjuk03-21&ref_=aip_sf_list_spv_ofs_mixed_d'} imageUrl={'../../images/panda.png'}/>
                <ProductCard url={'https://www.amazon.in/shop/mommygk_sanju/list/3SKMXHQGH0NT?tag=onamzsanjuk03-21&ref_=aip_sf_list_spv_ofs_mixed_d'} imageUrl={'../../images/books.png'}/>
            </div>
  </div>
  )
}

export default Toys