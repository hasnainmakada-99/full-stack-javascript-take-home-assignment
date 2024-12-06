import React from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <div>
      <h1>Welcome, {currentUser.email}</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Home;
