import React, { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "../images/badge.svg";

const Home = () => {
  return (
    <>
      <div className="row">
        <div
          className="col-md-6 col-sm-12 mx-auto d-flex flex-column justify-content-between"
          style={{ minHeight: "100vh", backgroundColor: "#EFEFEF" }}
        >
          <div className="pt-5 mb-3">
            <div className="text-center w-75 mx-auto">
              <h1 className="m-0 main-heading">
                Unleash Your Auditing Superpowers
              </h1>
            </div>

            <div className="mt-4 mx-auto" style={{ width: "90%" }}>
              <p className="last-heading w-75 mx-auto text-center">
                Kick chaos to the curb and make your site audits a breeze
              </p>
            </div>

            <div className="mt-5 mx-auto" style={{ width: "85%" }}>
              <div className="d-flex justify-content-start align-items-center gap-2 mb-2">
                <img src={Badge} alt="badge" />
                <p className="last-heading m-0">Create unlimited projects</p>
              </div>

              <div className="d-flex justify-content-start align-items-center gap-2 mb-2">
                <img src={Badge} alt="badge" />
                <p className="last-heading m-0">Create unlimited projects</p>
              </div>

              <div className="d-flex justify-content-start align-items-center gap-2 mb-2">
                <img src={Badge} alt="badge" />
                <p className="last-heading m-0">Create unlimited projects</p>
              </div>
            </div>
          </div>

          <div className="pb-5 mx-auto text-center" style={{ width: "90%" }}>
            <div className="d-grid mb-3">
              <Button
                variant="primary"
                size="lg"
                style={{ backgroundColor: "#00A991", border: "none" }}
                className="custom-block-btn"
              >
                Get Started Free
              </Button>
            </div>

            <p className="m-0 text-decoration-underline last-heading">
              Already have an account ? Log in here
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
