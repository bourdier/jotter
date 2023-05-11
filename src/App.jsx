import { Routes, Route } from 'react-router-dom';
import './index.css'

import Homepage from './routes/Homepage'
import Login from './routes/Login';
import Signup from './routes/Signup';
import Usage from './routes/Usage';
import Dashboard from './routes/Dashboard';
import Editor from './routes/Editor';
import Notes from './routes/Notes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/usage" element={<Usage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  )
}

export default App