import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [userData, setUserData] = useState()
  const [newUser, setNewUser] = useState({
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    role:''
  })

  useEffect(()=>{
    axios.get('http://localhost:3000/api/users')
    .then((response)=>{
      setUserData(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  console.log(userData)

  const handleAdd = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.post('http://localhost:3000/api/users',newUser)
    } 
    catch (error){
        console.log(error)
    }
  }

  console.log(newUser)

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">
                <input type="text" name='first_name' onChange={handleAdd} value={newUser.first_name} placeholder="First Name"/>
            </label>
            <label htmlFor="lastName">
                <input type="text" name='last_name' onChange={handleAdd} value={newUser.last_name} placeholder="Last Name"/>
            </label>
            <label htmlFor="role">
                <input type="text" name='role' onChange={handleAdd} value={newUser.role} placeholder="Role"/>
            </label>
            <label htmlFor="email">
                <input type="email" name='email' onChange={handleAdd} value={newUser.email} placeholder=" Email"/>
            </label>
            <label htmlFor="password">
                <input type="password" name='password' onChange={handleAdd} value={newUser.password} placeholder="Password"/>
            </label>
            <button type='submit'>Add User</button>
        </form>
    </>
  )
}

export default App
