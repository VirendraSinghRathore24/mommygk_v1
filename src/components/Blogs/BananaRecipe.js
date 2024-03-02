import React from 'react'
import "../YoutubeEmbed.css";
import YoutubeEmbed from "../YoutubeEmbed";
import '../google-poppins-font.css';

function BananaRecipe() {
  return (
    <div className='w-10/12 mx-auto googlefontpoppins py-3'>
        <div className='mt-12 text-4xl sm:text-4xl poppins-medium text-blue-600'>Banana puree for 6 Months Baby | How to prepare Banana puree for Baby  </div>
        <div className='mt-8'>
            <div className='text-xl mt-10'>Bananas are one of the best first foods for babies and highly recommended by doctors. The other best thing is you do not need to do a lot of preparation to do this. </div>
            <div className='flex justify-evenly mt-10'>
            <div className='mt-4 '>
            <div>
                <div className='text-2xl poppins-medium'>Ingredients:</div>
                <div className='p-4 text-xl'>1. Banana.</div>
            </div>
                <div className='text-2xl poppins-medium mt-4'>How to prepare the puree: </div>
            
                <div className='p-4 text-xl '>
                    <div>1. Take a fully cooked/Ripened Banana and mash it with the fork until it purees smoothly.</div>
                    <div>2. Thanks for all you need to do and it's ready to serve the baby.</div>
                    <div>3. Sereve the puree immediately to baby.</div>
                </div>
                </div>
                <div className='w-4/12 mx-auto'>
                <img src='../../../images/banana_puree.png' loading='lazy' alt='profile' className=' rounded-lg'/>
                </div>
            </div>
            <div className='text-2xl mt-6 poppins-medium'>Watch this video to see how to prepare: </div>
            <div className='mt-8'>
                    <YoutubeEmbed embedId='o7jowZawW0o' />
            </div>
        </div>
    </div>
  )
}

export default BananaRecipe