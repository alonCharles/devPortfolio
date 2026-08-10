import { useEffect, useState } from "react";
import axios from 'axios'
import supabase from '../config/supabaseClient'
import { useAuth } from "../hooks/useAuth";


export const LoginPage = ({handleSession }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const { login, profile } = useAuth()
  

  const handleLoginData = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(loginData)

    } catch (error) {
        console.log("Status:", error.response?.status);
        console.log("Server said:", error.response?.data);
    }
     
console.log(profile)
    setLoginData({
      email: "",
      password: ""
    });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          onChange={handleLoginData}
          value={loginData.email}
          placeholder=" Email"
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          name="password"
          onChange={handleLoginData}
          value={loginData.password}
          placeholder="Password"
        />
      </label>
      <button type="submit" >Login </button>
    </form>
  
    </>
    
  );
};
