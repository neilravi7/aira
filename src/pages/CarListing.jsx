import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import carData from "../assets/data/CarData";
import CarItem from "../component/UI/CarItem";
import Meta from "../component/Meta";

export default class CarListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carData: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:8000/vehicle/list/");
      const carData = await res.json();
      this.setState({
        carData,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <Meta title="Listing" />
        <header className="py-5 mb-4">
          <Container mt="2">
            <div className="text-center">
              {/* <h1> Welcome to Aira </h1> */}
              <p className="lead mb-0"> All Available Cars </p>
            </div>
          </Container>
        </header>
        <Container>
          <Row className="d-flex">
            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
