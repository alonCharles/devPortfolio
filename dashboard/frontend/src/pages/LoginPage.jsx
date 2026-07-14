import { useState } from "react";

export const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleLoginData = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post(
    //     "http://localhost:3000/api/users",
    //     loginData,
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
     
    console.log(loginData)

    setLoginData({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      role: "",
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="firstName">
        <input
          type="text"
          name="first_name"
          onChange={handleLoginData}
          value={loginData.first_name}
          placeholder="First Name"
        />
      </label>
      <label htmlFor="lastName">
        <input
          type="text"
          name="last_name"
          onChange={handleLoginData}
          value={loginData.last_name}
          placeholder="Last Name"
        />
      </label>
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
  );
};
