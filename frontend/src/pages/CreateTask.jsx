import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../components/API";

const API_URL = "tasks/";

export default function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post(API_URL, { title, description });
    navigate("/");
  };

  return (
    <div className="task-container">
      <div className="task-card">
        <h1 className="task-title">Create Task</h1>
        <form onSubmit={handleSubmit} className="task-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="task-input"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="task-textarea"
          />
          <button type="submit" className="task-button">Create</button>
        </form>
      </div>
    </div>
  );
}
