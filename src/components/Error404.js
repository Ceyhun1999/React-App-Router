import { useNavigate } from "react-router-dom";

function Error404() {
    let navigate = useNavigate();

    return (
        <section>
            <h2>Error 404</h2>
            <p>Content not found...</p>
            <button
                onClick={() => {
                    navigate("/");
                }}>
                Back to Home
            </button>
        </section>
    );
}

export default Error404;
