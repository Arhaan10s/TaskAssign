import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import axios from "axios";

const API_URL = "http://localhost:3000/api/tasks"; 

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const fetchTasks = async () => {
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
  };

  const handleStatus = async (id, action) => {
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "All" ? true : task.status === filter
  );

  const handleUpdate = async (id, updatedData) => {
  
  };

  return (
    <div>
      <h1 className="text-center my-4">Task Manager</h1>
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <div className="mb-4">
        <select
          className="form-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={() => handleDelete(task.id)}
            onStatusChange={(id, action) => handleStatus(id, action)}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}
