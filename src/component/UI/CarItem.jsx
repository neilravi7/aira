// import { Component } from "react";
import { Card, Col } from "react-bootstrap";

const CarItem = (props) => {
    const { imgUrl, carName } = props.item;
    // const { id, imgUrl, model, carName, automatic, speed, price } = props.item

    return(
        <Col md="4">
             <Card className="bg-light mb-3">
                 <Card.Img className="rounded" variant="top" src={imgUrl} height="200" />
                 <Card.Body>
                     <Card.Title>{carName}</Card.Title>
                     <Card.Link className="btn btn-success" href="#">Book Now</Card.Link>
                     <Card.Link className="btn btn-primary" href="#">Details</Card.Link>
                 </Card.Body>
             </Card>
         </Col>
    );
}

export default CarItem;
