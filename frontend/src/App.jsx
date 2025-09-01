import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';
import Header from './pages/Header';
import Login from './pages/login';
import Register from './pages/Register';
function App() {
  return (
    
      <main>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    
  )
}

export default App;