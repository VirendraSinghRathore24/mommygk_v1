import React from 'react';
import { useEffect, useState } from "react";
import data1 from '../data/food9monthhindi.json';
import FoodMonthsCard from './FoodMonthsCard';
import { Link } from 'react-router-dom';

function GeneratePdf() {
    const [posts, setPosts] = useState([]);
    const [firstWeek, setFirstWeek] = useState([]);
    const [bf, setBf] = useState([])
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);

 function fetchBlogsData(){
    try{

        const d = data1.filter(x => x.week === 'Week 4')
        console.log(d[0].details)


        for(var i = 0; i < 7; i++)
        {
            bf[i] = d[0].details[i].Reciepe1;
            lunch[i] = d[1].details[i].Reciepe1;
            dinner[i] = d[2].details[i].Reciepe1;
        }
     
        console.log(bf)
        console.log(lunch)
        console.log(dinner)
        const finalData = [{
            breakfast : bf,
            lunch : lunch,
            dinner : dinner
    }]
    console.log(finalData[0].lunch[0]);
        setFirstWeek(finalData[0]);

        setPosts(data1);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchBlogsData();
    window.scroll(0,0);
  }, []);


  function FoodMonthsCard1() {
    return (
      <div>
      <div >
      <p className='p-2 text-[16px]'></p>
          <div className='flex flex-col gap-y-2 ml-1 mt-6 font-semibold'>
          <div className="">
              <div className="">
              {
                 (<div className='w-[394px] text-center py-2  h-14 bg-[#ed7c30]  border-2 border-black'>
                    <div className='mt-1'>
                        Week 4
                    </div>
                 </div>) 
                 
              }
              
              <div className="overflow-hidden">
                  <table className="">
                  {
                     
  
                  (
                  
                  <thead className="">
                      <tr className='bg-[#f4b083] border-2 border-black'>
                      <th scope="col" className="px-1 py-2 border-r-2 border-black w-14 text-center">Day</th>
                      <th scope="col" className="px-1 py-2 border-r-2 w-28 border-black text-center text-blue-800 font-bold text-md">Breakfast</th>    
                      <th scope="col" className="px-1 py-2 border-r-2 w-28 border-black text-center text-blue-800 font-bold text-md">Lunch</th> 
                      <th scope="col" className="px-1 py-2 border-r-2 w-28 border-black text-center text-blue-800 font-bold text-md">Dinner</th>           
                      </tr>
                  </thead>)
                  } 
                   <tbody>
          {
              lunch.map((p, index) => (
               
                          <tr className={ index % 2 == 0 ? "border-2 border-black bg-[#fff2cc]" : "border-2 border-black bg-[#ffe698]"}>
                              <td className="whitespace-wrap text-[14px] font-bold px-1 py-2 border-r-2 border-black text-center bg-[#f4b083]">Day {index+1}</td>
                              <td className="whitespace-wrap text-[14px] font-medium px-1 py-2 border-r-2 border-black text-center ">{bf[index]}</td>
                              <td className="whitespace-wrap text-[14px] font-medium px-1 py-2 border-r-2 border-black text-center ">{lunch[index]}</td>
                              <td className="whitespace-wrap text-[14px] font-medium px-1 py-2 border-r-2 border-black text-center ">{dinner[index]}</td>
                             
                                  
                              {/* <td className='px-6 py-2 w-[40px] h-[40px] text-center'> 
                                 
                                  <img src="../../images/article.png" className='w-[35px] h-[35px] rounded-md' loading='lazy'/>
                                  
                              </td> */}
                              
                          </tr>     
              ))      
             }
             </tbody>
                   
          
             </table>
          </div>
          </div>
          </div>
          </div>
      </div></div>
    )
  }
  
  return (
    <div className='mb-10'>
    
      
                <div>
              
               

               
                <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 px-4 py-1 gap-x-10 gap-y-1'>
                {
                
                    <FoodMonthsCard1  />
               
                }
                </div>
                
                    
                </div>
    </div>
  )
}

export default GeneratePdf