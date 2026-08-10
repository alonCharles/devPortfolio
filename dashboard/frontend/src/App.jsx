import { useState } from 'react'
import { AddUser } from './forms/AddUser'
import { LoginPage } from './pages/LoginPage'
import { UsersPage } from './pages/Users'
import { useAuth } from './hooks/useAuth'

function App() {
  const [session, setSession] = useState({})
const { logout } = useAuth()

  const createSession = (sd) => {
      setSession(sd)
  }
const handleLogout = () => {
  logout()
}

  return (
    <>
        <AddUser/>
        {/* <UsersPage/> */}
        <LoginPage handleSession={createSession} />
        <button onClick={logout}>Logout</button>
        
    </>
  )
}

export default App
