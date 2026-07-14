import { useState, useEffect } from 'react'
import axios from 'axios'

export const UsersPage = () => {
    const [userData, setUserData] = useState()
      
      useEffect(()=>{
        axios.get('http://localhost:3000/api/users')
        .then((response)=>{
          setUserData(response.data)
        })
        .catch((error)=>{
          console.log(error)
        })
      },[])


      return(
        <>
            {
                userData? userData.map((user) => (
                    <div key={user.id}>
                        <h1>{user.first_name} {user.last_name}</h1>
                        <h3>{user.email}</h3>
                        <p>{user.role}</p>
                    </div>
                )) : <p>no users</p>
            }
        </>
      )
}