import React, { useEffect, useState } from 'react'
import baseUrl from '../baseUrl';

function UsersSpices() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    async function fetchBlogsData(){
        setLoading(true);
        try{

            const result = await fetch(`${baseUrl}/getusers6`);
            const data = await result.json();
            setPosts(data.data);
        }
        catch(err){
          console.log(err);
        }
        setLoading(false);
      }
      
      useEffect(() => {
        fetchBlogsData();
      },[]);


  return (

    
    <div>
    <div className='flex justify-center text-lg p-2 font-semibold'>
        Food Spices Chart data
    </div>
        <div >
        
            <div className='flex flex-col gap-y-2 ml-1 mt-6 font-semibold'>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                        <th scope="col" className="px-1 py-2 border-r-2 text-center">#</th>
                        <th scope="col" className="px-4 py-2 border-r-2 text-center">City</th>
                        <th scope="col" className="px-4 py-2 border-r-2 text-center">State</th>
                        <th scope="col" className="px-2 py-2 border-r-2 text-center">Country</th>    
                        <th scope="col" className="px-2 py-2 text-center">Count</th>                     
                        </tr>
                    </thead>
            <tbody>
            {
                    posts.map((post, index) => (
                        
                            <tr className="border-b dark:border-neutral-500">
                                
                                <td className="whitespace-nowrap px-1 py-2 font-medium border-r-2 text-center">{index + 1} .</td>
                                <td className="whitespace-wrap text-[16px] font-medium px-1 py-2 border-r-2 text-center">{post.city}</td>
                                <td className="whitespace-wrap text-[16px] font-medium px-1 py-2 border-r-2 text-center">{post.state === 'National Capital Territory of Delhi' ? 'Delhi' : post.state}</td>
                                <td className="whitespace-wrap text-[16px] font-medium px-4 py-2 border-r-2 text-center">{post.country}</td>
                                <td className="whitespace-wrap text-[16px] font-medium px-4 py-2 text-center">{post.count}</td>
                                
                            </tr>
                    ))
               
               } 
               </tbody>
               </table>
            </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default UsersSpices