import { Routes, Route } from 'react-router-dom';
import './index.css'

import Homepage from './routes/Homepage'
import Login from './routes/Login';
import Signup from './routes/Signup';
import Usage from './routes/Usage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/usage" element={<Usage />} />
      </Routes>
    </>
  )
}

export default App