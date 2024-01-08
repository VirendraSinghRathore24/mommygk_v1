import React from 'react'

function FoodMonthsCard({post, week, time, color, video}) {
  return (
    <div>
    <div >
    <p className='p-2 text-[16px]'></p>
        <div className='flex flex-col gap-y-2 ml-1 mt-6 font-semibold'>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            {
                color === 1 ? (<div className='inline-block min-w-full text-center py-2 h-14 bg-lime-300 border-2 border-black'>{week}</div>) :
                color === 2 ? (<div className='inline-block min-w-full text-center py-2 h-14 bg-yellow-400 border-2 border-black'>{week}</div>) :
                color === 3 ? (<div className='inline-block min-w-full text-center py-2 h-14 bg-red-300 border-2 border-black'>{week}</div>) :
                              (<div className='inline-block min-w-full text-center py-2 h-14 bg-sky-500 border-2 border-black'>{week}</div>)
            }
            
            <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                {
                    video ? (
                
                <thead className=" font-medium ">
                    <tr className='bg-orange-300 border-2 border-black'>
                    <th scope="col" className="px-1 py-2 border-r-2 text-center">Day</th>
                    <th scope="col" className="px-1 py-2 border-r-2 text-center text-blue-800 font-bold text-xl">{time}</th>
                    <th scope="col" className="px-6 py-2  text-center" >Video</th>
                    </tr>
                </thead>) :

                (
                
                <thead className=" font-medium ">
                    <tr className='bg-orange-300 border-2 border-black'>
                    <th scope="col" className="px-1 py-2 border-r-2 text-center">Day</th>
                    <th scope="col" className="px-1 py-2 border-r-2 border-black text-center text-blue-800 font-bold text-xl">{time}</th>              
                    </tr>
                </thead>)
                } 
                 {
                    video ? (<tbody>
        {
            post.map((p, index) => (
                        <tr className=" border-2 border-black">
                            <td className="whitespace-wrap text-[14px] font-medium px-1 py-2 border-r-2 text-center">{p.day}</td>
                            <td className="whitespace-wrap text-[14px] font-medium px-1 py-2 border-r-2 text-center ">
                                {
                                    
                                    p.youtubelink ? (<div className='text-blue-600 underline'><a href={p.youtubelink} target="_blank" rel="noreferrer">
                                    {p.Reciepe1}
                                </a></div>) : (<div>{p.Reciepe1}</div>)
                                }
                                
                            </td>
                           
                                <td className='px-6 py-2 w-[20px] h-[20px] text-center'> 
                                {
                                    p.youtubelink ? (<a href={p.youtubelink} target="_blank" rel="noreferrer">
                                    <img src="../../images/youtube.png" className='w-[35px] h-[35px] rounded-md' loading='lazy'/>
                                    </a>) : (<div></div>)
                                }
                            
                                
                            </td>
                            {/* <td className='px-6 py-2 w-[40px] h-[40px] text-center'> 
                               
                                <img src="../../images/article.png" className='w-[35px] h-[35px] rounded-md' loading='lazy'/>
                                
                            </td> */}
                            
                        </tr>     
            ))      
           } 
           </tbody> ) : (<tbody>
        {
            post.map((p, index) => (
                        <tr className=" border-2 border-black">
                            <td className="whitespace-wrap text-[14px] font-medium px-1 py-2 border-r-2 text-center">{p.day}</td>
                            <td className="whitespace-wrap text-[14px] font-medium px-1 py-2 border-r-2 border-black text-center ">
                                {
                                    
                                    p.youtubelink ? (<div className='text-blue-600 underline'><a href={p.youtubelink} target="_blank" rel="noreferrer">
                                    {p.Reciepe1}
                                </a></div>) : (<div>{p.Reciepe1}</div>)
                                }
                                
                            </td>
                           
                                
                            {/* <td className='px-6 py-2 w-[40px] h-[40px] text-center'> 
                               
                                <img src="../../images/article.png" className='w-[35px] h-[35px] rounded-md' loading='lazy'/>
                                
                            </td> */}
                            
                        </tr>     
            ))      
           } 
           </tbody>)
                 }
        
           </table>
        </div>
        </div>
        </div>
        </div>
    </div></div>
  )
}

export default FoodMonthsCard