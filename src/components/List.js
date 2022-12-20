import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function List(props) {
  // console.log(props.data);
  // console.log("hel;l")
  return (
    <>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.data.images[0]} />
          <Card.Body>
            <Card.Text>{props.data.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      {/* <h2>Page</h2> */}
    </>
  );
}

export default List;
