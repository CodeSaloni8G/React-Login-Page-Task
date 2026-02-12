import { useState } from "react";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setError("");
      alert("Login successful");
    }
  };

  return (
    <div className="page">
      <div className="login-box">
        <h1 className="title">Welcome Back</h1>
        <p className="subtitle">Please login to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button className="btn">Login</button>
        </form>

        <p className="footer-text">
          Don’t have an account? <span>Create one</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
