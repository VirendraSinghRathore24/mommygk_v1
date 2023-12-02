import React, { useEffect, useState } from 'react'
import baseUrl from '../baseUrl';

function Users7Month() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    async function fetchBlogsData(){
        setLoading(true);
        try{

            const result = await fetch(`${baseUrl}/getusers7month`);
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
        <div >
        
            <div className='flex flex-col gap-y-2 ml-1 mt-6 font-semibold'>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                        <th scope="col" className="px-1 py-2">#</th>
                        <th scope="col" className="px-4 py-2">City</th>
                        <th scope="col" className="px-4 py-2">State</th>
                        <th scope="col" className="px-2 py-2">Country</th>    
                        <th scope="col" className="px-2 py-2">Count</th>                     
                        </tr>
                    </thead>
            <tbody>
            {
                    posts.map((post, index) => (
                        
                            <tr className="border-b dark:border-neutral-500">
                                
                                <td className="whitespace-nowrap px-1 py-2 font-medium">{index + 1} .</td>
                                <td className="whitespace-wrap text-[16px] font-medium px-1 py-2">{post.city}</td>
                                <td className="whitespace-wrap text-[16px] font-medium px-1 py-2">{post.state}</td>
                                <td className="whitespace-wrap text-[16px] font-medium px-4 py-2">{post.country}</td>
                                <td className="whitespace-wrap text-[16px] font-medium px-4 py-2">{post.count}</td>
                                
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

export default Users7Month