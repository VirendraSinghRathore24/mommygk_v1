import React, { useEffect, useState } from 'react'
import baseUrl from '../baseUrl';
import Spinner from './Spinner';

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const getData = async () => {
        
        const result = await fetch(`${baseUrl}/users`);
        const data = await result.json();
        setUsers(data.data);
       
      };

      useEffect(() => {
        getData();
      }, []);

  return (
    <div>
   <div>
    No of users
   </div>
        <div className='flex justify-center'>
        {
                loading ? (<Spinner type={"Loading, "}/>) :(
                users.map((user, index) => (
                    <div className='flex justify-center gap-x-6 gap-y-4'>
                       <div>{index+1}</div>
                        <div>{user.ipaddress}</div>
                        <div>{user.count}</div>
                    </div>
                )))
        } 
           
        </div>
    </div>
  )
}

export default Users