import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RequireAuth({ children, requireVerified = true }) {
  const { user, loading, isVerified } = useAuth();
  const location = useLocation();

  if (loading) return null;
  if (!user) return <Navigate to="/signin" state={{ from: location }} replace />;
  if (requireVerified && !isVerified) return <Navigate to="/verify-email" replace />;
  return children;
}


