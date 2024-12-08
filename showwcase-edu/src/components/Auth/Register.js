import React from "react";
import AuthForm from "../Pages/AuthForm";
import API from "../../api";

const Register = () => {
  const handleRegister = async (form) => {
    try {
      const { data } = await API.post("/auth/register", form);
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("User already registered. Please login.");
      } else if (error.response && error.response.status === 400) {
        alert("User already registered. Please login.");
      } else {
        alert("registration failed");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
        <AuthForm title="Register" onSubmit={handleRegister} />
        <div className="mt-4 text-center">
          <button
            className="text-blue-500 hover:underline"
            onClick={() => (window.location.href = "/login")}
          >
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
