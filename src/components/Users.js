import React, { useEffect, useState } from 'react'
import baseUrl from '../baseUrl';
import Spinner from './Spinner';
import UserCard from './UserCard';

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
        <div className='p-5'>
        {
                loading ? (<Spinner type={"Loading, "}/>) :(
                users.map((user, index) => (
                    <UserCard key={index} id={index+1} ipaddress={user.ipaddress} count={user.count} />
                )))
        } 
           
        </div>
    </div>
  )
}

export default Users