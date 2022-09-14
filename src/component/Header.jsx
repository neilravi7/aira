import { Container } from "react-bootstrap";
const Header = ({head, description}) => {
    <Container>
        <div className="text-center mt-5">
            <h1>
                {head} Page
            </h1>
            <p className="lead text-capitalize">
                {description}
            </p>
        </div>
    </Container>
};

export default Header;