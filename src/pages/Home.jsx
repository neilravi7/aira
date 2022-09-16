import { Container, Row, Col } from "react-bootstrap";
import BookingForm from "../forms/BookingForm";
import Meta from "../component/Meta";

const Home = () => {
    return (
        <div>
            <Meta title="Home" />
            <header className="py-5 mb-4">
                <Container mt="2">
                    <div className="text-center">
                        <h1> Welcome to Aira </h1>
                        <p className="lead mb-0"> A Car Rental Service </p>
                    </div>
                </Container>
            </header>
            <Container >
                <Row className="no-gutter">

                    <Col md="12" className="d-flex align-items-center">
                        <div className="w-100">
                            {/* <h3 className="m-4">Better Way to Rent Your Perfect Cars</h3> */}
                            <Row className="d-flex mb-4">
                                <Col md="4" className="d-flex align-self-stretch">
                                    <div className="services w-100 text-center text-info ">
                                        <div className="icon d-flex align-items-center justify-content-center"><span><h1><ion-icon name="navigate-circle-outline"></ion-icon></h1></span></div>
                                        <div className="text w-100">
                                            <h5 className="heading mb-2">Choose Your Pickup Location</h5>
                                        </div>
                                    </div>
                                </Col>

                                <Col md="4" className="d-flex align-self-stretch">
                                    <div className="services w-100 text-center text-success">
                                        <div className="icon d-flex align-items-center justify-content-center"><span><h1><ion-icon name="happy-outline"></ion-icon></h1></span></div>
                                        <div className="text w-100">
                                            <h5 className="heading mb-2">Select Best Deal</h5>
                                        </div>
                                    </div>
                                </Col>

                                <Col md="4" className="d-flex align-self-stretch">
                                    <div className="services w-100 text-center text-danger">
                                        <div className="d-flex align-items-center justify-content-center"><h1><ion-icon name="trail-sign-outline"></ion-icon></h1></div>
                                        <div className="text w-100">
                                            <h5 className="mb-2">Reserve Your Rental Car</h5>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="bg-light p-3 rounded">
                                <BookingForm>
                                    
                                </BookingForm>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;