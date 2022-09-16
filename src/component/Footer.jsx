import { Container } from "react-bootstrap";
const year = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className="bg-primary">
            <Container className="container-fluid text-center text-dark border-top mt-4 py-4 px-sm-3 px-md-5">
                <p className="mb-2 text-dark">Copyright React Demo App &copy; {year}</p>
            </Container>
        </footer>
    );
};

export default Footer;

