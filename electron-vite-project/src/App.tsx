import { useState } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import App2 from "./App2.tsx";
import App3 from "./App3.tsx";

function App() {
  const routerData = [
    {
      path: "/",
      element: <App2 />,
    },
    {
      path: "/App3",
      element: <App3 />,
    },
  ];

  const router = createHashRouter(
    routerData.map((route) => ({
      ...route,
      element: <App2></App2>,
    }))
  );

  return (
    <main className="flex justify-center items-center min-h-screen min-w-screen bg-slate-300">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
