import { Nav } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

function Works() {
    return (
        <section>
            <h2>Our Works</h2>
            <Nav variant="tabs" defaultActiveKey="/web">
                <Nav.Item>
                    <NavLink className="nav-link" to="web">
                        WebSites
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="nav-link" to="scripts">
                        JavaScripts
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="nav-link" to="apps">
                        Applications
                    </NavLink>
                </Nav.Item>
            </Nav>
            <Outlet />
        </section>
    );
}

export default Works;
