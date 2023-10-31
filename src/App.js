import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyAccount from "./pages/MyAccount";
import Issues from "./pages/Issues";
import AddIssue from "./pages/AddIssue";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateProject from "./pages/CreateProject";
import MyProjects from "./pages/MyProjects";

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
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/create-project",
      element: <CreateProject />,
    },
    {
      path: "/my-projects",
      element: <MyProjects />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
