import React, { useEffect } from 'react'
import { NavLink, useLocation, useSearchParams } from 'react-router-dom'

function PaymentVerifyPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const txnId = searchParams.get('txnId');

    useEffect(() => {
        window.scroll(0,0);
      }, []);
  return (
    <div className='text-xl flex flex-col items-center my-10 '>
        <div className='text-4xl font-semibold'>Thank you !!!</div>
        <div className='mt-10'>Transaction ID : {txnId}</div>
        
        <img src="../../images/righttick.webp" alt="Logo" width={300} loading='lazy'/>
        <div className='text-center '>We will verify the transaction id and send you an email confirmation. Have patience, it may take upto 2 days.</div>
        <div className='mt-5 p-2'>In case of emergency, please contact us on </div>
        <div>Email : <span className='font-semibold'>momofrudransh@gmail.com</span></div>
        <div>Whatsapp : <span className='font-semibold'> 8310891550 </span></div>
        <div className='mt-5 text-xl text-blue-600 font-semibold underline'>
            <NavLink to={'/'}>Go back to Home</NavLink>
        </div>
    </div>
  )
}

export default PaymentVerifyPage