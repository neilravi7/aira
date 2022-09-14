import { Container, Row, Col } from "react-bootstrap";
import Meta from "../component/Meta";
const About = () =>{
    return (
        <div>
        <Meta title="Home"/>
            <header class="py-5 bg-light border-bottom mb-4">
                <Container>
                    <div className="text-center my-5">
                        <h1 className="fw-bolder"> Welcome to Aira </h1>
                        <p className="lead mb-0"> About Page</p>
                    </div>
                </Container>
            </header>
            <Container>
                <Row className="no-gutter">
                    <Col lg="12" className="bg-light">
                        <Row className="no-gutter">
                            <Col md="4" className="d-flex align-items-center bg-dark text-light">
                                <p> About </p>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default About;