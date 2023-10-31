import React, { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import ProfileIcon from "../images/profile-icon.svg";
import PrimaryCard from "../components/Card/PrimaryCard";

const MyProjects = () => {
  return (
    <>
      <div className="row">
        <div
          className="col-md-6 col-sm-12 mx-auto d-flex flex-column justify-content-between"
          style={{ minHeight: "100vh", backgroundColor: "#EFEFEF" }}
        >
          <div className="pt-5 mb-3">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ position: "relative" }}
            >
              <img
                src={ProfileIcon}
                style={{ position: "absolute", right: "10px" }}
                alt="profile_icon"
              />
              <h1 className="m-0 main-heading">My Projects</h1>
            </div>

            <div className="mt-5">
              <PrimaryCard
                title="Roadmap"
                info="Tell us your ideas and feedback."
                btnBgColor=""
                btnColor=""
                btnText=""
                btnShow={true}
              />

              <Card
                style={{ width: "95%", margin: "auto" }}
                className="bg-white mb-3"
              >
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div className="">
                    <h3 className="m-0 mb-2">Roadmap</h3>
                    <p className="m-0">Tell us your ideas and feedback.</p>
                  </div>

                  <Button variant="danger" className="rounded-5">
                    High
                  </Button>
                  <div>
                    <MdArrowForwardIos size={18} />
                  </div>
                </Card.Body>
              </Card>
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
                Create New Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProjects;
