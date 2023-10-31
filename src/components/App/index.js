import React, { useState } from "react";

import Layout from "../Layout";
import Loader from "../Loader";
import Main from "../Main";
import Quiz from "../Quiz";
import Result from "../Result";
import Login from "../Main/login";

import { shuffle } from "../../utils";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LOGIN } from "../../constants";
import LandingPage from "../LandingPage";
import CreateProject from "../Project/create.project";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(null);
  return (
    <>
      {/* {loading && <Loader {...loadingMessage} />}
      {!loading && <Login />} */}
      {loading && <Loader {...loadingMessage} />}
      {!loading && <CreateProject />}
    </>
  );
};

export default App;
