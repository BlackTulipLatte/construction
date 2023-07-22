import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import useAuth from "./Auth"; // custom hook to check authentication

const ProtectedRoute = () => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/error" />;
};

export default ProtectedRoute;
