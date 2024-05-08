import { collection, getDocs } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../../config/firebase';
import { useDispatch } from 'react-redux';
import { addLogin } from '../../utils/redux/loginSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [code, setCode] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = async() => {
        // match code with existing db
        const loginCollectionRef = collection(db, "Login");
        const data = await getDocs(loginCollectionRef);

        const filteredData = data.docs.map((doc) => ({...doc.data(), id:doc.id}));
        const existingCode = filteredData[0].code;

        if(code !== existingCode)
        {
            alert("Unauthorized access, Please enter correct admin code !!!");
        }
        else{
            dispatch(addLogin('Logged In'));
            navigate('/admin/addfoodvideo');
        }
    }

  return (
    <div className='p-10'>
    <h2 className='text-center font-semibold text-xl'>Login to get access for Admin Portal</h2>
        <div className='flex justify-center p-10 gap-x-4'>
            <h2>Enter Code :</h2>
            <input required type='text' className='border-2 border-black rounded-md px-2' value={code} onChange={(e) => setCode(e.target.value)} />
            <button onClick={handleClick} className='text-lg px-4 py-1 bg-blue-600 rounded-lg text-white'>Login</button>
            
        </div>
       
    </div>
  )
}

export default Login