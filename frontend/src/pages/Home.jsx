import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import axios from "axios";

const API_URL = "http://localhost:3000/api/tasks"; 

export default function Home() {
 
  return (
    <div>
      <h1 className="text-center my-4">Task Manager</h1>
    </div>
  );
}
