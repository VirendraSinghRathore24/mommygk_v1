import React from 'react'
import "../YoutubeEmbed.css";
import YoutubeEmbed from "../YoutubeEmbed";
import '../google-poppins-font.css';

function CarrotRecipe() {
  return (
    <div className='w-10/12 mx-auto googlefontpoppins py-3'>
        <div className='mt-12 text-4xl sm:text-4xl poppins-medium text-blue-600'>Carrot puree for 6 months Baby | How to prepare Carrot Puree for Baby  </div>
        <div className='mt-8'>
            <div className='text-xl mt-10'>Bananas are one of the best first foods for babies and highly recommended by doctors. The other best thing is you do not need to do a lot of preparation to do this. </div>
            <div className='mt-10'>
                    <div className='text-2xl poppins-medium'>Ingredients:</div>
                    <div className='p-4 text-xl'>1. Carrot.</div>
                </div>
            <div className='flex justify-evenly'>
            <div className=''>
                
                <div className='text-2xl poppins-medium mt-4'>How to prepare the carrot puree: </div>
            
                <div className='p-4 text-xl flex flex-col gap-y-2'>
                    <div>1. Wash and peel the carrot thoroughly and Cut the carrot into thin slices.</div>
                    <div>3. Take a steamer and cook the carrot until mashed easily.</div>
                    <div>4. Mash the steamed carrot or you can Griend if you want the puree.</div>
                    <div>5. Let the puree cool down completely before serving to baby.</div>
                    <div>6. This puree can be stored for 2-3 days in fridge in air-tight container but it's always best to prepare fresh.</div>
                    <div>7. You can adjust the consistency by adding formula milk/breastmilk or warm water.</div>
                </div>
                </div>
                <div className='w-4/12 mx-auto'>
                <img src='../../../images/carrot11.png' loading='lazy' alt='profile' className=' rounded-lg'/>
                </div>
            </div>
            <div className='text-2xl mt-6 poppins-medium'>Watch this video to see how to prepare: </div>
            <div className='mt-8'>
                    <YoutubeEmbed embedId='4S02boyMtWA' />
            </div>
        </div>
    </div>
  )
}

export default CarrotRecipe