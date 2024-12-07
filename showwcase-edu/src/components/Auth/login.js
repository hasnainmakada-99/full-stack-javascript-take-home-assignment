import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth(); // Get setCurrentUser from useAuth

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );
      setCurrentUser(response.data.user); // Set the current user
      navigate("/home");
    } catch (error) {
      console.error(`Login error: ${error.message}`); // Debugging log
      alert(error.response.data.message || error.message);
    }
  };

  return (
    <>
      <button onClick={() => navigate("/register")}>Register</button>
      <form onSubmit={handleLogin}>
        <h2>Login Yourself Here</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
