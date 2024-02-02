import {Link} from "react-router-dom";
import "../style.css";
const Navbar = () => (
    <nav>
        <h1>Lungu Daniel</h1>
        <h5>Software Engineer</h5>
        <ul>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;