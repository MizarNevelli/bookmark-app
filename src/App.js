import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './pages/Create';
import Home from './pages/Home';

function App() {
  return (
    <div >
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-bookmark" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
