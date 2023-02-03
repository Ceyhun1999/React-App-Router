import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

function Header({ setPage }) {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-link" to=".">
                                Home
                            </NavLink>
                            <NavLink className="nav-link" to="about">
                                About
                            </NavLink>
                            <NavLink className="nav-link" to="works">
                                Works
                            </NavLink>
                        </Nav>
                        <Nav>
                            <NavLink
                                className="nav-link"
                                style={({ isActive }) => ({ color: isActive ? "yellow" : "silver" })}
                                to="More">
                                More deets
                            </NavLink>
                            <NavLink
                                className="nav-link"
                                style={({ isActive }) => ({ color: isActive ? "yellow" : "silver" })}
                                to="contact">
                                Contact
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
