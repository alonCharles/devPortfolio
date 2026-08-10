import { useContext, createContext, useEffect, useState, useCallback } from "react";
import supabase from "../config/supabaseClient";
import axios from "axios";

export const AuthContext = createContext(undefined)

export function AuthProvider  ({children})  {
const [status, setStatus] = useState('loading')
const [profile, setProfile] = useState(null)
const [session, setSession] = useState(null)


const loadProfile = async (token) => {
    try{
        const response = await axios.get('http://localhost:3000/api/profile', {
            headers:{
            Authorization: `Bearer ${token}`
          }
        })
        setProfile(response.data[0])
    } catch (err) {
        console.log('Profile Load Error:', err.response.message)
        setProfile(null)
    }
}

useEffect(() => {
    

        const {data:{subscription}} = supabase.auth.onAuthStateChange(
            async (_event, newSession) => {
                setSession(newSession)
                if(newSession){
                    await loadProfile(newSession.access_token)
                }else {
                setSession(null)
                 }
            } 
        )
        return () => subscription.unsubscribe()
},[])


const login = async (userCredentials) => {
    
      const response = await axios.post("http://localhost:3000/api/login",userCredentials);
      const data = response.data

      await supabase.auth.setSession({
        access_token: data.access_token,
        refresh_token:data.refresh_token
      })

}

const logout = async () => {
    console.log('logout running')
   try {
        const { data, error } = await supabase.auth.getSession()
        console.log(data)
        const token = data.session.access_token
        await supabase.auth.signOut()
        const response = await axios.post('http://localhost:3000/api/logout',null,{
            headers:{
            Authorization: `Bearer ${token}`
          }
        })
        const message = response.data 
        console.log(message.message)
    
   } catch(error){
    return error
   }
  }

  const value = {
    login,
    logout,
    profile,
    session,
  }
    

  return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>

}


