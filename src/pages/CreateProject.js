import React, { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="pt-5 mb-3">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ position: "relative" }}
        >
          <MdArrowBackIosNew
            size={20}
            style={{ position: "absolute", left: "10px" }}
            onClick={() => navigate(-1)}
          />
          <h1 className="m-0 main-heading">Create Project</h1>
        </div>

        <div className="mt-4 mx-auto" style={{ width: "90%" }}>
          <p
            className="last-heading mx-auto text-center"
            style={{ width: "90%" }}
          >
            Just enter the name of your project, it could be the name of the
            site you're working on, the location or something else.
          </p>
        </div>
      </div>

      <div className="pb-5 mx-auto text-center" style={{ width: "90%" }}>
        <div className="mt-5">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="What's the name of this project?"
                className="input-box"
              />
            </Form.Group>
          </Form>
        </div>

        <div className="d-grid mb-3">
          <Button
            variant="primary"
            size="lg"
            className="custom-block-btn"
            onClick={() => setIsOpen(true)}
          >
            Save
          </Button>
        </div>
      </div>
      <InfoModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const InfoModal = (props) => {
  const { isOpen, setIsOpen } = props;
  const navigate = useNavigate();

  return (
    <Modal
      backdrop="static"
      show={isOpen}
      onHide={() => setIsOpen(false)}
      size="lg"
      centered
    >
      <Modal.Body>
        <h3 className="m-0 mb-2 text-center">Congratulations!</h3>
        <p className="m-0 mb-3 last-heading text-center">
          You've just created your first project. Click on the project to start
          adding issues to it.
        </p>
        <div className="d-grid mb-3">
          <Button
            variant="primary"
            size="lg"
            style={{ backgroundColor: "#00A991", border: "none" }}
            className="custom-block-btn"
            onClick={() => navigate("/dashboard")}
          >
            Close
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreateProject;
