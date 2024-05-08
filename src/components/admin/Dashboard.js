import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='p-10 flex flex-col gap-y-6'>
        <div className='text-2xl font-semibold text-center'>Admin Dashboard</div>
        <Link className='text-blue-600 text-lg underline' to={'/admin/addfoodvideo'}>Add Instagram Food Videos</Link>
        <Link className='text-blue-600 text-lg underline' to={'/admin/sendemail'}>Send email to all subscribers</Link>
    </div>
  )
}

export default Dashboard