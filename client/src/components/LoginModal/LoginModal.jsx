import "./LoginModal.css";
import { useState } from "react";
import api from "../../api/api.js";
import {useNavigate} from "react-router-dom"

export default function LoginModal({ onClose }) {
    const[isLogin,setIsLogin]=useState(true);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
    });

    const handleChange=(e)=>{
      setFormData({
        ...formData,
        [e.target.name]:e.target.value
      });
    };
    
    const handleSubmit= async (e)=>{

      e.preventDefault();

      try{
          
          if(isLogin){
            const res=await api.post("/auth/login",{
              email:formData.email,
              password:formData.password
            })

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            alert("Login Successful!");

            onClose();
            navigate("/dashboard")
          }
          else{

            if(formData.password!==formData.confirmPassword){
              alert("Passwords do not match!");
              return;
            }

            const res=await api.post("/auth/register",{
              name:formData.name,
              email:formData.email,
              password:formData.password
            });

            alert("Registration successful! Please login.");
            setIsLogin(true);

               setFormData({
                name: "",
                email: "",
                password: "",
              confirmPassword: ""
             });
          }
      }catch(error){
          
          alert(error.response?.data?.message || "Something went wrong");
      }
    }


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h1>{isLogin? "Welcome Back 👋":"Create Account" }</h1>

        <p className="subtitle">
          {isLogin? "Login to continue exploring scholarships." : "Join SheScope and discover scholarships."}
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
           
           {!isLogin && (
               <input 
                 type="text"
                 name="name"
                 placeholder="Full Name"
                 value={formData.name}
                 onChange={handleChange}
                />
           )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          {!isLogin && (
            <input 
               type="password"
               name="confirmPassword"
               placeholder="Confirm Password"
               value={formData.confirmPassword}
               onChange={handleChange}
            />
          )}

           <button type="submit" className="login-btn">
               {isLogin ? "Login" : "Register"}
           </button>

        </form>

        <p className="bottom-text">
            {isLogin ? (
                <>
                   Don't have an account?
                   <span className="register-link"
                     onClick={()=>setIsLogin(false)}
                   >
                    Register
                   </span>
                </>
                
            ): (
                 <>
                Already have an account?

                <span
                   className="register-link"
                   onClick={() => setIsLogin(true)}
                 >
                  Login
                </span>
            </> 
            )}
        </p>

      </div>
    </div>
  );
}