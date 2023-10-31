import React from "react";
import { Card } from "react-bootstrap";

const ImageCard = () => {
  return (
    <Card style={{ width: "10rem" }}>
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
