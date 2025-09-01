import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:8000/api/auth/register/";

export default function Register() {
  const [user_name, setUserName] = useState("");
  const [user_email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== password2) {
      setError("Passwords do not match");
      return;
    }
    try {
      await axios.post(API_URL, { user_name, user_email, password });
      navigate("/login");
    } catch (err) {
      setError("Registration failed",err);
    }
  };

  return (
    <div className="task-container">
      <div className="task-card">
        <h1 className="task-title">Register</h1>
        <form onSubmit={handleSubmit} className="task-form">
          <input
            type="text"
            placeholder="Username"
            value={user_name}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="task-input"
          />
          <input
            type="email"
            placeholder="Email"
            value={user_email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="task-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="task-input"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
            className="task-input"
          />
          <button type="submit" className="task-button">Register</button>
          {error && <div style={{ color: "red" }}>{error}</div>}
        </form>
      </div>
    </div>
  );
}