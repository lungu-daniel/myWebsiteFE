import Matrix from "./components/Matrix";
import "./style.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Matrix />
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
        </>
    );
}

export default App;
