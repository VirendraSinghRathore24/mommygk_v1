import React, { useEffect, useState } from 'react'
import baseUrl from '../../baseUrl';
import Spinner from '../Spinner';


function Subscribers() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchBlogsData(){
        setLoading(true);
        try{
  

          
          const result = await fetch(`${baseUrl}/getsubscribers`);
          const data = await result.json();

          console.log(data.data);
           
          setPosts(data.data);
  
        }
        catch(err){
          console.log(err);
        }
        setLoading(false);
      }

    useEffect(() => {
        window.scroll(0,0);
        fetchBlogsData();
      }, []);

  return (
    <div className='py-10'>
       <p className='text-center text-2xl font-semibold text-blue-600'>Subscribers</p>
       <div className="overflow-hidden mt-10 p-2">
       <table className="w-full sm:w-10/12 mx-auto text-left text-sm font-light">
                
                <thead className="font-medium ">
                    <tr className='bg-orange-300 border-2 border-black text-blue-800 font-bold text-xl'>
                    <th scope="col" className="px-1 py-2 border-r-2 text-center">#</th>
                    <th scope="col" className="px-1 py-2  text-center border-r-2 border-black" >Email</th>
                    </tr>
                </thead>

                    <tbody>
                {
                    loading ? (<div className='ml-10 sm:ml-96 mt-10 sm:mt-20'><Spinner/> </div>) : (
                    posts.map((p, index) => (
                        
                        <tr className="border-2 border-black ">
                            <td className="whitespace-wrap text-[12px] font-medium px-1 py-2 border-r-2  align-baseline text-center text-wrap">{index+1}</td>
                            <td className="whitespace-wrap text-[12px] font-medium px-1 py-2 border-r-2 align-baseline text-center break-all text-wrap border-black">{p.email}</td>
                        </tr>)
            ))      
           } 
           </tbody> 
            
           </table>
       </div> 
       
    </div>
  )
}

export default Subscribers