import "./Navbar.css";

export default function Navbar(){
    return (
        <nav className="navbar">
            <h2 className="logo">She Scope</h2>

            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Scholarships</a>
                <a href="#">About</a>
                <button className="login-btn">Login</button>
            </div>
        </nav>
    )
}