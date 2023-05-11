import { Routes, Route } from 'react-router-dom';
import './index.css'

import Homepage from './routes/Homepage'
import Login from './routes/Login';
import Signup from './routes/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App