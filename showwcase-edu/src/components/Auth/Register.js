import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          email,
          password,
        }
      );
      alert("Registered successfully!");
      navigate("/login");
    } catch (error) {
      console.error(`Registration error: ${error.message}`); // Debugging log
      alert(error.response.data.message || error.message);
    }
  };

  return (
    <>
      <button onClick={() => navigate("/login")}>Login</button>
      <form onSubmit={handleRegister}>
        <h2>Register Yourself Here</h2>
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
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
