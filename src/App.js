import './index.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './routes/Homepage';
import Dashboard from './routes/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
