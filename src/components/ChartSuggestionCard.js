import React from 'react'
import { NavLink } from 'react-router-dom'

function ChartSuggestionCard({url, imageUrl, title}) {
  return (
    <div className='flex flex-col gap-y-10 p-8'>
                    <div className='flex'>
                    <div className='relative w-[280px] bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-lg pointer-events-auto '>
                        <NavLink to={`/${url}`}>
                        <img className='h-[300px]' src={imageUrl} loading='lazy' alt='image' ></img>
                        <div className='font-mono text-xl'>
                            <div className='absolute text-white bottom-4 px-4 text-left text-wrap bg-green-300 h-20 w-full'>
                                <p className='text-black font-bold text-center mt-6'>{title}</p>
                            </div>
                        </div>
                        </NavLink>
                    </div>
                    </div>
                </div>
  )
}

export default ChartSuggestionCard