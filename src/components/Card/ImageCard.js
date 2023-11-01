import React from "react";
import { Card } from "react-bootstrap";

const ImageCard = () => {
  return (
    <Card className="card-item" >
      <Card.Header className="text-end text-red">Delete</Card.Header>
      <Card.Img
        variant="top"
        src="https://placehold.co/150x100"
        className="p-3"
      />
    </Card>
  );
};

export default ImageCard;
