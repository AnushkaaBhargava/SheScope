import "./LoginModal.css";

export default function LoginModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h1>Welcome Back 👋</h1>

        <p className="subtitle">
          Login to continue exploring scholarships.
        </p>

        <form className="auth-form">

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <p className="bottom-text">
          Don't have an account?
          <span className="register-link">
            Register
          </span>
        </p>

      </div>
    </div>
  );
}