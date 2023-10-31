import React, { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DeleteIcon from "../images/delete-icon.svg";
import AccountCard from "../components/Card/AccountCard";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
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
          <h1 className="m-0 main-heading">My Account</h1>
        </div>

        <div className="mt-5">
          <AccountCard
            title="Roadmap"
            info="Tell us your ideas and feedback."
          />
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
            Log Out
          </Button>
        </div>
        <p
          className="m-0 text-decoration-underline last-heading"
          onClick={() => setIsOpen(true)}
        >
          Delete my account
        </p>
      </div>

      <InfoModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const InfoModal = (props) => {
  const { isOpen, setIsOpen } = props;

  return (
    <Modal
      backdrop="static"
      show={isOpen}
      onHide={() => setIsOpen(false)}
      size="lg"
      centered
    >
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
            className="custom-danger-btn mb-3 "
            onClick={() => setIsOpen(false)}
          >
            Delete My Account
          </Button>
          <p
            className="text-center last-heading text-red"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default MyAccount;
