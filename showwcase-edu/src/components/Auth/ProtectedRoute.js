// import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const ProtectedRoute = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Redirect to login if user is not authenticated
//   if (!currentUser) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
