import React, { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddIssue = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              <MdArrowBackIosNew
                size={20}
                style={{ position: "absolute", left: "10px" }}
              />
              <h1 className="m-0 main-heading">New Issue</h1>
            </div>

            <div className="mt-5 mx-auto" style={{ width: "90%" }}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="email"
                    placeholder="What's the name of this issue ?"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="How would you describe this issue ?"
                  />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mt-5 mx-auto">
                  <Button variant="dark" className="rounded-5 custom-round-btn">
                    Low
                  </Button>

                  <Button
                    variant="primary"
                    className="rounded-5 custom-round-btn"
                  >
                    Medium
                  </Button>

                  <Button variant="dark" className="rounded-5 custom-round-btn">
                    High
                  </Button>
                </div>

                <div className="mt-5">
                  <Card style={{ width: "10rem" }}>
                    <Card.Header className="text-end">Delete</Card.Header>
                    <Card.Img
                      variant="top"
                      src="https://placehold.co/150x100"
                      // width={20}
                      // height={20}
                      className="p-3"
                    />
                    {/* <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body> */}
                  </Card>
                </div>
              </Form>
            </div>
          </div>

          <div className="pb-5 mx-auto text-center" style={{ width: "90%" }}>
            <div className="d-grid mb-3">
              <Button
                variant="primary"
                size="lg"
                style={{ backgroundColor: "#00A991", border: "none" }}
                onClick={() => setIsOpen(true)}
                className="custom-block-btn"
              >
                Add Images
              </Button>
            </div>

            <p className="m-0 text-decoration-underline last-heading">
              I'm done creating this issue
            </p>
          </div>
        </div>
      </div>
      <AddImagesModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const AddImagesModal = (props) => {
  const { isOpen, setIsOpen } = props;

  return (
    <Modal show={isOpen} onHide={() => setIsOpen(false)} size="lg" centered>
      {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
      <Modal.Body>
        <h3 className="m-0 mb-2">Add Images</h3>
        <p className="m-0 mb-3">How do you want to add images ?</p>
        <div className="d-flex gap-2">
          <Button variant="primary" size="lg" className="w-50">
            Take Photo
          </Button>
          <Button variant="secondary" size="lg" className="w-50">
            Upload from gallery
          </Button>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
    </Modal>
  );
};

export default AddIssue;
