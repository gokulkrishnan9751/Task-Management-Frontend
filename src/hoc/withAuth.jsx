import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function withAuth(Component) {
  return (props) => {
    const token = localStorage.getItem("token");

    if (!token) {
      return <Navigate to="/login" />;
    }

    return <Component {...props} />;
  };
}
