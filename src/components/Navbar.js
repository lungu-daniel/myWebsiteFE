import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <div className="navbar-brand text-white">
                        <h1 className="m-0" style={{ fontSize: "1.5rem", color: "white" }}>Lungu Daniel</h1>
                        <h3 className="m-0" style={{ fontSize: "1rem", fontWeight: "normal", color: "white" }}>Software Engineer</h3>
                    </div>
                    <button
                        className="navbar-toggler text-white border-0"
                        type="button"
                        aria-label="Toggle navigation"
                        onClick={toggleMenu}
                        style={{ outline: "none" }}
                    >
                        <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto d-none d-lg-flex">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {menuOpen && (
                <div
                    className="position-fixed top-0 end-0 bottom-0 start-0 bg-dark bg-opacity-90 d-flex flex-column align-items-start d-lg-none"
                    style={{ zIndex: 1050, transition: "transform 0.3s ease-in-out", transform: menuOpen ? "translateX(0)" : "translateX(100%)" }}
                >
                    <div className="d-flex justify-content-between w-100 p-3">
                        <h3 className="text-white">Lungu Daniel</h3>
                        <button className="btn btn-light" onClick={closeMenu}>Close</button>
                    </div>
                    <ul className="nav flex-column ms-3">
                        <li className="nav-item mb-3">
                            <Link className="nav-link text-white" to="/" onClick={closeMenu}>About</Link>
                        </li>
                        <li className="nav-item mb-3">
                            <Link className="nav-link text-white" to="/projects" onClick={closeMenu}>Projects</Link>
                        </li>
                        <li className="nav-item mb-3">
                            <Link className="nav-link text-white" to="/contact" onClick={closeMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;