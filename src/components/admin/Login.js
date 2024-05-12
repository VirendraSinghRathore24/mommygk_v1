import { collection, getDocs } from 'firebase/firestore';
import React, { useState } from 'react'
import { auth, db, googleProvider } from '../../config/firebase';
import { useDispatch } from 'react-redux';
import { addLogin } from '../../utils/redux/loginSlice';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner';
import {FcGoogle} from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const signInWithGoogle = async () => {
        try{
            setLoading(true);

            await signInWithPopup(auth, googleProvider);
            const code = auth?.currentUser?.email;
            console.log(code);
            //localStorage.setItem("currentUser", auth?.currentUser?.email);

            const loginCollectionRef = collection(db, "Login");
            const data = await getDocs(loginCollectionRef);

            const filteredData = data.docs.map((doc) => ({...doc.data(), id:doc.id}));
            const existingCode = filteredData[0].code;

            if(existingCode.includes(code))
            {
                dispatch(addLogin('Logged In'));
                navigate('/admin/dashboard');
            }
            else
            {
                alert("Unauthorized access, Please enter correct admin code !!!");
            }

            setLoading(false);
        }
        catch(err){
            console.log(err);
        }
    };

  return (
    <div className='p-10'>
    <h2 className='text-center font-semibold text-xl'>Login to get access for Admin Portal</h2>
        <div className=''>
        {
            loading ? (<Spinner/>) : (
                <div className='w-full md:w-3/12 mx-auto'>
                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-700 border border-richblack-700
            px-[12px] py-[8px] gap-x-2 mt-6 bg-yellow-300 hover:bg-green-300' onClick={signInWithGoogle}>
            
           <FcGoogle/>
            <p>Sign in with Google</p>
           </button>
           </div>)
        }
            
        </div>
       
    </div>
  )
}

export default Login