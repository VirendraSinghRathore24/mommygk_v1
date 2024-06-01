import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if(auth !== "Logged In")
    {
      navigate("/admin/login");
    }
  }, []);
  return (
    <div className='p-10 flex flex-col gap-y-6'>
        <div className='text-2xl font-semibold text-center'>Admin Dashboard</div>
        <Link className='text-blue-600 text-lg underline' to={'/insertblog'}>Add Blog</Link>
        <Link className='text-blue-600 text-lg underline' to={'/admin/addfoodvideo'}>Add Instagram Food Videos</Link>
        <Link className='text-blue-600 text-lg underline' to={'/admin/sendemail'}>Send email to all subscribers</Link>
    </div>
  )
}

export default Dashboard