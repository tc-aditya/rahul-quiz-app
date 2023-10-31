import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyAccount from "./pages/MyAccount";
import Issues from "./pages/Issues";
import AddIssue from "./pages/AddIssue";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateProject from "./pages/CreateProject";
import MyProjects from "./pages/MyProjects";
import Layout from "./components/Layout";
import EditIssue from "./pages/EditIssue";

const layoutWrapper = (props) => {
  return <Layout>{props}</Layout>;
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/my-account",
      element: layoutWrapper(<MyAccount />),
      // element: {layoutWrapper(<MyAccount />)}
    },
    {
      path: "/issues",
      element: layoutWrapper(<Issues />),
    },
    {
      path: "/add-issue",
      element: layoutWrapper(<AddIssue />),
    },
    {
      path: "/edit-issue",
      element: layoutWrapper(<EditIssue />),
    },
    {
      path: "/login",
      element: layoutWrapper(<Login />),
    },
    {
      path: "/",
      element: layoutWrapper(<Home />),
    },
    {
      path: "/create-project",
      element: layoutWrapper(<CreateProject />),
    },
    {
      path: "/dashboard",
      element: layoutWrapper(<MyProjects />),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
