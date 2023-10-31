import React from "react";
import { Card } from "react-bootstrap";
import { MdArrowForwardIos } from "react-icons/md";

const AccountCard = (props) => {
  return (
    <Card style={{ width: "95%", margin: "auto" }} className="bg-white mb-3">
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div className="flex-grow-1">
          <h3 className="m-0 mb-2 card-heading">{props.title || "N/A"}</h3>
          <p className="m-0 card-text">{props.info || "N/A"}</p>
        </div>

        <div>
          <MdArrowForwardIos size={18} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default AccountCard;
