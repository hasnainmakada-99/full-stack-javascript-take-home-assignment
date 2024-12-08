import axios from "axios";

const API = axios.create({
  baseURL: "https://full-stack-javascript-take-home.onrender.com/api", // Backend base URL
});

// Add token to requests if it exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
