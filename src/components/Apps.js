import { Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function Apps() {
    let apparr = [
        { id: 1, name: "Web App - 1" },
        { id: 2, name: "Mobile App - 2" },
        { id: 3, name: "Mobile App - 3" },
    ];
    return (
        <section>
            <h2>Web & Mobile Aplication</h2>
            <Nav className="flex-column">
                {apparr.map(({ id, name }) => (
                    <Link key={id} className="nav-link" to={id.toString()}>
                        {name}
                    </Link>
                ))}
            </Nav>
            <Outlet />
        </section>
    );
}

export default Apps;
