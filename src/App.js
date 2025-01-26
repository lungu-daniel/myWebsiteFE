import Matrix from "./components/Matrix";
import { Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Matrix />
            <Navbar/>
            <div style={{ marginTop: `70px` }}>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </>
    );
}

export default App;