// import "./App.css";
// import { BrowserRouter as Router, Routes } from "react-router-dom";
// import Login from "./components/Auth/login";
// import Register from "./components/Auth/Register";
// import ProtectedRoute from "./components/Auth/ProtectedRoute";
// import { Route } from "react-router-dom";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/" element={<Login />} />
//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Auth/login";
import Register from "./components/Auth/Register";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Home from "./pages/Home";
import { useAuth } from "./AuthContext";
function App() {
  const { currentUser } = useAuth();
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/register"
          element={currentUser ? <Navigate to="/home" /> : <Register />}
        />
        <Route
          path="/"
          element={currentUser ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
