import { Container, Row, Col } from "react-bootstrap";


import Meta from "../component/Meta";

const Home = () => {
    return (
        <div className="bg-light">
            <Meta title="Home" />
            <header className="py-5 mb-4">
                <Container mt="2">
                    <div className="text-center my-5">
                        <h1 className="fw-bolder"> Welcome to Aira </h1>
                        <p className="lead mb-0"> A Car Rental Service </p>
                    </div>
                </Container>
            </header>
            <Container >
                <Row className="no-gutter">
                    <Col lg="4">    
                            {/* <BookingForm>
                            </BookingForm> */}
                    </Col>
                    <Col lg="6" bg="light">

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;