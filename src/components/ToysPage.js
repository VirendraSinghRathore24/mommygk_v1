import React from 'react'
import { Link } from 'react-router-dom'

function ToysPage() {
  return (
    <div>
        <p className='p-2'><strong><Link to="/">Home</Link> </strong> / Toys</p>
        <div className='flex justify-center items-center'>
            <p>We will post content soon, Keep connected...</p>
        </div>
    </div>
  )
}

export default ToysPage