import React from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const MyAccount = () => {
  return (
    <div className="row">
      <div
        className="col-md-6 col-sm-12 mx-auto d-flex flex-column justify-content-between"
        style={{ height: "100vh", backgroundColor: "#EFEFEF" }}
      >
        <div className="pt-5">
          {/* <div className="w-75"> */}
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ position: "relative" }}
          >
            <MdArrowBackIosNew
              size={20}
              style={{ position: "absolute", left: "10px" }}
            />
            <h1 className="m-0" style={{}}>
              My Account
            </h1>
          </div>
          {/* </div> */}

          <div className="mt-5">
            <Card
              style={{ width: "95%", margin: "auto" }}
              className="bg-white mb-3"
            >
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div className="">
                  <h3 className="m-0 mb-2">Roadmap</h3>
                  <p className="m-0">Tell us your ideas and feedback.</p>
                </div>
                <div>
                  <MdArrowForwardIos size={18} />
                </div>
              </Card.Body>
            </Card>

            <Card
              style={{ width: "95%", margin: "auto" }}
              className="bg-white mb-3"
            >
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div className="">
                  <h3 className="m-0 mb-2">Roadmap</h3>
                  <p className="m-0">Tell us your ideas and feedback.</p>
                </div>
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
            >
              Logout
            </Button>
          </div>

          <p className="m-0 text-decoration-underline">Delete my account</p>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
