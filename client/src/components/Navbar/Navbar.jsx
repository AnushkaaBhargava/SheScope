import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar({onLoginClick}){
    return (
        <nav className="navbar">
            <h2 className="logo">She Scope</h2>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/scholarships">Scholarships</Link>
                <a href="#">About</a>
                <button
                 className="login-btn"
                 onClick={onLoginClick}
                >
                 Login
                </button>
           
            </div>
        </nav>
    )
}