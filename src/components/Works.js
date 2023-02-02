import { Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export default function Works() {
    return (
        <section>
            <h2>Works App</h2>
            <Nav variant="tabs" defaultActiveKey="web">
                <Nav.Item>
                    <Link className="nav-link active" to="web">
                        WebSites
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="js">
                        JavaScript
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="apps">
                        Apps
                    </Link>
                </Nav.Item>
            </Nav>
            <Outlet />
        </section>
    );
}
