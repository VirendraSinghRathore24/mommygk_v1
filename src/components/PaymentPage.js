import React, { useEffect, useState } from 'react'
import { QRCode } from 'react-qrcode-logo';

function PaymentPage() {

  const [money, setMoney] = useState(1);
  const [isDone, setIsDone] = useState(false);
  const [name, setName] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    txnId : ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsDone(!isDone);
    
    // const postData = new FormData();
    // postData.append('email', formData.email);

    // axios.post(`${baseUrl}/subscribe`, postData);

    // toast.success("Thanks for the Subscribe !!!");
    
    // setFormData({
    //   email : ""
    // })
  };

  const handleSubmitTxn = (event) => {
    event.preventDefault();
    window.location.href = `/paymentverify?txnId=${formData.txnId}`
  };
  useEffect(() => {
    window.scroll(0,0);
  }, []);

  return (

    <div>
    {
        !isDone ? (
        <div className='my-10 flex justify-center'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col justify-center items-center p-8 gap-y-8 bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-2xl w-[360px]  border-2'>
                    <div className='text-md font-semibold'>Please fill to complete the payment : </div>
                    <div className='text-base text-center border-t pt-4 w-full'></div>
                    <input type="text" id="name" required="true" placeholder="Enter name..." value={formData.name} onChange={handleInputChange}  className="mb-2 w-72 border py-2 pl-2 pr-4 h-10 sm:mb-0 rounded-lg" name="name"/>
                    <input type="email" id="email" required="true" placeholder="Enter email..."  className="mb-2 w-72 border py-2 pl-2 pr-4 h-10 sm:mb-0 rounded-lg" name="email"/>
                    <input type="number" id="mobile" required="true" placeholder="Enter mobile number..."  className="mb-2 w-72 border py-2 pl-2 pr-4 h-10 sm:mb-0 rounded-lg" name="mobile"/>
                    <button type="submit" className="flex items-center justify-center h-10 bg-blue-600 text-white font-lg rounded-lg w-72">Continue</button>
                </div>
            </form>
        </div>) : (

    <div className='flex justify-evenly mb-10'>
    <div className='flex flex-col justify-center items-center mt-6 bg-bgDark bg-opacity-80 rounded-lg overflow-hidden shadow-2xl w-[360px] border-2'>
    <div className='text-lg font-semibold p-4 text-blue-600'>{formData.name}</div>
    <div className='text-base text-center border-t pt-4 w-full'></div>
    <div className='flex justify-between mb-2 gap-x-10'>
        <div className='font-semibold text-md'>Scan QR Code</div>
        <div className='text-md font-semibold'>₹ {money}.00</div>
    </div>
    
        <QRCode 
            value={`upi://pay?pa=sanju.shivarajput@okhdfcbank&am=${money}`}
            size="190"
            logoWidth="80"
            logoHeight="100"
            logoOpacity="0.6"
        />
        <div className='mt-2'>Scan with any UPI app</div>
        <div className='flex gap-x-2 justify-center items-center'>
            <img src="../../images/gpay.svg" alt="Logo" width={45} loading='lazy'/>
            <img src="../../images/phonepe.svg" alt="Logo" width={120} loading='lazy'/>
            <img src="../../images/paytm.svg" alt="Logo" width={55} loading='lazy'/>
        </div>
        <div className='text-base text-center border-t pt-4 w-full'></div>
    
    <form className='flex flex-col gap-y-4' onSubmit={handleSubmitTxn}>
        <div className='text-md font-semibold text-blue-600'>Please enter the transaction ID : </div>
        <input type="text" id="txnId1" required="true" placeholder="Enter Transaction ID..." value={formData.txnId} onChange={handleInputChange} className="mb-2 w-full border py-2 pl-2 pr-4 h-10 sm:mb-0 rounded-lg" name="txnId"/>
        <button type="submit" className="flex items-center justify-center h-10 bg-blue-600 text-white font-lg rounded-lg w-full">Submit</button>
        
        <div className='w-[300px] text-blue-500 mb-8'>In case of any issues, please send us an email to <span className='font-semibold text-black'>momofrudransh@gmail.com</span> or whatsapp on <span className='font-semibold text-black'>8310891550</span></div>
        
    </form>
    </div>
    </div>
    )}
    </div>
  )
}

export default PaymentPage