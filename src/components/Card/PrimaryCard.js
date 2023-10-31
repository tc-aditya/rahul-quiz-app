import React from "react";
import { Button, Card } from "react-bootstrap";
import { MdArrowForwardIos } from "react-icons/md";

const PrimaryCard = (props) => {
  return (
    <Card style={{ width: "95%", margin: "auto" }} className="bg-white mb-3">
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div className="w-50">
          <h3 className="m-0 mb-2">{props.title || "N/A"}</h3>
          <p className="m-0">{props.info || "N/A"}</p>
        </div>

        {props.btnShow && (
          <Button
            style={{
              backgroundColor: props.btnBgColor || "#00A991",
              color: props.btnColor || "#ffffff",
            }}
            className="rounded-5 custom-round-btn border-0"
          >
            {props.btnText || "N/A"}
          </Button>
        )}

        <div>
          <MdArrowForwardIos size={18} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default PrimaryCard;
