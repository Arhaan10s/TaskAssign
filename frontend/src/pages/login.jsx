import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:8000/api/auth/token/";

export default function Login() {
  const [user_email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(API_URL, { user_email, password });
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      navigate("/");
    } catch (err) {
      setError("Invalid credentials",err);
    }
  };

  return (
    <div className="task-container">
      <div className="task-card">
        <h1 className="task-title">Login</h1>
        <form onSubmit={handleSubmit} className="task-form">
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
          <button type="submit" className="task-button">Login</button>
          {error && <div style={{ color: "red" }}>{error}</div>}
        </form>
      </div>
    </div>
  );
}