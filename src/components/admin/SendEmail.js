import axios from 'axios'
import React, { useState } from 'react'
import baseUrl from '../../baseUrl';
import { toast } from 'react-toastify';
import Spinner from '../Spinner';

const SendEmail = () => {
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            setLoading(true);
        
            const postData = new FormData();
            postData.append('subject', subject);
            postData.append('message', message);

            await axios.post(`${baseUrl}/sendemail`, postData);

            setLoading(false);
            toast.success(`Email sent to all the subscribers`, {position: "top-center"});

            setMessage('');
            setSubject('');
    }
    catch(ex)
    {
        console.log(ex);
    }

    }

  return (
    <div>
        <h1 className='text-blue-600 text-2xl font-bold text-center p-6'>Broadcaste New Updates to all Subscribers</h1>
        {
            loading ? <Spinner/> : (
        <form onSubmit={handleSubmit}>
            <div className='w-5/12 mx-auto m-6'>
            <div className=' '>
                <input placeholder='Enter Subject Here ...' value={subject} onChange={(e) => setSubject(e.target.value)}  className='w-full mb-4 rounded-lg px-2 py-2 border-2 border-blue-300'></input>
            </div>
            <div className=' '>
                <textarea type='textarea' placeholder='Enter New Update Here ...' value={message} onChange={(e) => setMessage(e.target.value)}  className='w-full h-[300px] rounded-lg px-2 py-2 border-2 border-blue-300'></textarea>
            </div>
            <div className='flex justify-end w-full mx-auto gap-x-4'>
                <button type='submit' className='text-lg bg-green-600 px-10 py-1 rounded-lg text-white mt-4 font-bold'>Send</button>
            </div>
            </div>
        </form>
        )
        }
    </div>
  )
}

export default SendEmail