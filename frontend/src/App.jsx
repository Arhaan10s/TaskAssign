import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';

function App() {
  return (
    
      <main>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    
  )
}

export default App;