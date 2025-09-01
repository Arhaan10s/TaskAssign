import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import API from "../components/API";

const API_URL = "notes/";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const fetchTasks = async () => {
    const res = await API.get(API_URL);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await API.delete(`${API_URL}${id}/`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

 const handleStatus = async (id, action) => {
    
     await API.put(`${API_URL}${id}/${action}/`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "All" ? true : task.status === filter
  );

   const handleUpdate = async (id, updatedData) => {
    const res = await API.put(`${API_URL}${id}/`, updatedData);
    setTasks(tasks.map((task) => (task.id === id ? res.data : task)));
  };


  return (
    <div>
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
