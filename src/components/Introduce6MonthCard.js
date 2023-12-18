import React from 'react'

function Introduce6MonthCard({post}) {
  return (
    <div className='flex flex-col gap-y-2 xs:ml-0 xs:mr-0 sm:ml-0 sm:mr-0 md:ml-8 md:mr-8 lg:ml-10 lg:mr-10 xl:ml-12 xl:mr-12 mt-6'>
    <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
   
    <div className="overflow-hidden">
                <table className="w-min-full text-left text-sm font-light">
                <thead className=" font-medium ">
                    <tr className='bg-orange-300 border-2 border-black'>
                    <th scope="col" className="px-1 py-2 border-r-2 border-black text-center ">Name</th>
                    <th scope="col" className="px-1 py-2 border-r-2 border-black text-center">How to Introduce</th>                    
                    </tr>
                </thead>
        <tbody>
        {
            post.map((p, index) => (
                        <tr className=" border-2 border-black">
                            <td className="whitespace-wrap text-[14px] font-medium px-1 py-2 border-r-2 border-black text-center ">{p.name}</td>
                            <td className="whitespace-wrap text-[14px] font-medium px-1 py-2 border-r-2 border-black text-center ">{p.detail}</td>
                        </tr>     
            ))      
           } 
           </tbody>
           </table>
        </div>
        </div>
        </div>
  )
}

export default Introduce6MonthCard