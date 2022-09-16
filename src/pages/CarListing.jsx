import { Container, Row } from "react-bootstrap";
import carData from "../assets/data/CarData";
import CarItem from "../component/UI/CarItem";
import Meta from "../component/Meta";


const CarListing = () => {
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
};

export default CarListing;