import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <Link to="/dashboard" className="text-lg font-bold">
          Dashboard
        </Link>
        <button onClick={handleLogout} className="text-red-500">
          Logout
        </button>
      </nav>
      <main className="flex-1 p-4 bg-gray-100">{children}</main>
    </div>
  );
};

export default Layout;
