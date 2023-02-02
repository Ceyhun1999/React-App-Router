import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                            <Link className="nav-link" to="/works">
                                Works
                            </Link>
                        </Nav>
                        <Nav>
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
