import { useState } from 'react'
import { AddUser } from './forms/AddUser'
import { LoginPage } from './pages/LoginPage'
import { UsersPage } from './pages/Users'

function App() {
  const [session, setSession] = useState({})


  const createSession = (sd) => {
      setSession(sd)
  }


  return (
    <>
        <AddUser/>
        {/* <UsersPage/> */}
        <LoginPage handleSession={createSession} />
        
    </>
  )
}

export default App
