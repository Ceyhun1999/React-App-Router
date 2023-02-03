import { useParams } from "react-router-dom";

function A() {
    const { id } = useParams();
    return (
        <section>
            <h2>Application - {id}</h2>
        </section>
    );
}

export default A;
