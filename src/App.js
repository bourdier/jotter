import './index.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './routes/Homepage';
import Dashboard from './routes/Dashboard';
import Editor from './routes/Editor';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="editor" element={<Editor />} />
      </Routes>
    </>
  );
}

export default App;
