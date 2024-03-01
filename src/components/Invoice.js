import React from 'react'

function Invoice() {
  return (
    <div className='w-6/12 mx-auto mt-20 py-10 border-2 p-5 mb-10'>
    <div>
        <div className='flex justify-between'>
            <div className=' flex flex-col justify-start '>
                <div className='text-gray-500 font-bold text-lg'>From</div>
                <div className='font-bold text-lg'>Sanju Kanwar</div>
            </div>
        
            <div className='font-bold text-xl'>INVOICE</div>
        </div>
        <div className='mt-10 flex justify-between'>
            <div>
                <div className='uppercase text-gray-500 font-bold'>Invoice To :</div>
                <div className='font-bold'>Clean Nutrition Private Limited</div>
                <div className='font-bold'>GSTIN : 07AAKCC9720E1ZN</div>
            </div>
            <div className='font-bold'>
                <div>Date : 01-03-2024</div>
                <div>Invoice No : IN01</div>
            </div>
            
        </div>
        <div className='flex justify-between mt-10 border-2 bg-rose-500 p-2 text-white text-lg font-bold'>
                <div className='flex gap-x-4'>
                    <div>No</div>
                    <div className='ml-2'>Description</div>
                </div>
                <div className='mr-4'>
                    Price
                </div>
        </div>
        <div className='flex justify-between mt-1 text-lg'>
                <div className='flex gap-x-4'>
                    <div className='ml-2'>1</div>
                    <div className='ml-6'>Collaboration Service</div>
                </div>
                <div>
                    3530 INR
                </div>
        </div>
        </div>
        <div className='flex justify-end items-end'>
            <div className=' mt-4 bg-rose-500 p-2 uppercase text-white text-lg font-bold'>Total : 3530 INR</div>
        </div>
        <div className='flex justify-end mt-4 font-bold text-lg'>Thank you for businees with me!</div>
        <div className='font-bold text-lg mt-4'>Bank Details :</div>
        <div className='font-bold text-lg mt-4'>
            <div>Bank Name : HDFC BANK</div>
            <div>Name : Sanju Kanwar</div>
            <div>Account Number : 28381140001007</div>
            <div>Account Type : Saving</div>
            <div>IFSC Code : HDFC0002838</div>
        </div>
        <div className='flex justify-end mt-4 font-bold text-lg'>
            <div>
                <div>Regards,</div>
                <div>Sanju Kanwar</div>
            </div>
        </div>
    </div>
  )
}

export default Invoice