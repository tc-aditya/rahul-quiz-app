import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="pt-5">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ position: "relative" }}
        >
          <MdArrowBackIosNew
            size={20}
            style={{ position: "absolute", left: "10px" }}
            onClick={() => navigate(-1)}
          />
          <h1 className="m-0 main-heading" style={{}}>
            Get Started
          </h1>
        </div>

        <div className="mt-5 mx-auto" style={{ width: "80%" }}>
          <p className="m-0 last-heading text-center">
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
              placeholder="What's your email address?"
              className="input-box"
            />
          </Form.Group>
        </Form>
        <div className="d-grid mb-3">
          <Button
            variant="primary"
            size="lg"
            className="custom-block-btn"
            onClick={() => navigate("/dashboard")}
          >
            Log In
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
