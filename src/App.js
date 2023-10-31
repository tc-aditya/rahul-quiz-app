import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyAccount from "./pages/MyAccount";
import Issues from "./pages/Issues";
import AddIssue from "./pages/AddIssue";
import Login from "./pages/Login";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/issues",
      element: <Issues />,
    },
    {
      path: "/add-issue",
      element: <AddIssue />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
