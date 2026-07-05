import "./LoginModal.css";
import { useState } from "react";

export default function LoginModal({ onClose }) {
    const[isLogin,setIsLogin]=useState(true);
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

        <form className="auth-form">
           
           {!isLogin && (
               <input 
                 type="Full name"
                 placeholder="Full name"
                />
           )}
          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          {!isLogin && (
            <input 
               type="password"
               placeholder="Confirm Password"
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