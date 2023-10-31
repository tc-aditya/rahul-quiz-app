import React from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <div className="row">
      <div
        className="col-md-6 col-sm-12 mx-auto d-flex flex-column justify-content-between"
        style={{ height: "100vh", backgroundColor: "#EFEFEF" }}
      >
        <div className="pt-5">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ position: "relative" }}
          >
            <MdArrowBackIosNew
              size={20}
              style={{ position: "absolute", left: "10px" }}
            />
            <h1 className="m-0" style={{}}>
              Get Started
            </h1>
          </div>

          <div className="mt-5 mx-auto" style={{ width: "65%" }}>
            <p className="m-0">
              Just enter your email address and we'll email you a magic link to
              log straight in.
            </p>
          </div>
        </div>

        <div className="pb-5 mx-auto text-center" style={{ width: "90%" }}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="What's the name of this issue ?"
                className="py-2"
                style={{ fontSize: "18px" }}
              />
            </Form.Group>
          </Form>
          <div className="d-grid mb-3">
            <Button
              variant="primary"
              size="lg"
              style={{ backgroundColor: "#00A991", border: "none" }}
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
