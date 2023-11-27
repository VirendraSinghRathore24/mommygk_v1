import React from 'react'

function UserCard({id, ipaddress, count}) {
  return (
    <div className='flex gap-x-6 gap-y-6'>
                        <div>{id}</div>
                        <div>{ipaddress}</div>
                        <div>{count}</div>
    </div>
  )
}

export default UserCard