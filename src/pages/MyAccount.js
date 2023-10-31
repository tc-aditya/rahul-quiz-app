import React, { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import ProfileIcon from "../images/profile-icon.svg";
import PrimaryCard from "../components/Card/PrimaryCard";
import DeleteIcon from "../images/delete-icon.svg";

const MyAccount = () => {
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
              <h1 className="m-0 main-heading">My Account</h1>
            </div>

            <div className="mt-5">
              <PrimaryCard
                title="Roadmap"
                info="Tell us your ideas and feedback."
                btnBgColor=""
                btnColor=""
                btnText=""
                btnShow={false}
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
                Logout
              </Button>
            </div>
            <p
              className="m-0 text-decoration-underline last-heading"
              onClick={() => setIsOpen(true)}
            >
              Delete my account
            </p>
          </div>
        </div>
      </div>
      <InfoModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const InfoModal = (props) => {
  const { isOpen, setIsOpen } = props;

  return (
    <Modal show={isOpen} onHide={() => setIsOpen(false)} size="lg" centered>
      <Modal.Body>
        <div className="mb-3 text-center">
          <img src={DeleteIcon} alt="delete_icon" />
        </div>

        <h3 className="m-0 mb-2 text-center">
          Do you want to delete your account?
        </h3>
        <p className="m-0 mb-3 last-heading text-center">
          The action is irreversible, once you delete your account, it's gone.
        </p>
        <div className="d-grid mb-3">
          <Button
            variant="primary"
            size="lg"
            style={{ backgroundColor: "#D21C1C", border: "none" }}
            className="custom-block-btn mb-3"
            onClick={() => setIsOpen(false)}
          >
            Delete My Account
          </Button>
          <p className="text-center last-heading" style={{ color: "#D21C1C" }}>
            Cancel
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default MyAccount;
