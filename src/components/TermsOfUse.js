import React, { useEffect } from 'react';
import data from "../data/termsofuse.json"

function TermsOfUse() {
    useEffect(() => {
        window.scroll(0,0);
      }, []);
  return (
    <div className='p-5 font-mono'>
        <div className='flex justify-center text-[24px] font-semibold'>Terms of Use</div>
        <div className="w-45 text-richblack-700 font-normal text-[17px] text-left py-3">
                {               
                    <span dangerouslySetInnerHTML={{__html: data[0].desc}} />
                }
        </div>
    </div>
  )
}

export default TermsOfUse