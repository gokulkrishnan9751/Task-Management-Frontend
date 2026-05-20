import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes, userRoutes, adminRoutes } from "./routeConfig";
import MainLayout from "../layout/MainLayout";
import withRole from "../hoc/withRole";

export default function AppRouter() {

  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.to} path={route.to} element={<route.element />} />
      ))}
      
      <Route path="/user" element={<MainLayout />}>
        {userRoutes.map((route) => (
          <Route key={route.to} path={route.to} element={<route.element />} />
        ))}
      </Route>

      <Route path="/admin" element={<MainLayout />}>
        {adminRoutes.map((route) => (
          <Route key={route.to} path={route.to} element={<route.element />} />
        ))}
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
