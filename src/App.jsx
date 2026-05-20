import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRouter from "./router/AppRouter";

import TostProvider from "./context/TostProvider";
import UserProvider from "./context/UserInfoContext";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TostProvider>
        <UserProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </UserProvider>
      </TostProvider>
    </Suspense>
  );
}
