import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/alekah-react-logo.png";

function Navbar() {
    const { user, signout } = useContext(AuthContext);
    const navigate = useNavigate();
    const isAdmin = user?.role === "admin";

    const handleLogout = async () => {
        await signout();
        navigate("/");
    };

    return (
        <nav className="navbar">
            <Link to="/" className="logo-link">
                <img src={logo} alt="Alekah Logo" className="logo" />
            </Link>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {isAdmin ? (
                    <li>
                        <button type="button" className="nav-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                ) : (
                    <li><Link to="/signin">Admin Login</Link></li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
