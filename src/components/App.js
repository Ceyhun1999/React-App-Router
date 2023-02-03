import { Container } from "react-bootstrap";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./About";
import Error404 from "./Error404";
import Footer from "./Footer";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Works from "./Works";
import Apps from "./Apps";
import A from "./A";
import Web from "./Web";
import Scripts from "./Scripts";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <main className="py-5">
                    <Container>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="works" element={<Works />}>
                                <Route index element={<Navigate to="web" />} />
                                <Route path="web" element={<Web />} />
                                <Route path="scripts" element={<Scripts />} />
                                <Route path="apps" element={<Apps />}>
                                    <Route path=":id" element={<A />} />
                                </Route>
                            </Route>
                            <Route path="error404" element={<Error404 />} />
                            <Route path="*" element={<Navigate to="error404" />} />
                        </Routes>
                    </Container>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
