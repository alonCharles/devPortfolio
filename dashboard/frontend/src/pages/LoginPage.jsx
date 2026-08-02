import { useEffect, useState } from "react";
import axios from 'axios'
import supabase from '../config/supabaseClient'


export const LoginPage = ({handleSession }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  

  const handleLoginData = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const logout = async () => {
   
  }


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/login",loginData);
      console.log(response)
      const data = response.data
      handleSession(data.access_token, data.refresh_token)

      await supabase.auth.setSession({
        access_token: data.access_token,
        refresh_token:data.refresh_token
      })

      

    } catch (error) {
      console.log(error);
    }
     

    setLoginData({
      email: "",
      password: ""
    });
  };

  return (
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
      <button onClick={logout} >logout</button>
    </form>
    
  );
};
