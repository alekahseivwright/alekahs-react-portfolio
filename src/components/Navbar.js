import { Link } from "react-router-dom";
import logo from "../assets/alekah-react-logo.png";

function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="Alekah Logo" className="logo" />
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}  

export default Navbar;