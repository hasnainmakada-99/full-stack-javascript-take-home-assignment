import React from "react";
import AuthForm from "../Pages/AuthForm";
import API from "../../api";

const Login = () => {
  const handleLogin = async (form) => {
    try {
      const { data } = await API.post("/auth/login", form);
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Login failed", error.response.data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <AuthForm title="Login" onSubmit={handleLogin} />
        <div className="mt-4 text-center">
          <button
            className="text-blue-500 hover:underline"
            onClick={() => (window.location.href = "/register")}
          >
            Don't have an account? Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
