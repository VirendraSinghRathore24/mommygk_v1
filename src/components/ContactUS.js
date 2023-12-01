import React from 'react';
import data from "../data/contactus.json"

function PrivacyPolicy() {
  return (
    <div className='p-5'>
        <div className='flex justify-center text-[24px] font-semibold'>Contact US</div>
        <div className="w-45 text-richblack-700 font-normal text-[17px] text-left py-3">
                {               
                    <span dangerouslySetInnerHTML={{__html: data[0].desc}} />
                }
        </div>
    </div>
  )
}

export default PrivacyPolicy