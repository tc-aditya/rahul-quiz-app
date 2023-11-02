import React, { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ImageCard from "../components/Card/ImageCard";
import Carousel from "react-multi-carousel";
import { useNavigate } from "react-router-dom";

const AddIssue = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      // slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      // slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      // slidesToSlide: 1, // optional, default to 1.
    },
  };

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
          <h1 className="m-0 main-heading">New Issue</h1>
        </div>

        <div className="mt-5 mx-auto" style={{ width: "90%" }}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="What's the name of this issue?"
                className="input-box"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="How would you describe this issue?"
              />
            </Form.Group>

            <div className="d-flex justify-content-around align-items-center mt-4 mx-auto btn-div">
              <Button variant="dark" className="rounded-5 custom-round-btn">
                Low
              </Button>

              <Button variant="primary" className="rounded-5 custom-round-btn">
                Medium
              </Button>

              <Button variant="dark" className="rounded-5 custom-round-btn">
                High
              </Button>
            </div>

            <div className="mt-5">
              <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <ImageCard />
                <ImageCard />
                <ImageCard />
              </Carousel>
            </div>
          </Form>
        </div>
      </div>

      <div className="pb-5 mx-auto text-center" style={{ width: "90%" }}>
        <div className="d-grid mb-3">
          <Button
            variant="primary"
            size="lg"
            onClick={() => setIsOpen(true)}
            className="custom-block-btn"
          >
            Add Images
          </Button>
        </div>

        <p
          className="m-0 text-decoration-underline last-heading"
          onClick={() => navigate("/issues")}
        >
          I'm done creating this issue
        </p>
      </div>

      <AddImagesModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const AddImagesModal = (props) => {
  const { isOpen, setIsOpen } = props;

  return (
    <Modal show={isOpen} onHide={() => setIsOpen(false)} size="lg" centered>
      <Modal.Body>
        <h3 className="m-0 mb-2">Add Images</h3>
        <p className="m-0 mb-3">How do you want to add images?</p>
        <div className="d-flex gap-2">
          <Button className="w-50 modal-btn-blue bg-blue">Take photo</Button>
          <Button className="w-50 modal-btn-light bg-lblue text-blue">
            Upload from gallery
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddIssue;
