import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Error404 from "./Error404";
import Web from "./Web";
import JavaScript from "./JavaScript";
import Apps from "./Apps";


export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="py-5">
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/works" element={<Works />} >
                            <Route index element={<Web />} />
                            <Route path="web" element={<Web />} />
                            <Route path="js" element={<JavaScript />} />
                            <Route path="apps" element={<Apps />} />
                        </Route>
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Container>
            </main>
            <Footer />{" "}
        </BrowserRouter>
    );
}
