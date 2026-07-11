import "./Navbar.css";
import {Link,useNavigate} from "react-router-dom";

export default function Navbar({onLoginClick}){

    const navigate=useNavigate();

    const token=localStorage.getItem("token");

    const handleLogout=()=>{
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <nav className="navbar">
            <h2 className="logo">She Scope</h2>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/scholarships">Scholarships</Link>
                <a href="#">About</a>
                {token? (
                    <button 
                      className="login-btn"
                      onClick={handleLogout}

                    >
                        Logout
                    </button>
                ): <button
                   className="login-btn"
                   onClick={onLoginClick}
                   >
                    Login
                    </button>}
           
            </div>
        </nav>
    )
}