import { useState } from "react";
import axios from "axios";
import supabase from "../config/supabaseClient";

export const AddUser = () => {
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role_id: "",
  });

  const handleAdd = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {data: {session}} = await supabase.auth.getSession()
      if(!session) console.log('no session')
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users",
        
          newUser,
          {
            headers:{
            Authorization: `Bearer ${session.access_token}`
          }
        }
        
      );
      console.log(response)
    } catch (error) {
      console.log(error.response?.data?.message);
    }
    setNewUser({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      role_id: 0,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        <input
          type="text"
          name="first_name"
          onChange={handleAdd}
          value={newUser.first_name}
          placeholder="First Name"
        />
      </label>
      <label htmlFor="lastName">
        <input
          type="text"
          name="last_name"
          onChange={handleAdd}
          value={newUser.last_name}
          placeholder="Last Name"
        />
      </label>
      <label htmlFor="role_id">
        <input
          type="number"
          name="role_id"
          onChange={handleAdd}
          value={newUser.role}
          placeholder="Role"
        />
      </label>
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          onChange={handleAdd}
          value={newUser.email}
          placeholder=" Email"
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          name="password"
          onChange={handleAdd}
          value={newUser.password}
          placeholder="Password"
        />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};
